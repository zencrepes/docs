---
id: perfs
title: Testing Perfs
sidebar_label: Perfs
---

This new dataset aims at recording performance tests runs and facilitate their analysis.

It will receive (usually from your CI/CD platform) test runs status and ZenCrepes will then display this data in context. 

This dataset has been designed around identifying load breaking points ("How much can I load my system before it starts erroring out?"). A single performance test report is therefore composed of multiple runs, each with a different user count. The target run platform is Apache JMeter

The payload for a testing perf event is as follow:

```json
{
  "name": "Name of the run",
  "rampUp": 30,
  "startedAt": "2021-10-01T18:30:01.001Z",
  "duration": 1200,
  // Repository containing the testing codebase
  "repository": { 
      "name": "perf",
      "url": "https://github.com/zencrepes/perf",
      "owner": {
          "login": "zencrepes",
          "url": "https://github.com/zencrepes"
      }
  },
  // The platform where the tests were executed
  "platform": { 
      "vendor": "AWS",
      "tenant": "zencrepes",
      "region": "us-east-2"
  },
  // The various resources used to run the tests
  "resources": [{
      "name": "elasticsearch",
      "size": "t2.medium",
      "image": "docker.elastic.co/elasticsearch/elasticsearch:7.10.2"
  }, {
      "name": "jmeter",
      "size": "t2.medium",
      "image": "zencrepes/zencrepes-perf:latest"
  }],
  // An array of runs 
  "runs": [{
      "name": "200 Users - RampUp 30",
      "userCount": 200,
      // Direct output (as-is) of the statistics.json file generated
      // by JMeter. Note that a "Total" transaction is needed
      // for zencrepes UI/API (displayed by default)
      // The statistics object will be converted into an array by zqueue
      "statistics": {
          "Transaction A" : {
            "transaction" : "Transaction A",
            "sampleCount" : 800,
            "errorCount" : 0,
            "errorPct" : 0.0,
            "meanResTime" : 481.8874999999999,
            "medianResTime" : 406.5,
            "minResTime" : 25.0,
            "maxResTime" : 1566.0,
            "pct1ResTime" : 1165.2999999999997,
            "pct2ResTime" : 1319.6999999999996,
            "pct3ResTime" : 1478.97,
            "throughput" : 15.843152787404692,
            "receivedKBytesPerSec" : 21.05715912466581,
            "sentKBytesPerSec" : 86.78148826616497
          },
          "Total" : {
            "transaction" : "Total",
            "sampleCount" : 6800,
            "errorCount" : 0,
            "errorPct" : 0.0,
            "meanResTime" : 307.7454411764701,
            "medianResTime" : 183.0,
            "minResTime" : 4.0,
            "maxResTime" : 1582.0,
            "pct1ResTime" : 735.9000000000005,
            "pct2ResTime" : 947.8999999999996,
            "pct3ResTime" : 1382.9799999999996,
            "throughput" : 124.91045022869635,
            "receivedKBytesPerSec" : 133.73347060471355,
            "sentKBytesPerSec" : 428.5975472547255
          },
        }
  }, {
      "name": "300 Users - RampUp 30",
      "rampUp": 30,
      "userCount": 300,
      "statistics": {
          "Transaction A" : {
            "transaction" : "Transaction A",
            "sampleCount" : 1200,
            "errorCount" : 0,
            "errorPct" : 0.0,
            "meanResTime" : 746.6841666666661,
            "medianResTime" : 694.0,
            "minResTime" : 24.0,
            "maxResTime" : 1790.0,
            "pct1ResTime" : 1541.6000000000004,
            "pct2ResTime" : 1665.95,
            "pct3ResTime" : 1740.97,
            "throughput" : 20.96655833944858,
            "receivedKBytesPerSec" : 27.86668544920851,
            "sentKBytesPerSec" : 114.84514231051473
          },
          "Total" : {
            "transaction" : "Total",
            "sampleCount" : 10200,
            "errorCount" : 0,
            "errorPct" : 0.0,
            "meanResTime" : 476.80019607842905,
            "medianResTime" : 331.0,
            "minResTime" : 3.0,
            "maxResTime" : 1822.0,
            "pct1ResTime" : 1187.0,
            "pct2ResTime" : 1414.0,
            "pct3ResTime" : 1700.0,
            "throughput" : 168.2446475109689,
            "receivedKBytesPerSec" : 180.13233802329034,
            "sentKBytesPerSec" : 577.2875138142051
          },
      }
  }],
  "url": "An URL back to the execution platform",
}
```
