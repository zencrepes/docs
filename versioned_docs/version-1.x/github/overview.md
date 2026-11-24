---
id: overview
title: Overview
sidebar_label: Overview
---

GitHub is the primary data source used for ZenCrepes, data is fetched through GitHub GraphQL API and stored mostly "as-is" in the elasticsearch cluster.

## Data updates

Enabling Keycloak authentication in ZenCrepes (see the Install section) also makes possible to modify data in GitHub.

Although ZenCrepes provides a "view" over a large dataset for all of its authorized users, the actual bulk data modifications (transfer issues, create labels, ...) are done by direct communications between the user's browser and GitHub. All edit capabilities are subject to the user's authorization level defined in GitHub.

In short, ZenCrepes central components (ZAPI, ZQUEUE, ZINDEXER) don't perform any modifications, and tokens used by zindexer for data fetching are never exposed to the user.

## Business logic (use of labels)

ZenCrepes will process some labels in a particular fashion, mostly when dealing with Issues, in order to collect the metadata it needs for certain views (for example Story points).

### Story Points

Story points assigned to an issue while the issue is being ingested by ZenCrepes, either from zindexer or whenever an update to an issue triggers a webhook event.

Story points can be added by:

- Attaching to an issue a label prefixed with `SP:` and the numerical number of points (for example: SP:1, SP:2, SP:3, ...)
- Attaching to an issue a label with a description prefixed with `SP:` and the numerical number of points (for example: SP:1, SP:2, SP:3, ...), the actual name of the issue can be anything
- By statically defining, in ZenCrepes configuration file, an array of labels with their corresponding points.

For example:

```yml
storyPointsLabels:
  - label: xx-small
    points: 1
  - label: x-small
    points: 2
  - label: small
    points: 3
  - label: medium
    points: 5
  - label: large
    points: 8
  - label: x-large
    points: 13
```

The logic for issue indexing is stored here: https://github.com/zencrepes/zindexer/blob/master/src/components/githubIssues/ingestNodes.ts

### Define Sprints

Sprints are used in the Issue `Deliver` view to filter down the dataset. Sprints are labels prefixed with `sprint:` (for example: sprint:1, sprint:2, ...).

### Define teams

ZenCrepes provides some naive forecasting by simply dividing the number of open issues (or open points) by the team velocity, but identifying how this velocity should be calculated can sometime be complex.

For that purpose, a `team` label can be attached to particular issues. Users can then select an containing that label, and ZenCrepes will fetch all assignees to that issue, and calculate their aggregated velocity.

### Categorize Labels

ZenCrepes will understand that some labels fall into the same category by looking for labels containing a `:`.

For example: `Priority:high`, `Priority:medium`, `Priority:low` will be handled as a group of labels, and some views will be adjusted based on this logic. This allow ZenCrepes to display the number of remaining points per priority level.
