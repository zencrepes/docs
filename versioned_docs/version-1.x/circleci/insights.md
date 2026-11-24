---
id: insights
title: CircleCI Insights
sidebar_label: Insights
---

:::info
CircleCI is not providing an API to understand which repositories are currently active for build (it only does it for repositories the user is watching), therefore to fetch the data for an entire organization, ZenCrepes has to query each project individually. So if you have 100's of them, this takes 100's of queries, even if you only have 2 repositories enabled for CircleCI builds.
:::

Insights provides more details about execution status of your workflow down to the job level.

You'll see how many jobs are running each day, as well as both credit spend and average run time:

- per organization
- per repository
- per workflow
- per job
