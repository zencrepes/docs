---
id: pipelines
title: CircleCI Pipelines
sidebar_label: Pipelines
---

:::info
CircleCI is not providing an API to understand which repositories are currently active for build (it only does it for repositories the user is watching), therefore to fetch the data for an entire organization, ZenCrepes has to query each project individually. So if you have 100's of them, this takes 100's of queries, even if you only have 2 repositories enabled for CircleCI builds.
:::

The pipeline views provides a view over all pipeline runs and their executing status.
