---
id: features
title: Features
sidebar_label: Features
---

## Platform

- Bulk data fetching
- Query based (which can be edited / saved / opened), implements ([SQON](https://arranger.readthedocs.io/en/latest/src/sqon.html))
- Facet based navigation
- Click-to-filter on most charts/elements
- TSV Export
- Support for Authentication/Authorization through Keycloak

## GitHub

### Issues

- Issues created and closed by week
- How long closed issues have been opened for
- How long open issues have been opened for
- Display for each week, issues closed by Author / Assignee / Label / Repository / Milestone / Project / Repository / Organization)
- Completion status
- Burndown
- Team velocity
- Completion forecast using moving average (1 week, 2 weeks, 4 weeks, 12 weeks)
- Network/graph view (visualize links between issues & PRs)
- List issues
- Bulk add/remove label
- Bulk transfer

### Labels

- Labels created by week
- List labels
- Bulk add/edit/remove

### Milestones

- Milestones created by week
- List milestones

### Projects

- Support org-level and repo-level projects
- Project created by week
- List projects

### Pull Requests (PRs)

- PRs created/closed by week
- How long closed PRs have been opened for
- How long open PRs have been opened for
- Display for each week, PRs closed by Author / Assignee / Label / Repository / Milestone / Project / Repository / Organization)
- List PRs

### Releases

- Releases created by week
- List milestones

### Maven POM

- Parse pom.xml files located at the root of the repository to extract artifactId, name, version, description and its parent (artifactId, version)

### Repositories

- Repositories created by week
- Identify the most/least actives repos through:
  - last received commits
  - issues count
  - PRs count
  - releases count
  - milestones count
  - projects counts
  - number of commits to master
  - number of watchers
  - number of stargazers
- Vulnerability alerts
- List repos

### Vulnerabilities

- New Vulnerabilities by week
- Duration the vulnerability has been active for
- List milestones

### Watchers & Stargazers

- Releases created by week
- Starred activity
- Companies
- User Organizations
- List Watchers and Stargazers

### Import

- Bulk import issues using GitHub bulk import API

## CircleCI

### Environment variables

- List environment variables

### Insights

- Sucessful/failed runs by day
- Credits spent each week
- Average run time each week
- Credits spent: per job, per workflow, per repository, per organization
- Average job duration: per job, per workflow, per repository, per organization
- List runs

### Pipelines

- Triggered pipelines per week
- List pipelines

## Jira

### Issues

- Closed/created issues per week
- List issues
- Fetch remote links
- Export issues for GitHub import
