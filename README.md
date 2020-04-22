# ZenCrepes

Agile analytics and management made easy !

## What is ZenCrepes

ZenCrepes has initially been created by a PM (excuse the poor programming) to facilitate project management for teams operating solely over GitHub issues, and across multiple organizations & repositories.

It focuses on three primary objectives:

- **Report and search**: Quickly find relevant issues based on selected criteria (faceted search). For example `List open defects assigned to John or Max in rock or paper repos` or `Display the team's velocity on paper and scissor repos`.
- **Scrum operation**: Identify the amount of work left in a sprint, estimate completion based on past velocity, review repartition of open issues (by repo, by labels, by assignees).
- **Consistency**: Ensure labels and milestones are consistent across multiple organizations and repositories, clean-up when necessary.

The general philosophy of the tool is to keep a lean logic and to remain as factual and data-centric as possible. ZenCrepes will report on current or past state but interpretation of the data is left to the end user.

For example, ZenCrepes can display metrics on open issues in closed milestones, but will not report on issues that missed a milestone. The first one is a factual element about the data, the second one is the human interpretation of a state.

ZenCrepes is being progressively updated to include more data sources (Jira, CircleCI, ...), although the core functionality will remain centered around GitHub.

## Server vs. Serverless

ZenCrepes started its life as a "serverless" application (although this term is not entirely correct, see the documentation), but this created some UX challenges/frustration that could solved by traking a more complex server-side approach.

The plan is to keep the Serverless version operational (accessible at [ZenCrepes.io](https://zencrepes.io)) as a quick way to discover what the tool can do, while most effort going forward will be put on the version requiring backend services to be running.

A section of this documentation is dedicated to the serverless version, except otherwise specified, the rest of this documentation does not refer to version requiring backend services.

## Reach-out

I'd be more than happy to get feedback and external contributions, just submit a PR with your requested changes. Feel free to reach out on [slack](http://slack.overture.bio/), ZenCrepes has a dedicated channel on `#app_zencrepes`.

Overture gracefully provides the VM instance hosting dev & prod and the slack channel. ZenCrepes is not an Overture project.
