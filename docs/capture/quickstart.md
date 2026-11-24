---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

This guide takes you from a blank machine to GitHub events recorded in OpenSearch, with Docker. Every step ends with a check, so you know where you stand before you move on. Plan around 15 minutes.

You will start 4 services from one compose file:

- **zqueue**, the webhook listener, on port 3003.
- **redis**, the queue that buffers the deliveries.
- **opensearch**, single-node, with the security plugin enabled (TLS plus authentication).
- **dashboards**, OpenSearch Dashboards, on port 5601.

## Prerequisites

- Docker with the compose plugin.
- Admin access to the GitHub organization or repository you want to record events from.
- For step 6 only: a host that GitHub can reach over HTTPS. Steps 1 to 5 run on your machine.

## Step 1 — Get the stack

```bash
git clone https://github.com/zencrepes/zqueue.git
cd zqueue/deploy
cp config/config.yml.example config/config.yml
```

The [`deploy/`](https://github.com/zencrepes/zqueue/tree/main/deploy) folder contains the compose file and a `config/` folder. The `config/` folder is mounted into the zqueue container, at `/root/.config/zencrepes`.

## Step 2 — Start the stack

Pick a strong admin password for OpenSearch. The first boot requires at least 8 characters, with upper case, lower case, a digit and a special character:

```bash
export OPENSEARCH_INITIAL_ADMIN_PASSWORD='<a strong admin password>'
docker compose up -d
```

On the first boot of a blank instance, OpenSearch creates the `admin` user with that password. The variable only takes effect on that first boot: changing it later does not change the password.

**Check**: the cluster answers as `admin`. Port 9200 stays internal to the compose network, so run the call from inside the container:

```bash
docker compose exec opensearch curl -sk -u "admin:$OPENSEARCH_INITIAL_ADMIN_PASSWORD" https://localhost:9200/_cluster/health
```

A JSON answer with `"status":"green"` or `"status":"yellow"` means OpenSearch is up. `-k` accepts the self-signed demo certificate the image ships with.

## Step 3 — Create a user for zqueue

Run zqueue with its own least-privilege user, not with `admin`. Three calls against the security plugin API create the role, the user and the mapping.

First the role. It can check the cluster health, create the zqueue indices, and write documents through the bulk API:

```bash
ADMIN="admin:$OPENSEARCH_INITIAL_ADMIN_PASSWORD"

docker compose exec opensearch curl -sk -u "$ADMIN" -X PUT https://localhost:9200/_plugins/_security/api/roles/zqueue_writer \
  -H 'content-type: application/json' -d '{
  "cluster_permissions": ["cluster:monitor/health", "indices:data/write/bulk"],
  "index_permissions": [{
    "index_patterns": ["gh_events_*", "t_states_*", "t_runs_*", "t_cases_*", "t_perfs_*"],
    "allowed_actions": ["create_index", "write", "indices:admin/exists", "indices:admin/get"]
  }]
}'
```

Then the user. Pick a strong password, and keep it for step 4. OpenSearch rejects a password that is too weak or too similar to the user name:

```bash
docker compose exec opensearch curl -sk -u "$ADMIN" -X PUT https://localhost:9200/_plugins/_security/api/internalusers/zqueue \
  -H 'content-type: application/json' -d '{
  "password": "<the zqueue password>"
}'
```

Then map the user to the role:

```bash
docker compose exec opensearch curl -sk -u "$ADMIN" -X PUT https://localhost:9200/_plugins/_security/api/rolesmapping/zqueue_writer \
  -H 'content-type: application/json' -d '{
  "users": ["zqueue"]
}'
```

**Check**: the new credentials answer the health call:

```bash
docker compose exec opensearch curl -sk -u 'zqueue:<the zqueue password>' https://localhost:9200/_cluster/health
```

## Step 4 — Configure zqueue

Edit `config/config.yml`. Set the zqueue password from step 3, and generate strong random values for the 2 webhook secrets, for example with `openssl rand -hex 32`:

```yaml
elasticsearch:
  engine: opensearch
  host: https://opensearch:9200
  username: zqueue
  password: <the zqueue password>
  # The demo certificates are self-signed
  sslVerify: false
redis:
  host: redis://redis:6379
github:
  webhook:
    # The same value goes into the GitHub webhook form in step 6
    secret: <a strong random value>
testing:
  webhook:
    secret: <a strong random value>
```

Then restart zqueue:

```bash
docker compose restart zqueue
```

**Check**: the log reports the connection to OpenSearch, and no error:

```bash
docker compose logs zqueue | tail -20
```

## Step 5 — Send a signed test event

Before GitHub enters the picture, prove the pipeline end to end from your machine. Sign a small payload with the webhook secret and post it:

```bash
SECRET='<the github webhook secret from step 4>'
BODY='{"action":"opened","issue":{"number":1}}'
SIG="sha256=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "$SECRET" | awk '{print $NF}')"
curl -X POST http://localhost:3003/github/webhook \
  -H 'content-type: application/json' \
  -H 'x-github-event: issues' \
  -H "x-hub-signature-256: $SIG" \
  -d "$BODY"
```

A `202 {"success":true,"queued":true}` answer means the delivery was accepted. A `401` means the signature or the secret is wrong.

**Check**: the event landed in its index. The `zqueue` role writes and does not read, so read as `admin`:

```bash
docker compose exec opensearch curl -sk -u "$ADMIN" 'https://localhost:9200/gh_events_issues/_search?pretty'
```

The answer holds 1 document, with your payload and its envelope (event, action, delivery id, receive date).

## Step 6 — Configure the GitHub webhook

Put zqueue behind a TLS-terminating reverse proxy (nginx, Caddy, Traefik, and so on) before you expose it to GitHub. GitHub only needs to reach `POST /github/webhook`.

In the GitHub organization, or in a single repository: **Settings → Webhooks → Add webhook**.

- **Payload URL**: `https://<your host>/github/webhook`
- **Content type**: `application/json`. This value is required, because zqueue verifies the signature over the raw JSON body.
- **Secret**: the value of `github.webhook.secret` in `config.yml`
- **Events**: "Send me everything" records all events, and zqueue stores each type in its own index. To drop types you do not want, list them in `github.webhook.excludeGithubEvents`.

**Check**: GitHub sends a `ping` event on creation. Under **Recent Deliveries**, the delivery shows a `202`, and the index list now holds `gh_events_ping`:

```bash
docker compose exec opensearch curl -sk -u "$ADMIN" 'https://localhost:9200/_cat/indices/gh_events_*?v'
```

From here, every event of the organization lands in OpenSearch as it happens. Redeliveries are safe: the GitHub delivery GUID is the document id, so a redelivered event overwrites its own document.

## Step 7 — Browse the events

Open [http://localhost:5601](http://localhost:5601) and log in as `admin`. The write-only `zqueue` user cannot log in.

1. Open the menu, then **Dashboards Management** → **Index patterns** → **Create index pattern**.
2. Enter `gh_events_*` and pick `receivedAt` as the time field.
3. Open **Discover** to search and filter the recorded events.

The [OpenSearch Dashboards page](dashboards.md) covers the index patterns of the testing and performance indices.

## Troubleshooting

- **`401 Invalid webhook signature`**: the secret differs between `config.yml` and the GitHub webhook form, or the webhook content type is not `application/json`.
- **`202` but no document**: the delivery is queued in Redis and retried. Check the zqueue logs with `docker compose logs zqueue`. A `security_exception` means the role of step 3 misses an index pattern, for example after a change of `esIndexPrefix`.
- **`Could not reach the search cluster at startup`**: the host, the credentials, or the TLS options in `config.yml` are wrong. With the demo certificates, `sslVerify: false` is required.
- **The first boot of OpenSearch exits immediately**: `OPENSEARCH_INITIAL_ADMIN_PASSWORD` was missing or too weak.

The [setup guide of zqueue](https://github.com/zencrepes/zqueue/blob/main/docs/setup.md) covers the same ground, with more detail on local development without Docker.
