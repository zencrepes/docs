This section of the document will contain a set of instructions to quickly spin-up the stack. Those instructions have been tested on MacOS and assume you already have common development tools installed (namely Docker, node, yarn).

It will also focus primarily on GitHub for datasource.

## Clone ZenCrepes repositories:

We'll first create a `zencrepes` folder in your home directory and clone the necessary repos

```
mkdir ~/zencrepes
git clone https://github.com/zencrepes/zindexer.git
git clone https://github.com/zencrepes/zui.git
git clone https://github.com/zencrepes/zapi.git
```

## Set-up Elasticsearch and Kibana

But before actually playing with ZenCreps, let's spin-up Elasticsearch and Kibana. Kibana is not needed to run ZenCrepes, but will ease debugging.

Pull and run an Elasticsearch instance

```sh-session
> docker pull docker.elastic.co/elasticsearch/elasticsearch:7.5.0
> docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.5.0
```

Verify you instance is running properly by opening up a web browser and visiting `http://127.0.0.1:9200`, you should see a JSON payload.

Get the container id of the Elasticsearch instance (for Kibana)

```sh-session
> docker ps
CONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES
f0b5b04a2c24        docker.elastic.co/elasticsearch/elasticsearch:7.5.0   "/usr/local/bin/dock…"   3 minutes ago       Up 3 minutes        0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   hungry_gagarin
```

In this example, the container ID for our Elasticsearch instance is: `f0b5b04a2c24`, we'll use this number to attach the kibana to.

Pull and run a Kibana instance (note the use of the container ID `f0b5b04a2c24`)

```sh-session
> docker pull docker.elastic.co/kibana/kibana:7.5.0
> docker run --link f0b5b04a2c24:elasticsearch -p 5601:5601 docker.elastic.co/kibana/kibana:7.5.0
```

At this point, you should have a Kibana instance running, open-up your web browser and visit `http://127.0.0.1:5601`, click on `Management` on the left side, then `Index Management`. You should see "No Indices to show" since we haven't loaded any data yet.

## Obtain a GitHub Token

You'll need a GitHub developer token to fetech data with `zindexer`, follow [instructions on this page](http://docs.zencrepes.io/install/prerequisites) to get one (and keep it safe/secret).

## Configure zindexer

Let's simply start by running zindexer for the very first time.

```bash
cd ~/zencrepes/zindexer
./bin/run sources -g org -o zencrepes
Initialized configuration file with defaults in: /Users/YOURUSERNAME/.config/zindexer/config.yml
Please EDIT the configuration file first
```

It didn't fetch any data, but instead, provisioned an empty configuration, which you can then edit.

So open-up the above mentioned configuration file (replace YOURUSERNAME). You'll only need to modify the two lines containing `YOUR_USERNAME` and `YOUR_TOKEN`.

```yml
github:
  enabled: true
  username: YOUR_USERNAME
  token: YOUR_TOKEN
```

The assumption is that you're running Elasticsearch on the ports specified above, so you can just save the modified configuration file and exit.

## Enable repositories

Zindexer works by data source (or GitHub repositories), using the `source` command.

```bash
➜ ./bin/run sources --help
Manage data sources (GitHub or Jira)

USAGE
  $ zindexer sources [FILE]

OPTIONS
  -a, --active                     Automatically make the new sources active by default
  -g, --ggrab=affiliated|org|repo  [default: affiliated] If Github, Select how to fetch repositories
  -h, --help                       show CLI help
  -l, --load                       Load active status from status file: CONFIG_DIR/sources.yml
  -o, --gorg=gorg                  If Github, organization login
  -r, --grepo=grepo                If Github, repository name
  -t, --type=JIRA|GITHUB           [default: GITHUB] Type of source (JIRA or GitHUB)
  --envUserConf=envUserConf        User Configuration passed as an environment variable, takes precedence over config fil
```

As you can see this command takes a few option, but let's start with something simple fetch and make as "active" all repositories attached to your favorite organization (if there are many you might want to either pick a smaller org or specify individual repositories).

```bash
./bin/run sources -g org -o zencrepes -a
Configuration file exists: /Users/YOURUSERNAME/.config/zindexer/config.yml
Starting to fetch data from org: zencrepes
Remaining GitHub tokens: 5000
Remaining GitHub tokens: 5000
Latest call contained 5 nodes, download rate: 18 nodes/s
Params: {"orgId":"MDEyOk9yZ2FuaXphdGlvbjQ3MzU2NzU1"} -> Fetched Count / Remote Count / Query Increment: 5 / 7 / 2
Remaining GitHub tokens: 4995
Latest call contained 2 nodes, download rate: 8 nodes/s
Params: {"orgId":"MDEyOk9yZ2FuaXphdGlvbjQ3MzU2NzU1"} -> Fetched Count / Remote Count / Query Increment: 7 / 7 / 0
Fetching repositories for org: zencrepes...  done
Elasticsearch Index sources does not exist, creating...  done
Grabbing data from ElasticSearch and merging with new data...  done
About to submit (create or update) data about 7 source(s) to Elasticsearch
Submitting data to ElasticSearch (1 / 1)...  done
All available sources:
Type   Name                     Active
GITHUB zencrepes/arranger       true
GITHUB zencrepes/docs           true
GITHUB zencrepes/github-indexer true
GITHUB zencrepes/zapi           true
GITHUB zencrepes/zencrepes      true
GITHUB zencrepes/zindexer       true
GITHUB zencrepes/zui            true

Refreshing the repositories configuration file...  done
You can enable/disable sources in: /Users/YOURUSERNAME/.config/zindexer/sources.yml
```

