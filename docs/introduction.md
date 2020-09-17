---
id: introduction
title: What is ZenCrepes ?
sidebar_label: Introduction
slug: /
---

<h1 align="center">
  <a href="https://zencrepes.io"><img src="/img/zencrepes-logo.svg" alt="ZenCrepes" width="300"/></a>
</h1>

ZenCrepes has initially been created by a PM (excuse the poor programming) to facilitate the management of teams operating over GitHub issues across multiple organizations & repositories.

It focuses on three primary objectives:

- **Explore and search**: Quickly find relevant data elements based on selected criteria (faceted search). For example `List open defects assigned to John or Max in rock or paper repos`, `Display the team's velocity on paper and scissor repos`, `List issues with the Bug label that have been opened for more than 2 weeks`.
- **Scrum operation**: Identify the amount of work left in a sprint, estimate completion based on past velocity, review repartition of open issues (by repos, by labels, by assignees).
- **Consistency**: Ensure labels and milestones are consistent across multiple organizations and repositories, clean-up when necessary.

The general philosophy of the tool is to keep a lean logic and to remain as factual and data-centric as possible. ZenCrepes will report on the current or past state but the interpretation of the data is left to the end-user.

For example, ZenCrepes can display metrics on open issues in closed milestones, but will not report on issues that missed a milestone. The first one is a factual element about the data, the second one is the human interpretation of a state.

ZenCrepes is being progressively updated to include more data sources (Jira, CircleCI, ...), although the core functionality will remain centered around GitHub.

## Self-hosted vs. Serverless

ZenCrepes started its life as a "serverless" application (although this term is not entirely correct, see the [documentation](http://docs.zencrepes.io/serverless/)), but this created some UX challenges related to data fetch & refresh. The only way to address those was to take a more complex server-side (and self-hosted) approach.

The plan is to keep the Serverless version operational (accessible at [ZenCrepes.io](https://zencrepes.io)) as a quick way to discover what the tool can do, while most effort going forward will be put on the self-hosted version.

A [section of this documentation](http://docs.zencrepes.io/serverless/) is dedicated to the serverless version, except otherwise specified, the rest of this documentation refers to the self-hosted version.

## Supported Datasets

ZenCrepes currently supports the following datasets.

| GitHub                | Circle CI             | Jira   |
| --------------------- | --------------------- | ------ |
| Issues                | Pipelines             | Issues |
| Pull Requests         | Insights              |        |
| Repositories          | Environment Variables |        |
| Vulnerabilities       |                       |        |
| Watchers & Stargazers |                       |        |
| Releases              |                       |        |
| Milestones            |                       |        |
| Projects              |                       |        |
| Labels                |                       |        |

Adding more data sources is pretty straightforward as long as an API is available to fetch the data in bulk. So reach-out (or submit a PR) is you want to see more data sources added.

## Inner-workings

At a high level, ZenCrepes can be divided in two major parts, a data fetcher (called Zindexer) and a presentation layer (UI & API) making this data available through a (slightly) opinionated UI.

Zindexer and the presentation layer (a UI called `zui` and an API called `zap`) are fully separated from each other (you don't need one to run the other).

When running ZenCrepes, the tool fetches the requested dataset from configured sources (a source can be a GitHub repository, a jira project, a circleci token), and either loads the full dataset or the recently updated nodes (depending of the source API's capabilities). Zindexer also aims at playing nicely with any rate limit practices in place.

Zindexer dumps the data it fetched into Elasticsearch, and you could dive right into the data from Kibana without running zui & zapi. ZenCrepes presentation layer (zui & zapi) provides an opinionated user experience tailored to a limited number of datasets, while Kibana would support many more data models.

## Not a ticketing management system

ZenCrepes is not a ticketing management system (and will never be), it's a set of tools aimed at providing an (opinionated but factual) analytics view over a large number of data elements commonly used by Agile teams.

## Reach-out

Feel free to reach out on [slack](http://slack.overture.bio/), ZenCrepes has a dedicated channel on `#app_zencrepes`.

Overture gracefully provides the VM instance hosting dev & prod and the slack channel. ZenCrepes is not an Overture project.
