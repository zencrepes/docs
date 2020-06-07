# ZenCrepes

Agile analytics and management made easy !

<ImageZoom 
  src="./images/zencrepes-logo.png" 
  :border="false" 
  alt="ZenCrepes logo"
  width="320"
/>

## What is ZenCrepes

ZenCrepes has initially been created by a PM (excuse the poor programming) to facilitate management of teams operating over GitHub issues across multiple organizations & repositories.

It focuses on three primary objectives:

- **Report and search**: Quickly find relevant issues based on selected criteria (faceted search). For example `List open defects assigned to John or Max in rock or paper repos` or `Display the team's velocity on paper and scissor repos`.
- **Scrum operation**: Identify the amount of work left in a sprint, estimate completion based on past velocity, review repartition of open issues (by repo, by labels, by assignees).
- **Consistency**: Ensure labels and milestones are consistent across multiple organizations and repositories, clean-up when necessary.

The general philosophy of the tool is to keep a lean logic and to remain as factual and data-centric as possible. ZenCrepes will report on current or past state but interpretation of the data is left to the end user.

For example, ZenCrepes can display metrics on open issues in closed milestones, but will not report on issues that missed a milestone. The first one is a factual element about the data, the second one is the human interpretation of a state.

ZenCrepes is being progressively updated to include more data sources (Jira, CircleCI, ...), although the core functionality will remain centered around GitHub.

## Self-hosted vs. Serverless

ZenCrepes started its life as a "serverless" application (although this term is not entirely correct, see the [documentation](http://docs.zencrepes.io/serverless/)), but this created some UX challenges related to data refresh, and the only to solve those was to take a more complex server-side approach.

The plan is to keep the Serverless version operational (accessible at [ZenCrepes.io](https://zencrepes.io)) as a quick way to discover what the tool can do, while most effort going forward will be put on the version requiring backend services.

A [section of this documentation](http://docs.zencrepes.io/serverless/) is dedicated to the serverless version, except otherwise specified, the rest of this documentation does not refer to version requiring backend services.

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

Adding more datasources is pretty straightforward as long as an API is available to fetch the data in bulk. So reach-out (or submit a PR) is you want to see more datasources added.

## Inner-workings

At a high level, ZenCrepes can be divided in two major parts, a data fetcher (called Zindexer) and a presentation layer (UI & API) making this data available through an opinionated UI.

Zindexer and the presentation layer (a UI called `zui` and an api called `zapi`) are fully separated from eachother (you don't need one to run the other).

When running ZenCrepes, the tool fetches requested dataset from configured sources (a source can be a repository, a jira project, a circleci token), and either loads the full dataset or the recently updated nodes (depending of the source API's capabilities). Zindexer also aims at playing nicely with any rate limit practices in place.

Zindexer dumps the data it fetched into Elasticsearch, and you could dive right into the data from Kibana without running zui & zapi. ZenCrepes presentation layer (zui & zapi) provides an opinionated user experience tailored to a limited number of datasets, while Kibana would support many more data models.

## Reach-out

I'd be happy to hear feedback and receive external contributions, just submit a PR with your requested changes. Feel free to reach out on [slack](http://slack.overture.bio/), ZenCrepes has a dedicated channel on `#app_zencrepes`.

Overture gracefully provides the VM instance hosting dev & prod and the slack channel. ZenCrepes is not an Overture project.
