---
id: try
title: Try ZenCrepes self-hosted
sidebar_label: Try It !
---

This section of the documentation contains instructions to get started quickly using `docker` and `docker-compose`. This doesn't aim at providing instructions to install a production-grade environment, but to take the shortest path to a running ZenCrepes environment.

This documentation has been tested on Mac, instructions should be identical on GNU/Linux.

## Pre-requisites

The following elements are needs to follow along this page:

- Docker and Docker-compose
- A publicly reachable host (for the Webhook configuration)

## GitHub Configuration

### Obtain a GitHub developer token

Log-in your profile in GitHub, and go to your settings.

![](/img/zencrepes-dev-github-settings.png)

In the left-side menu, click on `Developer settings` at the bottom.

Then select `Personal access tokens` and `Generate new token`.

![](/img/github-dev-settings.png)

Give your token a name, and select the following scopes:

- repo
- admin:org

Those scopes should be sufficient to get started, click on `Generate token` and keep this token safe (don't share it!).

### Register a WebHook

The next thing is you need to to register a WebHook, it will be used to receive events on your organization (or on individual repositories).

Go to your organization (or repo settings) and click on `Webhooks`

![](/img/github-org-webhook.png)

Then click on `Add Webhook`, and enter the following settings:

- **Payload URL**: The zqueue host that will be listening to the events, for simplicity's sake and in the context of this guide we're going to expose port 3003, on the assumption you do not configure SSL (don't do that for production), you'd just have to enter: `http://YOUR_DOMAIN_OR_IP:3003/github/webhook`.
- **Content type**: Select `application/json`.
- **Secret**: Enter a secret and keep it safe, it will be used by zqueue to verify incoming events.
- **Which events...**: Select the events you'd like to receive, you can select `Send me everything` for the purpose of getting started quickly.
- **Active**: Unselect this box until the environment is running (the last step of this guide).

## Clone the docker repo

```bash
mkdir ~/zencrepes
cd ~/zencrepes
git clone git@github.com:zencrepes/docker.git
cd docker
mkdir /tmp/zencrepes-data
```

PS: `/tmp/zencrepes-data` is where the configuration file and cache data will be stored, if you whish to use a different directory, you'll need to update the `docker-compose.yml` file.

## Configure ZenCrepes

The next thing you need to do is to configure ZenCrepes, a template configuration can be obtained easily by starting either `zindexer`, `zapi` or `zqueue`. At startup they will look for a configuration file, and if they can't find any, will generate a default one and terminate themselves.

```bash
docker run \
  -it \
  --name zapi \
  --env CONFIG_PATH=/root/zencrepes \
  --mount type=bind,source=/tmp/zencrepes-data,target=/root/zencrepes \
  zencrepes/zqueue:latest
```

You'll see an error message similar to the below and your container will stop.

```
$ node dist/main.js
[Nest] 63   - 06/08/2020, 1:56:15 AM   [NestFactory] Starting Nest application...
[Nest] 63   - 06/08/2020, 1:56:15 AM   [ConfService] Initialized configuration file with defaults in: /root/zencrepes/config.yml +88ms
[Nest] 63   - 06/08/2020, 1:56:15 AM   [ConfService] Please EDIT the configuration file first +0ms
error Command failed with exit code 1.
```

A default configuration file (config.yml) is now located in `/tmp/zencrepes-data`.

## Configure ZenCrepes

Open-up `/tmp/zencrepes-data/config.yml`, and modify the following elements:

```yml
elasticsearch:
  host: 'http://elasticsearch:9200'
redis:
  host: 'redis://redis:6379'
github:
  username: YOUR_GITHUB_USERNAME
  token: THE_TOKEN_YOU_GOT_AT_THE_BEGINNING_OF_THIS_DOC
  webhook:
    secret: THE_SECRET_CONFIGURED_IN_THE_WEBHOOK_SECTION
```

For the elasticsearch host, use `http://elasticsearch:9200` as this corresponds to the setup with docker-compose, same applies for redis. Leave all the other settings as-is.

## Start the environment

Simply pull the latest version of all of the images and start the environment.

```bash
docker-compose pull
docker-compose up -d
```

ZenCrepes is now available at `http://localhost:8080` but hasn't been configured yet ! At that point you should be able to access it, but the left-side menu will be mostly empty.

## Enable repositories

To facilite discovery (and limit dependencies to external tools), zindexer (which is a CLI tool) has been dockerized, and a small (hugly?) [hack](https://github.com/zencrepes/zindexer/blob/master/startup.sh) was done to ensure this process doesn't shut down after initial execution, keeping the Docker container alive. This will allow you to interact with the command tool without needing to have node and npm running on your machine.

The first step is to identify repositories to load data from (those are called `sources` in ZenCrepes).

Run the following command:

```bash
docker exec -it zindexer zindexer sources --help
```

This gives view a quick view at the available commands, which ultimately define what data will be fetched.

<Note type="tip">
Yes, there needs to be two `zindexer` in the command above, the first one is the docker container name, while the second one is the command to run within that container.
</Note>

To get started quickly, with as much data as possible, run the following command:

```bash
docker exec -it zindexer zindexer sources -a -g affiliated
```

This will enable all repositories from all GitHub organizations affiliated with your account. But be careful, it could represent a lot of data !

## Fetch data

ZenCrepes can fetch various different datasets from GitHub, you can get a list of the available datasets by running the following command

```bash
docker exec -it zindexer zindexer github --help
```

You can then fetch the data of your choice (or all of it) using the commands below:

```bash
docker exec -it zindexer zindexer github:issues
docker exec -it zindexer zindexer github:labels
docker exec -it zindexer zindexer github:milestones
docker exec -it zindexer zindexer github:projects
docker exec -it zindexer zindexer github:pullrequests
docker exec -it zindexer zindexer github:releases
docker exec -it zindexer zindexer github:repos
docker exec -it zindexer zindexer github:stargazers
docker exec -it zindexer zindexer github:vulnerabilities
docker exec -it zindexer zindexer github:watchers
```

Data is fetched per repository, once a repository has been fully loaded its data becomes available in ZenCrepes. So if you are fetching a lot of data, you don't need to wait until the end to start playing with the tool.

## Important notes

Authentication/Authorization is not enabled, so pay attention to where you are spinning up this environment.

Don't run zindexer multiple times in parallel. If you do that you will hit GitHub rate throttling. On top of that, it's in everyone best interest to play gently with GitHub API.

GitHub will issue 5000 tokens per 1-hour period, which should be plenty for most discovery situations. You can monitor token consumption while `zindexer` is running, by watching for the following messages:

```
GitHub Tokens - remaining: 3724 query cost: 1 (token will reset at: 2020-04-29T04:18:44Z)
```

ZenCrepes will pause data loading, until token reset, if you do consume all tokens.

If you re-run the command later on, `zindexer` will only fetch newly updated PRs.

On the long-run, `zindexer` will only be useful for the initial data fetching (historical data). another tool `zqueue` (not built yet), will take care of fetching data based on events it will receive from GitHub. `zindexer` is only needed to fetch data, it doesn't need to be running constantly.

That's it, happy discovery !
