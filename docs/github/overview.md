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
