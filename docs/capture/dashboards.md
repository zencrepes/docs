---
id: dashboards
title: Browse the data
sidebar_label: OpenSearch Dashboards
---

OpenSearch Dashboards is the OpenSearch equivalent of Kibana. It started as a fork of Kibana 7.10, and it gives you search, filters and charts over the recorded events.

The [quickstart stack](quickstart.md) serves it on [http://localhost:5601](http://localhost:5601).

## Create an index pattern

1. Log in as `admin`. The write-only `zqueue` user cannot log in, because its role does not read.
2. Open the menu, then **Dashboards Management** → **Index patterns** → **Create index pattern**.
3. Enter `gh_events_*` and pick `receivedAt` as the time field.

The testing and performance indices work the same way, with the patterns `t_states_*`, `t_runs_*`, `t_cases_*` (time field `createdAt`) and `t_perfs_*` (time field `startedAt`).

## Explore and chart

- **Discover** searches and filters the recorded events. Each GitHub event type lands in its own index, so a filter on `_index` isolates one type. The envelope fields (`event`, `action`, `repository`, `organization`, `sender`) cover the common questions.
- **Visualize** builds charts from the same queries, and **Dashboards** groups the charts.

## With Elasticsearch

With `engine: elasticsearch`, the equivalent tool is [Kibana](https://www.elastic.co/kibana), pointed at the same cluster. The index patterns and the time fields are the same.
