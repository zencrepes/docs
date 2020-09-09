---
id: issues
title: GitHub Issues
sidebar_label: Issues
---

## Explore

The objective of this tab is to be able to quickly identify patterns and potential things to address. It provides quick metrics to answers questions such as "Is everything alright ? ".

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-github-issues.png" width="640" />
</p>

## Analyze

In this tab, users can get a sense of the effort put by a team, over time, across different metrics.

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-github-issues-focus.png" width="640" />
</p>

Data about closed issues is aggregated by week over the following fields:

- Organization
- Repository
- Author
- Assignee
- Label
- Milestone
- Project

You can answer questions such as "What are the most active repositories?", "Are we consistenty addressing defects?", ...

## Deliver

The deliver tab is focused on short-term deliveries to track completion towards a defined goal (completion of a milestone, completion of a project, completion of a sprint).

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-github-issues-deliver.png" width="640" />
</p>

Note that this screen supports a second level of independent filters to further restrict the dataset based on Milestone, Project or Sprint.

### Displaying open issues (remaining)

The remaining widget display the number of OPEN issues (or OPEN points depending of the selection), by various aggregations (Repositories, Assigness, Project, Author, ...), but it also break labels by their prefixes (any label containing `:`).

For example, you can get the remaining issues by priority, by sprint...

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-github-issues-deliver-remaining.png" width="480" />
</p>

## Network

The network view displays a graph of the issues and PR corresponding to the current query.

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-github-issues-network.png" width="640" />
</p>

The default view is limited to 100 root nodes, and from there, ZenCrepes will walk down the tree to fetch all of the possible links (between issues, to PRs, ...), which can result in a pretty large amount of data nodes.

Clicking on a node will allow you to use that particular node as a root node, but also to build a path.

### Shortest path

You might wonder how issue A and issue B relate to eachother although they're completely different ?

ZenCrepes (thanks to Cytoscapes.js) allows you to visualize the shortest path between two nodes.

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-github-issues-network-path.png" width="640" />
</p>

You can then hover over the nodes in the path to discover more.

## List

The list view is just a table view showing all items in the current query.
