# ZenCrepes documentation

This website is built with [Docusaurus](https://docusaurus.io/). It serves the documentation of ZenCrepes at [docs.zencrepes.io](https://docs.zencrepes.io).

## Versions

The site serves two documentation versions from one deployment:

- **2.x** (the default, in `docs/`): the version under active development.
- **1.x** (in `versioned_docs/version-1.x/`): the previous generation, served under `/docs/1.x/`.

The navbar version dropdown switches between them. Edit `docs/` for v2 content, and `versioned_docs/version-1.x/` for v1 content.

## Installation

```bash
npm install
```

## Local development

```bash
npm start
```

This command starts a local development server. Most changes are reflected live, without a restart of the server.

## Build

```bash
npm run build
```

This command generates the static site into the `build` directory. The build fails on a broken internal link.

## Deployment

A push to `master` deploys the site to GitHub Pages through the `documentation` workflow. For a manual deployment:

```bash
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```