A couple of things to watch for here (and common to most zindexer commands):

- The number of remaining GitHub tokens is displayed after each call, zindexer will stop if it gets to 0 (but 5000 are plentyful)
- The download rates (in nodes/s) shows how fast nodes are being downloaded, you might have seen in the configuration file the ability to specify how many nodes to download per call (maximum is 100). This number can be tuned but you'll see that increasing the number of nodes can actually negatively impact performances.

You can also see that sources are saved in a dedicated yml files and can be enabled/disabled there. Simply open the file, change some flags from true to false (or the other way around), save and run the following command:

```bash
./bin/run sources -l
Configuration file exists: /Users/francoisgerthoffert/.config/zindexer/config.yml
Checking if index: sources exists...  done
Querying Elasticsearch...  done
Grabbing sources configuration from file: /Users/francoisgerthoffert/.config/zindexer/sources.yml...  done
Comparing Elasticsearch data with flags in configuration file...  done
Submitting data to ElasticSearch (1 / 1)...  done
All available sources:
Type   Name                     Active
GITHUB zencrepes/arranger       true
GITHUB zencrepes/docs           true
GITHUB zencrepes/github-indexer true
GITHUB zencrepes/zapi           true
GITHUB zencrepes/zencrepes      true
GITHUB zencrepes/zindexer       true
GITHUB zencrepes/zui            true

Refreshing the repositories configuration file...  done
You can enable/disable sources in: /Users/francoisgerthoffert/.config/zindexer/sources.yml
```

And that's it, your sources are configured and ready to fetch some data

## Fetch data from GitHub

Various datasets can be loaded:

```bash
./bin/run github --help
Fetches data from GitHub

USAGE
  $ zindexer github:COMMAND

COMMANDS
  github:issues        Github: Fetches issues data from configured sources
  github:labels        Github: Fetches labels attached to configured sources
  github:milestones    Github: Fetches milestones data from configured sources
  github:projects      Github: Fetches projects data from configured sources
  github:pullrequests  Github: Fetches Pullrequests data from configured sources
  github:releases      Github: Fetches releases data from configured sources
  github:repos         Github: Fetches repos data from configured sources
```

For now let's fetch Pull Requests

```bash
./bin/run github:pullrequests
Configuration file exists: /Users/francoisgerthoffert/.config/zindexer/config.yml
Checking if index: sources exists...  done
Grabbing the active repositories from ElasticSearch...  done
Processing source: zencrepes/zencrepes
Checking if index: gh_prs_ exists...  done
Remaining GitHub tokens: 5000
Latest call contained 5 nodes, oldest: Feb 8th 2020 download rate: 5 nodes/s
Repo: MDEwOlJlcG9zaXRvcnkxMjM2MzM5MzY= -> Fetched Count / Remote Count / Query Increment: 5 / 107 / 30
Remaining GitHub tokens: 4993
Remaining GitHub tokens: 4990
Latest call contained 12 nodes, oldest: Jan 10th 2019 download rate: 8 nodes/s
Repo: MDEwOlJlcG9zaXRvcnkxMjM2MzM5MzY= -> Fetched Count / Remote Count / Query Increment: 107 / 107 / 0
Grabbing pullrequests for: zencrepes/zencrepes (ID: MDEwOlJlcG9zaXRvcnkxMjM2MzM5MzY=)...  done
Elasticsearch Index gh_prs_ does not exist, creating...  done
Submitting data to ElasticSearch (1 / 2)...  done
Submitting data to ElasticSearch (2 / 2)...  done
Processing source: zencrepes/zindexer
Checking if index: gh_prs_ exists...  done
Querying Elasticsearch...  done
Remaining GitHub tokens: 4986
Latest call contained 5 nodes, oldest: Mar 20th 2020 download rate: 7 nodes/s
Repo: MDEwOlJlcG9zaXRvcnkyMjc5Mjc4MjI= -> Fetched Count / Remote Count / Query Increment: 5 / 11 / 6
Remaining GitHub tokens: 4985
Latest call contained 6 nodes, oldest: Dec 30th 2019 download rate: 9 nodes/s
Repo: MDEwOlJlcG9zaXRvcnkyMjc5Mjc4MjI= -> Fetched Count / Remote Count / Query Increment: 11 / 11 / 0
Grabbing pullrequests for: zencrepes/zindexer (ID: MDEwOlJlcG9zaXRvcnkyMjc5Mjc4MjI=)...  done
Checking if index: gh_prs_ exists...  done
Submitting data to ElasticSearch (1 / 1)...  done
Elasticsearch Index config does not exist, creating...  done
Checking if index: config exists...  done
Querying Elasticsearch...  done
Submitting data to ElasticSearch (1 / 1)...  done
```

If you look closely at the console output (which was truncated in the doc), you might notice that zindexer if fetch data by source, if something fails it will restart from the last repository.

And that's it, your data is now in Elasticsearch.

## Start zapi

Open a new terminal console/tab and start zapi:

```bash
cd ~/zencrepes/zapo
yarn
yarn run start:dev
```

## Start zui

Edit zui `.env` config file to disable keycloak (the authentication/authorization server).

```bash
vim ~/zencrepes/zui/.env
```

Replace `KEYCLOAK_DISABLED=false` with `KEYCLOAK_DISABLED=true`

Save and start zui:

```bash
cd ~/zencrepes/zui
yarn
yarn run start:dev
```

## Done !

That's it, you can now open-up your browser (starting zui should have done it for you), and visit http://localhost:3000

You can try loading more data.

Zapi and zui are started in watch mode, changes you do in the code will automatically trigger a refresh of the application.
