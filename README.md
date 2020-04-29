# ZenCrepes

Agile analytics and management made easy !

<ImageZoom 
  src="./images/zencrepes-logo.png" 
  :border="false" 
  alt="ZenCrepes logo"
  width="320"
/>

## What is ZenCrepes

ZenCrepes has initially been created by a PM (excuse the poor programming) to facilitate management for teams operating over GitHub issues across multiple organizations & repositories.

It focuses on three primary objectives:

- **Report and search**: Quickly find relevant issues based on selected criteria (faceted search). For example `List open defects assigned to John or Max in rock or paper repos` or `Display the team's velocity on paper and scissor repos`.
- **Scrum operation**: Identify the amount of work left in a sprint, estimate completion based on past velocity, review repartition of open issues (by repo, by labels, by assignees).
- **Consistency**: Ensure labels and milestones are consistent across multiple organizations and repositories, clean-up when necessary.

The general philosophy of the tool is to keep a lean logic and to remain as factual and data-centric as possible. ZenCrepes will report on current or past state but interpretation of the data is left to the end user.

For example, ZenCrepes can display metrics on open issues in closed milestones, but will not report on issues that missed a milestone. The first one is a factual element about the data, the second one is the human interpretation of a state.

ZenCrepes is being progressively updated to include more data sources (Jira, CircleCI, ...), although the core functionality will remain centered around GitHub.

## Self-hosted vs. Serverless

ZenCrepes started its life as a "serverless" application (although this term is not entirely correct, see the [documentation](http://docs.zencrepes.io/serverless/)), but this created some UX challenges related to data refresh that could only solved by traking a more complex server-side approach.

The plan is to keep the Serverless version operational (accessible at [ZenCrepes.io](https://zencrepes.io)) as a quick way to discover what the tool can do, while most effort going forward will be put on the version requiring backend services.

A [section of this documentation](http://docs.zencrepes.io/serverless/) is dedicated to the serverless version, except otherwise specified, the rest of this documentation does not refer to version requiring backend services.

## Stack Health

| Codebase                                                         | Release                                                          | Build (CI/CD)                                                                                                                                                                                                                                                                                                  | NPM                                                                                         | Docker                                                                         | Downloads                                                                                                                                                                       | Status                                                                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [zencrepes](https://github.com/zencrepes/zencrepes) (serverless) | n/a                                                              | Master: [![CircleCI](https://circleci.com/gh/zencrepes/zencrepes/tree/master.svg?style=svg)](https://circleci.com/gh/zencrepes/zencrepes/tree/master) Develop: [![CircleCI](https://circleci.com/gh/zencrepes/zencrepes/tree/develop.svg?style=svg)](https://circleci.com/gh/zencrepes/zencrepes/tree/develop) | n/a                                                                                         | n/a                                                                            | n/a                                                                                                                                                                             | [![CircleCI](https://badgen.net/uptime-robot/day/ur829647-a6482071c42c624353c06a7d)](https://zencrepes.io) |
| [zindexer](https://github.com/zencrepes/zindexer)                | ![Release](https://badgen.net/github/release/zencrepes/zindexer) | ![Lint and test](https://github.com/zencrepes/zindexer/workflows/Lint%20and%20test/badge.svg) ![Publish to Registry](https://github.com/zencrepes/zindexer/workflows/Publish%20to%20Registry/badge.svg?branch=master)                                                                                          | [![Version](https://img.shields.io/npm/v/zindexer.svg)](https://npmjs.org/package/zindexer) | ![Docker Size](https://badgen.net/docker/size/zencrepes/zindexer/latest/amd64) | [![Downloads/week](https://img.shields.io/npm/dw/zindexer.svg)](https://npmjs.org/package/zindexer) ![Docker Pulls API](https://img.shields.io/docker/pulls/zencrepes/zindexer) | n/a                                                                                                        |
| [zui](https://github.com/zencrepes/zui)                          | ![Release](https://badgen.net/github/release/zencrepes/zui)      | ![Lint and test](https://github.com/zencrepes/zui/workflows/Lint%20and%20test/badge.svg) ![Publish to Registry](https://github.com/zencrepes/zui/workflows/Publish%20to%20Registry/badge.svg)                                                                                                                  | n/a                                                                                         | ![Docker Size](https://badgen.net/docker/size/zencrepes/zui/latest/amd64)      | ![Docker Pulls API](https://img.shields.io/docker/pulls/zencrepes/zui)                                                                                                          | n/a                                                                                                        |
| [zapi](https://github.com/zencrepes/zapi)                        | ![Release](https://badgen.net/github/release/zencrepes/zapi)     | ![Lint and test](https://github.com/zencrepes/zapi/workflows/Lint%20and%20test/badge.svg) ![Publish to Registry](https://github.com/zencrepes/zapi/workflows/Publish%20to%20Registry/badge.svg)                                                                                                                | n/a                                                                                         | ![Docker Size](https://badgen.net/docker/size/zencrepes/zapi/latest/amd64)     | ![Docker Pulls API](https://img.shields.io/docker/pulls/zencrepes/zapi)                                                                                                         |

## Reach-out

I'd be more than happy to get feedback and external contributions, just submit a PR with your requested changes. Feel free to reach out on [slack](http://slack.overture.bio/), ZenCrepes has a dedicated channel on `#app_zencrepes`.

Overture gracefully provides the VM instance hosting dev & prod and the slack channel. ZenCrepes is not an Overture project.
