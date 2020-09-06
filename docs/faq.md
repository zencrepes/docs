---
id: faq
title: FAQ
sidebar_label: FAQ
---

### How do I contribute ? Where can I report issues, post suggestions ?

Simply start by submitting an issue here: https://github.com/zencrepes/zencrepes/issues

### Do I need to deploy the entire ZenCrepes stack ?

No, if you want to trade usability for flexibility, you could simply use ZenCrepes indexer and dive in the data using Kibana.

### Do I need to backup the data

Not really, in the even your Elasticsearch cluster looses its data, it can be re-fetched using zindexer. ZenCrepes doesn't do any magic, it just displays data collected from its remote data sources via APIs.

### Crucial features are missing, how come ?

ZenCrepes does have bugs, is missing features and likely diverges from best practices. But always keep in mind that it has been created as a hobby project built during numerous evenings and weekends.

The addition of features, dealing with technical debt or fixing defects, are an interesting exercise of balancing (very limited) time and direct benefits to the user (and honestly to me, as I initially started to build ZenCrepes for my own usage of the tool). There are tons of things I could add may time not be a constraint.

Some technical decisions during implementation would also be different.

For example, ZenCrepes is currently using [Rematch](https://rematch.github.io/rematch/). It is a great library to get started quickly it allows me to very quickly add new features using state/redux and to maintain a view-wide state easily. But using a framework with little adoption not backed by a strong community might bite ZenCrepes back at some point.

Another point is around ZenCrepes use of Typescript, often relying on `any` is far from ideal, but is sometime faster than having to define types for everything (in particular complex objects), some might wonder why bother with Typescript if not all types are defined. The point here is mostly to take an opportunistic approach (to save time, again). The framework is there, the tooling is in place, when I do take the time I add types (and can easily add it later if needs be). So when the time will come (if it does), to adopt proper Typescript practices, the step will be lower.
