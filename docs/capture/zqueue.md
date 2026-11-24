---
id: zqueue
title: zqueue, the webhook listener
sidebar_label: zqueue
---

[zqueue](https://github.com/zencrepes/zqueue) is the ZenCrepes webhook listener. It records every event it receives into OpenSearch or Elasticsearch, for downstream analysis.

## Endpoints

zqueue exposes 3 webhook endpoints:

- **POST /github/webhook** records GitHub events as they are received, one index per event type (`gh_events_issues`, `gh_events_pull_request`, and so on). Each document carries the raw payload plus a small envelope: event, action, repository, organization, sender, delivery id and receive date.
- **POST /testing/webhook** records a testing state event into the states, runs and cases indices.
- **POST /perfs/webhook** records a performance report into the perfs index.

zqueue does not call GitHub back. What arrives is what is stored.

## Signatures

Each endpoint verifies the HMAC signature of the delivery, computed over the raw request body. zqueue accepts `x-hub-signature-256` (sha256, preferred) or `x-hub-signature` (sha1). An invalid or missing signature is answered with `401`.

## Idempotence

The GitHub delivery GUID is the document id. A redelivered event overwrites its own document, so redeliveries create no duplicate. Replaying a delivery from the GitHub webhook interface is a safe way to backfill an event that was lost.

## Configuration

zqueue reads one YAML file: `~/.config/zencrepes/config.yml`. The location changes with the `CONFIG_PATH` environment variable, and zqueue fills every key it does not find with a default. When no file exists, zqueue creates one with the defaults on its first start, reports that it did, and stops: edit the file, then start zqueue again.

```yaml
elasticsearch:
  # elasticsearch or opensearch
  engine: opensearch
  host: https://localhost:9200
  username: admin
  password: ''
  # Path to a CA certificate, for clusters with a private CA
  sslCa: ''
  # Set to false to accept self-signed certificates
  sslVerify: true
  # Elastic Cloud only (engine: elasticsearch)
  cloudId: ''
redis:
  host: redis://localhost:6379
github:
  webhook:
    secret: PLEASE_CHANGE_ME
    # Event filtering: exclude wins over include, '*' is a wildcard
    includeGithubEvents: ['*']
    excludeGithubEvents: []
    esIndexPrefix: gh_events_
testing:
  webhook:
    secret: PLEASE_CHANGE_ME
```

## Event filtering

Two keys control which GitHub event types are recorded:

- `includeGithubEvents` lists the types to record. The default, `['*']`, records everything.
- `excludeGithubEvents` lists the types to drop, and exclude wins over include.
