---
id: import
title: Import Issues
sidebar_label: Import Issues
---

Github offers an ["slightly-unofficial" API](https://gist.github.com/jonmagic/5282384165e0f86ef105) to bulk import a large number of issues without triggering all sort of notifications you would get by using the regular issues management endpoints (or GraphQL mutations). I'm referring to it as "slightly-unofficial" since you can't find any documentation other than a gist, but if contacting GitHub support, you'd be redirected to that gist.

In the context of ZenCrepes an API importer was implemented to support bulk importing of a fairly large number of issues (the dataset used for final testing had slightly over 40,000 issues). The primary use case here is exporting issues data from Jira and importing those into GitHub.

## Before starting

There are a couple of things to consider before getting started:

- **Labels** must be unique (case insensitive), for example, GitHub will reject an issue with a label "Bug" if the repository already contains a label called "bug". Zindexer includes a feature to map labels on the fly just prior to submission (for example convert `Documentation` to `documentation`).
- **Assignees** must exist, you can't assign an issue to someone not having access to the repository.
- **Reporters** can't be set, the username used as a reporter is the one attach to the user. This is true for issue body but also issue comments (which can then be slightly annoying).
- **Created, Updated, Closed dates** can be set, so if your issue was closed in 2015, it will still show as closed in 2015 in GitHub.
- **No duplicate Jira keys**, zindexer assumes that issue keys are unique (DOC-1234), you will not be able to import data from different remove Jira server into the same repository if they share the same keys.
- **Checking import status** when dealing with a very large number of issues is going to be problematic

### Recommended setup

For this import you will need zindexer and a running Elasticsearch instance (+ Kibana to look at the data), it would be recommended to use a dedicated instance (and separate GitHub token) for those and not try to use any already running version of ZenCrepes you might have. The import remains a manual operation, you're probably best running this from your workstation (or dedicated cloud instance).

You should also do a dry run first, by creating a test repository and importing your issues there.

## Overview

The whole export & import process is divided in five sequential phases:

- Configure your Jira connection and ZenCrepes sources
- Import data from Jira
- Prepare data for GitHub import
- Import data in GitHub
- Update issue links

## Configure ZenCrepes

Please refer to the section of the [documentation refering to installation](/docs/install/configuration), configuration is the exact same.

## Import Data from Jira

First start by importing all of the issues from Jira, this is the exact same action than when using [Jira issues directly in ZenCrepes](/docs/jira/issues).

You can do that by running:

```bash
zindexer jira:issues
```

## Prepare data for GitHub import

This next stage will go through all of the Jira issues and prepare their payload for GitHub import. During this stage, most Jira fields will be converted to GitHub labels, and headers will be added in the issue body and issue comments.

The header in the issue body looks like this:

```
Imported from Jira, on Sun Jun 21, 2020
Issue: DOC-1234 in project: Documentation
Reporter: @jondoe (Jon Doe)
Assignee: None found in Jira, making reporter the assignee in GitHub
Created: Thu Jun 18, 2020, last updated: Thu Jun 18, 2020
Status: Open
Issues in Epic:
 - [ ] DOC-456 - A sample ticket (Bug, Open)
 - [x] DOC-457 - Another sample ticket (Story, Closed)
```

It contains a link (DOC-1234) to the original Jira server, may you want to keep the server around in read-only for some time.

The header will also contain list of subtasks, children issues, links... with checkboxes corresponding to these issues states. Initially these will include links back to Jira, but those will be modified later on.

The header in the issue comments looks like this:

```
Imported from Jira, on Sun Jun 21, 2020
Comment by: @jondoe (Jon Doe) on Fri Jan 31, 2020 edited
```

### Configuration

The importer is using a dedicated configuration file, the first time you'll run it, it will generate a default configuration for you to modify. There are a couple of things you'll need to do in this file:

- Match your Jira users to GitHub nickhandles. This is done through Jira's `emailAddress` field for reporters, authors, assignees. Zindexer will generate a list of all the users it finds, you will simply have to copy this list into your configuration file and update GitHub usernames
- Configure the repositories. You will need to tell Zindexer into which GitHub repositories the various Jira projects have to be imported. You could use the configuration file to push some of the "older" issues to an archive repository based on either `createdAt`, `updatedAt` or `closedAt`.

The file also contains parameters that will be needed later in the process:

- You can configure an on-the-fly label rename
- You need to specify the link to individual Jira tickets (without the issue key), it would usually looks like this: `https://jira.mydomain.com/browse/`. This will be needed for the last part of the import when replacing Jira links to GitHub links

## Run

Once your configuration is setup, you can simply run:

```bash
zindexer jira:ghexport
```

Note that if at any point in time you would like to start again with the import, you can do this easily by deleting the Elasticsearch index (by default `gh_import`).

## Health-check

At that stage, it's a good idea to take a look at the data in the import index, just to ensure it all looks good.

## Import Data in GitHub

The previous step staged data for import in GitHub, it could actually be used to import data from other sources than Jira. Usage it's pretty straight-forward:

```bash
zindexer github:import
```
