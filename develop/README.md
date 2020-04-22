# Get started

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

You'll need a GitHub developer token to fetech data with `zindexer`, follow instructions on this page to get one (and keep it safe/secret).
