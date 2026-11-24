---
id: opensearch
title: OpenSearch
sidebar_label: OpenSearch
---

OpenSearch is the default storage engine of ZenCrepes v2. zqueue writes every event into it, and the later milestones read from it.

## Supported engines

zqueue writes to both engines, selected with the `engine` key of the configuration file:

- **OpenSearch** 2 and 3, plain or with the security plugin: basic authentication over TLS, with `sslCa` and `sslVerify` for the certificate.
- **Elasticsearch** 8 and 9, plain, with basic authentication, or through Elastic Cloud (`cloudId`).

A version 1 instance that stores its data in Elasticsearch keeps working: set `engine: elasticsearch` and keep the same host.

## The indices

zqueue creates its indices on demand, when the first event of a type arrives:

| Index pattern | Content | Time field |
| -- | -- | -- |
| `gh_events_*` | One index per GitHub event type, such as `gh_events_issues` | `receivedAt` |
| `t_states_*`, `t_runs_*`, `t_cases_*` | Testing states, runs and cases | `createdAt` |
| `t_perfs_*` | Performance reports | `startedAt` |

The `gh_events_` prefix changes with the `github.webhook.esIndexPrefix` configuration key.

## A least-privilege user

Run zqueue with its own user, not with `admin`. The role of that user is small: check the cluster health, create its indices, and write documents through the bulk API. [Section 4 of the zqueue setup guide](https://github.com/zencrepes/zqueue/blob/main/docs/setup.md#4-create-the-opensearch-credentials-from-a-blank-instance) gives the 3 calls that create the role, the user and the mapping on a blank instance.

The zqueue user writes and does not read. Browse the data with a different user, for example through [OpenSearch Dashboards](dashboards.md).
