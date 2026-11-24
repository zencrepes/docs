---
id: introduction
title: What is ZenCrepes v2?
sidebar_label: Introduction
slug: /
---

:::caution ZenCrepes v2 is in beta
The goal of version 2 is to simplify things, not to reach feature parity with version 1. Expect a small, growing feature set. The [1.x documentation](/docs/1.x/) describes the previous generation.
:::

ZenCrepes gives engineering teams analytics over their development data. Version 2 is a rework of the platform, and it is much lighter than version 1.

Version 2 starts small. The first milestone captures and records data, and nothing more:

- [zqueue](https://github.com/zencrepes/zqueue) receives webhook events and writes them to a search engine.
- [OpenSearch](https://opensearch.org) stores the events. Version 1 used Elasticsearch, and version 2 moves to OpenSearch.
- OpenSearch Dashboards gives a first way to browse and chart the recorded events.

Exploration and analytics interfaces come later, on top of the recorded data. The [roadmap](roadmap.md) names the next steps.

:::info
These pages describe version 2, the version under active development. The documentation of version 1 stays available: pick **1.x** in the version selector at the top of the page, or go to [/docs/1.x/](/docs/1.x/).
:::

## Where to start

- [Architecture](architecture.md) shows how the pieces fit together.
- [Quickstart](capture/quickstart.md) records your first GitHub events with docker compose.
