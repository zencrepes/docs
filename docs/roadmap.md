---
id: roadmap
title: Roadmap
sidebar_label: Roadmap
---

Version 2 grows milestone by milestone, and each milestone ships on its own. The order favors the data: record first, then import, then explore.

## 1. Capture (current)

Record events as they happen, through [zqueue](capture/zqueue.md) and [OpenSearch](capture/opensearch.md). This milestone is usable today, and [OpenSearch Dashboards](capture/dashboards.md) is its interface.

## 2. Historical import

A webhook only sees the future. A rework of [zindexer](https://github.com/zencrepes/zindexer) will backfill the past: issues, pull requests and the other datasets fetched from the GitHub API into the same indices.

## 3. Exploration

A lighter exploration interface over the recorded data. The version 1 interface (facets, queries, dashboards) sets the direction, and the scope is not settled yet.

## Follow the work

The work happens in the [zencrepes](https://github.com/zencrepes) organization on GitHub, and the discussions in [zencrepes/zencrepes issues](https://github.com/zencrepes/zencrepes/issues).
