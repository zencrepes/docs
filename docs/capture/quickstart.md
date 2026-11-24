---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

This page records your first GitHub events with docker compose. It uses the ready-to-use stack of the zqueue repository: zqueue, Redis and a secured OpenSearch, with persistent volumes.

The [setup guide of zqueue](https://github.com/zencrepes/zqueue/blob/main/docs/setup.md) covers the same ground in more depth. It adds the creation of a least-privilege OpenSearch user, TLS considerations and troubleshooting.

## Prerequisites

- Docker with the compose plugin.
- Admin access to the GitHub organization or repository you want to record events from.

## 1. Start the stack

```bash
git clone https://github.com/zencrepes/zqueue.git
cd zqueue/deploy
cp config/config.yml.example config/config.yml

export OPENSEARCH_INITIAL_ADMIN_PASSWORD='<a strong admin password>'
docker compose up -d
```

The stack starts 4 services:

- **zqueue** listens on port 3003 and reads `./config/config.yml`.
- **redis** buffers the deliveries.
- **opensearch** runs single-node, with the security plugin enabled (TLS plus authentication).
- **dashboards** serves OpenSearch Dashboards on port 5601.

On the first boot of a blank instance, OpenSearch creates the `admin` user with the password of `OPENSEARCH_INITIAL_ADMIN_PASSWORD`. The variable only takes effect on that first boot.

## 2. Edit the configuration

Edit `config/config.yml` and set the secrets. Generate strong random values, for example with `openssl rand -hex 32`:

```yaml
elasticsearch:
  engine: opensearch
  host: https://opensearch:9200
  username: admin
  password: <the admin password>
  # The demo certificates are self-signed
  sslVerify: false
redis:
  host: redis://redis:6379
github:
  webhook:
    # The same value goes into the GitHub webhook form
    secret: <a strong random value>
testing:
  webhook:
    secret: <a strong random value>
```

Then restart zqueue:

```bash
docker compose restart zqueue
```

:::tip
The `admin` user works for a first test. For anything durable, create a dedicated `zqueue` user with write-only permissions, as [section 4 of the setup guide](https://github.com/zencrepes/zqueue/blob/main/docs/setup.md#4-create-the-opensearch-credentials-from-a-blank-instance) describes.
:::

## 3. Configure the GitHub webhook

In the GitHub organization, or in a single repository: **Settings → Webhooks → Add webhook**.

- **Payload URL**: `https://<your host>/github/webhook`
- **Content type**: `application/json`. This value is required, because zqueue verifies the signature over the raw JSON body.
- **Secret**: the value of `github.webhook.secret` in `config.yml`
- **Events**: "Send me everything" records all events. zqueue stores each type in its own index.

Put zqueue behind a TLS-terminating reverse proxy before you expose it to GitHub. GitHub only needs to reach `POST /github/webhook`.

## 4. Check the recorded events

GitHub sends a `ping` event when the webhook is created. Check the delivery got a `202` under **Recent Deliveries**, then list the indices:

```bash
curl -k -u "admin:$OPENSEARCH_INITIAL_ADMIN_PASSWORD" 'https://localhost:9200/_cat/indices/gh_events_*?v'
```

A `gh_events_ping` index with 1 document means the pipeline works. From here, [browse the data with OpenSearch Dashboards](dashboards.md).
