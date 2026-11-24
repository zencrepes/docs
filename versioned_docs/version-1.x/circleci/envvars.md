---
id: envvars
title: CircleCI Environment Variables
sidebar_label: Env Vars
---

:::info
CircleCI is not providing an API to understand which repositories are currently active for build (it only does it for repositories the user is watching), therefore to fetch the data for an entire organization, ZenCrepes has to query each project individually. So if you have 100's of them, this takes 100's of queries, even if you only have 2 repositories enabled for CircleCI builds.
:::

Aside from using Context, which is handled at the organization level, CircleCI allow environment variables to be stored independently for each repo, and this can easily become a pain to maintain if you have a large number of repositories.

### Obfuscating values

Since environement variable can be used to store sensitive information (such as credentials), ZenCrepes automatically obfuscates the actual values.

This is done by generating a random 10 characters string, and assigning that string to each environement variable with the same value, making it impossible to recover the actual value.

### Finding similar values

The main objective of this view is to allow the user to see how environment variable are used and if some of them are using similar (or different values).

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-circleci-envvars.png" width="800" />
</p>

For example, we can see here that three repos in the Organization `zencrepes` are using an environment variable called `SSH_USER` and all three of them are using the same value for that variable (although ZenCrepes does not give a clue about what the value is).
