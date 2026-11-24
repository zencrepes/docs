---
id: architecture
title: Architecture
sidebar_label: Architecture
---

The first milestone of version 2 is a small capture pipeline. Events flow from GitHub to OpenSearch through zqueue:

```text
GitHub ──webhook──▶ zqueue ──job──▶ Redis ──worker──▶ OpenSearch
                                                          ▲
                                       OpenSearch Dashboards
```

## The components

- **zqueue** is a [Nest.js](https://nestjs.com/) application with webhook endpoints. Each endpoint verifies the HMAC signature of the delivery, then places the payload in a Redis queue ([BullMQ](https://bullmq.io/)). A worker picks the job up and writes it to the search engine, with retries when the engine is unreachable.
- **Redis** buffers the deliveries. GitHub gets a fast answer, and a slow or unreachable search engine loses no event.
- **OpenSearch** stores one document per event, in one index per event type. The GitHub delivery GUID is the document id, so a redelivered event overwrites its own document instead of creating a duplicate.
- **OpenSearch Dashboards** is the browsing and charting interface, described in [Browse the data](capture/dashboards.md).

## Why OpenSearch

Version 1 stored its data in Elasticsearch. Version 2 moves to [OpenSearch](https://opensearch.org) as the default engine, for two reasons:

- OpenSearch is Apache-2.0 licensed, which matches the fully open-source nature of ZenCrepes.
- OpenSearch ships with its security plugin and with OpenSearch Dashboards, so one stack covers storage, authentication and visualization.

The move is a default, not a lock-in. zqueue also writes to Elasticsearch 8 and 9, plain or through Elastic Cloud, with one configuration key (`engine: elasticsearch`).

## What version 2 does not do yet

The capture pipeline records what arrives, and nothing calls GitHub back. Historical data, bulk imports and the exploration interface are later milestones. The [roadmap](roadmap.md) tracks them.
