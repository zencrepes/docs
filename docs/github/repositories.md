---
id: repositories
title: GitHub Repositories
sidebar_label: Repositories
---

Display GitHub repositories, currently only support the exploration and list tabs.

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-repos-list.png" width="640" />
</p>

For organizations with a large number of repositories this view provides insight about repo's activity through color-coding its commits to master:

- Green: The repos has 20 commits or more in the past 3 months or if it has less than 20, all of its commits in the past 3 months (for new repos).
- Yellow: The repo only has 20 commits in 3 to 6 months
- Red: The repo has less than 20 commits overall (and over more than 3 months), or it took more than 7 months to get to 20 commits.
- Empty: There has not been any commits in the last 12 months

This feature, due to its querying cost, is currently limited to 20 commits, only onto the `master` branch.
