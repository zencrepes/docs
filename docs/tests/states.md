---
id: states
title: Testing States
sidebar_label: States
---

This new dataset aims at providing the current test state for large and multi-codebases releases.

It will receive (usually from your CI/CD platform) test execution status from your various runs. ZenCrepes will then display this data in context. The point here is not to track how execution status is evolving but to display the last status for each of the test runs.

The payload for a testing state event is as follow:

```json
{
  "id": "30260846-a5fa-5fef-b2df-2cd8d63b3677",
  "name": "Jahia",
  "version": "SNAPSHOT",
  "dependencies": [
    {
      "name": "dep1",
      "version": "1.1.1",
      "url": "OPTIONAL"
    },
    {
      "name": "dep2",
      "version": "2.2.2"
    }
  ],
  "createdAt": "2020-10-24T23:02:18.462Z",
  "state": "PASS",
  "url": "http://access-the-results-on-the-ci-cd-platform.abc",
  "runTotal": 434,
  "runSuccess": 434,
  "runFailure": 0,
  "runDuration": 1626
}
```

The `id` (defined by the event submitter) would never change for a set module version and dependency, a code snippet is available at the bottom of this page and can be used as a recommendation for an `id` generation logic.

Although a bit more abstract than the other dataset, this feature can actually be used to solve multiple use cases detailed below.

## Use Cases

### Preparing the release of a distribution

Your team is developing a product (wich could be considered a distribution) composed of 15 elements (i.e. microservices, modules, ...), you only cut a release once all those modules are passing your automated test suites.

Through facets, ZenCrepes UI will let you answer the following questions:

- `What are the elements being tested with "distribution 1.2"?`
- `What are their testing state (PASS / FAILURE)?`

### Building a compatibility matrix

Your team is developing a product that needs to be compatible with different versions of a database vendor (or different version of Node). You already have automated tools that test the various combinations.

Through facets, ZenCrepes UI will let you answer the following questions:

- `Which version of NodeJS is My-Microservice compatible with?`
- `Which of my microservices are compatible with NodeJS 14.x?`

## Misc

### ID generation

The code snippet below is a suggestion on how the state ID could be generated for each test run.

```javascript
import { v5 as uuidv5 } from 'uuid';

interface Dependency {
  id: string;
  name: string;
  version: string;
  url?: string;
}

const prepString = (s: string) => {
  return s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
};

// This generate an unique id based on the combination the component and its dependencies
// The ID is simply a UUID genreated from the concatenation of all elements
// Note that the dependencies are sorted and all string are cleaned (lower case and stripped from non alphanumerical characters)
const getId = (name: string, version: string, dependencies: Dependency[]) => {
  let idStr = prepString(name) + prepString(version);

  dependencies
    .sort((a: Dependency, b: Dependency) => {
      // Sort by name
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      // If names are equal, then sort by version
      if (a.version > b.version) return 1;
      if (a.version < b.version) return -1;
      return 0;
    })
    .forEach((d: Dependency) => {
      idStr = idStr + prepString(d.name) + prepString(d.version);
    });

  const UUID_NAMESPACE = 'c72d8f12-1818-4cb9-bead-44634c441c11';
  return uuidv5(idStr, UUID_NAMESPACE);
};
```
