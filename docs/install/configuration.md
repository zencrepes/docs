---
id: configuration
title: Configuration
sidebar_label: Configuration
---

ZenCrepes configuration takes the shape of a file that can be shared (but can also be different) between zqueue, zindexer and zapi. It's full version is available in [zindexer/src/components/config/defaultConfig.ts](https://github.com/zencrepes/zindexer/blob/master/src/components/config/defaultConfig.ts)

This part of the documentation will break the configuration by type, for simplicity (and compactness) the documentation will show JSON snippets but the file is composed of its YML translation.

## Elasticsearch

```json
  elasticsearch: {
    host: 'http://127.0.0.1:9200',
    sslCa: '',
    cloudId: '',
    username: '',
    password: '',
    sysIndices: {
      sources: 'sources', // this index is used to store sources data
      datasets: 'datasets', // this index is used to store data about available index types
      config: 'config', // this index is used to store zencrepes configuration
    },
    oneIndexPerSource: false,
    dataIndices: {
      githubRepos: 'gh_repos',
      githubIssues: 'gh_issues_',
      githubPullrequests: 'gh_prs_',
      githubVulnerabilities: 'gh_vulns_',
      githubStargazers: 'gh_stargazers_watchers_',
      githubWatchers: 'gh_stargazers_watchers_',
      githubProjects: 'gh_projects_',
      githubMilestones: 'gh_milestones_',
      githubLabels: 'gh_labels_',
      githubReleases: 'gh_releases_',
      jiraIssues: 'j_issues_',
      jiraProjects: 'j_projects_',
      circleciPipelines: 'cci_pipelines_',
      circleciEnvvars: 'cci_envvars_',
      circleciInsights: 'cci_insights_',
    },
  },
```

### Connecting to Elasticsearch

You can connect to a local Elasticsearch instance or an instance running in Elastic Cloud (by providing your `cloudID` and credentials). The details on how the connection is established are [available here](https://github.com/zencrepes/zindexer/blob/master/src/utils/es/esClient.ts)

### System indices

ZenCrepes uses system indices to store some data needed for it to operate.

- **sources**: Used by `zindexer` to determine what data elements to fetch. For example you could scan an entire organization but only enable data fetching for some of its repositories. This index will contain the list of sources and which are enabled or not.
- **datasets**: _Deprecated_
- **config**: Holds ZenCrepes configuration (which datasets are available, which facets to show, how to display and export the list view). This index is used by `zindexer` and `zapi`.

### One Index per Source

Although this is currently available and operational, its use it still a bit uncertain. The original idew was to store data in one index per source, later allowing index level permissions to be configured. Using this feature on an organization with a lot of repositories will result in a lot of data generated.

### Data indices

These are the indices used to store data from the different datasets. These must be identical between `zindexer`, `zapi` and `zqueue` configuration.

## Redis

Use this configuration option to setup the Redis host, used by zqueue to handle its queue mechanism.

## GitHub

```json
  github: {
    enabled: true,
    username: 'YOUR_USERNAME',
    token: 'YOUR_TOKEN',
    fetch: {
      maxNodes: 30,
      maxParallel: 1,
      delayBetweenCalls: 1000,
    },
    // Define a match between a points label and numbers
    storyPointsLabels: [
      { label: 'xx-small', points: 1 },
      { label: 'x-small', points: 2 },
      { label: 'small', points: 3 },
      { label: 'medium', points: 5 },
      { label: 'large', points: 8 },
      { label: 'x-large', points: 13 },
    ],
    // The webhook configuration is used by zqueue to determine next course of action
    webhook: {
      secret: 'PLEASE_CHANGE_ME',
      // The Array of events matches and event name with an entity type as processed by ZenCrepes
      // You shouldn't need to change these values
      events: [
        { githubEvent: 'label', zencrepesEntity: 'labels' },
        { githubEvent: 'repository', zencrepesEntity: 'repos' },
        { githubEvent: 'pull_request', zencrepesEntity: 'pullrequests' },
        { githubEvent: 'issues', zencrepesEntity: 'issues' },
        { githubEvent: 'vulnerabilities', zencrepesEntity: 'vulnerabilities' },
        { githubEvent: 'stargazers', zencrepesEntity: 'star' },
        { githubEvent: 'watchers', zencrepesEntity: 'watch' },
        { githubEvent: 'project', zencrepesEntity: 'projects' },
        { githubEvent: 'milestone', zencrepesEntity: 'milestones' },
        { githubEvent: 'release', zencrepesEntity: 'releases' },
      ],
      // Save the raw webhook "as-received" in a timeline fashion (no overwrite)
      timelinePayload: {
        includeGithubEvents: ['*'],
        excludeGithubEvents: ['push', 'create'],
        esIndexPrefix: 'gh_webhook_timeline_',
      },
      // Save the node data contained in the webhook
      // Overwrite previous node state if the same node with same ID is received
      // One index per node type
      nodePayload: {
        includeGithubEvents: ['*'],
        excludeGithubEvents: ['push', 'create'],
        esIndexPrefix: 'gh_webhook_',
      },
      // Execute a call to GitHub to fetch the latest data in the same format than zindexer (using the same GraphQL query)
      // Data is fed into the indices specified in the elasticsearch section
      fetchNode: {
        includeGithubEvents: ['*'],
        excludeGithubEvents: [''],
      },
    },
  },
```

## CircleCI

## Jira
