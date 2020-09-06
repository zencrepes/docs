---
id: querying
title: Querying
sidebar_label: Querying
---

ZenCrepes uses [SQON](https://arranger.readthedocs.io/en/latest/src/sqon.html) as a query language for its front-end, queries are at the core of all of the filtering and general data fetching used on the UI (i.e. everything is a query).

SQON queries are then processed through ZAPI and automatically converted into Elasticsearch queries, which are then used to build aggregations, fetch documents, ...

## Saving and Opening queries

You can save queries and open them by clicking on the corresponding icons. Queries are saved in your browser's cache, so you're going to loose them if you clear your cache or use a different browser.

## Sharing queries

You cannot share queries per-se, but if you send the URL of the page you're currently on, users will automatically see the same filters. They can then save those filters.

## Editing a query

Not everything is feasible (or easily feasible) in a UI, for example NOT is sometimes complex to represent in facets.

Instead of building an overly complicated UI, ZenCrepes allows you to edit queries. You can access this modal by clicking on the pen icon on the right side of the query bar.

<p align="center">
  <img alt="Issues View" title="Issues view" src="/img/zencrepes-edit-query.png" width="640" />
</p>

You will also automatically see a list of the fields supported by default (technically any of the Elasticsearch fields can be used).

### Tag your custom filters

ZenCrepes is going to process handle sightly differently filters you add through manually editing the query, versus the filters that are dynanically added when you're using facets.

If you're editing a query and its content is too complex for ZenCrepes to understand, simply add a `tag` field to your filter, it will then be ignored by ZenCrepes facets.

```json
{
  "op": "and",
  "content": [
    {
      "op": "in",
      "tag": "ignore-me",
      "content": {
        "field": "labels.edges.node.name.keyword",
        "value": ["zui", "zapi"]
      }
    }
  ]
}
```

## Using NOT with nested fields

Although SQON supports 'not-in' to exclude results, this currently doesn't work on nested fields. You can easily spot nested field as they contain "edges" in their definition. But in general a nested field is a field that can take multiple values.
For example: :

- An issue can have multiple labels. labels is a nested field
- An issue can only have one repository, repository is not a nested field

But you can still perform a NOT logic on a nested field. The sample query below search for all issues with labels `zui` OR `zapi` but NOT `bug`

```json
{
  "op": "and",
  "content": [
    {
      "op": "in",
      "content": {
        "field": "labels.edges.node.name.keyword",
        "value": ["zui", "zapi"]
      }
    },
    {
      "op": "not",
      "content": [
        {
          "op": "in",
          "content": {
            "field": "labels.edges.node.name.keyword",
            "value": ["bug"]
          }
        }
      ]
    }
  ]
}
```

Note that ZenCrepes query display does handle such filters, and will display `Advanced Filter (edit to see)` instead of allowing you to dynamically remove values.
