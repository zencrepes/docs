(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var i=t(2),a=t(6),s=(t(0),t(93)),r={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},o={unversionedId:"install/configuration",id:"install/configuration",isDocsHomePage:!1,title:"Configuration",description:"ZenCrepes configuration takes the shape of a file that can be shared (but can also be different) between zqueue, zindexer and zapi. It's full version is available in zindexer/src/components/config/defaultConfig.ts",source:"@site/docs/install/configuration.md",slug:"/install/configuration",permalink:"/docs/install/configuration",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/install/configuration.md",version:"current",sidebar_label:"Configuration",sidebar:"someSidebar",previous:{title:"Architecture",permalink:"/docs/install/architecture"},next:{title:"Authentication & Authorization",permalink:"/docs/install/authentication"}},l=[{value:"Elasticsearch",id:"elasticsearch",children:[{value:"Connecting to Elasticsearch",id:"connecting-to-elasticsearch",children:[]},{value:"System indices",id:"system-indices",children:[]},{value:"One Index per Source",id:"one-index-per-source",children:[]},{value:"Data indices",id:"data-indices",children:[]}]},{value:"Redis",id:"redis",children:[]},{value:"GitHub",id:"github",children:[{value:"Fetch",id:"fetch",children:[]},{value:"Story Points",id:"story-points",children:[]},{value:"Webook",id:"webook",children:[]}]},{value:"CircleCI",id:"circleci",children:[]},{value:"Jira",id:"jira",children:[]}],c={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"ZenCrepes configuration takes the shape of a file that can be shared (but can also be different) between zqueue, zindexer and zapi. It's full version is available in ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/zencrepes/zindexer/blob/master/src/components/config/defaultConfig.ts"}),"zindexer/src/components/config/defaultConfig.ts")),Object(s.b)("p",null,"This part of the documentation will break the configuration by type, for simplicity (and compactness) the documentation will show JSON snippets but the file is composed of its YML translation."),Object(s.b)("h2",{id:"elasticsearch"},"Elasticsearch"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),"  elasticsearch: {\n    host: 'http://127.0.0.1:9200',\n    sslCa: '',\n    cloudId: '',\n    username: '',\n    password: '',\n    sysIndices: {\n      sources: 'sources', // this index is used to store sources data\n      datasets: 'datasets', // this index is used to store data about available index types\n      config: 'config', // this index is used to store zencrepes configuration\n    },\n    oneIndexPerSource: false,\n    dataIndices: {\n      githubRepos: 'gh_repos',\n      githubIssues: 'gh_issues_',\n      githubPullrequests: 'gh_prs_',\n      githubVulnerabilities: 'gh_vulns_',\n      githubStargazers: 'gh_stargazers_watchers_',\n      githubWatchers: 'gh_stargazers_watchers_',\n      githubProjects: 'gh_projects_',\n      githubMilestones: 'gh_milestones_',\n      githubLabels: 'gh_labels_',\n      githubReleases: 'gh_releases_',\n      jiraIssues: 'j_issues_',\n      jiraProjects: 'j_projects_',\n      circleciPipelines: 'cci_pipelines_',\n      circleciEnvvars: 'cci_envvars_',\n      circleciInsights: 'cci_insights_',\n    },\n  },\n")),Object(s.b)("h3",{id:"connecting-to-elasticsearch"},"Connecting to Elasticsearch"),Object(s.b)("p",null,"You can connect to a local Elasticsearch instance or an instance running in Elastic Cloud (by providing your ",Object(s.b)("inlineCode",{parentName:"p"},"cloudID")," and credentials). The details on how the connection is established are ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/zencrepes/zindexer/blob/master/src/utils/es/esClient.ts"}),"available here")),Object(s.b)("h3",{id:"system-indices"},"System indices"),Object(s.b)("p",null,"ZenCrepes uses system indices to store some of the data it needs to operate."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"sources"),": Used by ",Object(s.b)("inlineCode",{parentName:"li"},"zindexer")," to determine what data elements to fetch. For example you could scan an entire organization but only enable data fetching for some of its repositories. This index will contain the list of sources and which are enabled or not."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"datasets"),": ",Object(s.b)("em",{parentName:"li"},"Deprecated")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"config"),": Holds ZenCrepes configuration (which datasets are available, which facets to show, how to display and export the list view). This index is used by ",Object(s.b)("inlineCode",{parentName:"li"},"zindexer")," and ",Object(s.b)("inlineCode",{parentName:"li"},"zapi"),".")),Object(s.b)("h3",{id:"one-index-per-source"},"One Index per Source"),Object(s.b)("p",null,"Although this feature is currently available and operational, its use it still a bit uncertain. The original idea was to store data in one index per source, later allowing index level permissions to be configured. Using this feature on an organization with a lot of repositories will result in a lot of indices generated."),Object(s.b)("h3",{id:"data-indices"},"Data indices"),Object(s.b)("p",null,"These are the indices used to store data from the different datasets. These must be identical between ",Object(s.b)("inlineCode",{parentName:"p"},"zindexer"),", ",Object(s.b)("inlineCode",{parentName:"p"},"zapi")," and ",Object(s.b)("inlineCode",{parentName:"p"},"zqueue")," configurations."),Object(s.b)("h2",{id:"redis"},"Redis"),Object(s.b)("p",null,"Use this configuration option to setup the Redis host, used by zqueue to handle its queue mechanism."),Object(s.b)("h2",{id:"github"},"GitHub"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),"  github: {\n    enabled: true,\n    username: 'YOUR_USERNAME',\n    token: 'YOUR_TOKEN',\n    fetch: {\n      maxNodes: 30,\n      maxParallel: 1,\n      delayBetweenCalls: 1000,\n    },\n    // Define a match between a points label and numbers\n    storyPointsLabels: [\n      { label: 'xx-small', points: 1 },\n      { label: 'x-small', points: 2 },\n      { label: 'small', points: 3 },\n      { label: 'medium', points: 5 },\n      { label: 'large', points: 8 },\n      { label: 'x-large', points: 13 },\n    ],\n    // The webhook configuration is used by zqueue to determine next course of action\n    webhook: {\n      secret: 'PLEASE_CHANGE_ME',\n      // The Array of events matches and event name with an entity type as processed by ZenCrepes\n      // You shouldn't need to change these values\n      events: [\n        { githubEvent: 'label', zencrepesEntity: 'labels' },\n        { githubEvent: 'repository', zencrepesEntity: 'repos' },\n        { githubEvent: 'pull_request', zencrepesEntity: 'pullrequests' },\n        { githubEvent: 'issues', zencrepesEntity: 'issues' },\n        { githubEvent: 'vulnerabilities', zencrepesEntity: 'vulnerabilities' },\n        { githubEvent: 'stargazers', zencrepesEntity: 'star' },\n        { githubEvent: 'watchers', zencrepesEntity: 'watch' },\n        { githubEvent: 'project', zencrepesEntity: 'projects' },\n        { githubEvent: 'milestone', zencrepesEntity: 'milestones' },\n        { githubEvent: 'release', zencrepesEntity: 'releases' },\n      ],\n      // Save the raw webhook \"as-received\" in a timeline fashion (no overwrite)\n      timelinePayload: {\n        includeGithubEvents: ['*'],\n        excludeGithubEvents: ['push', 'create'],\n        esIndexPrefix: 'gh_webhook_timeline_',\n      },\n      // Save the node data contained in the webhook\n      // Overwrite previous node state if the same node with same ID is received\n      // One index per node type\n      nodePayload: {\n        includeGithubEvents: ['*'],\n        excludeGithubEvents: ['push', 'create'],\n        esIndexPrefix: 'gh_webhook_',\n      },\n      // Execute a call to GitHub to fetch the latest data in the same format than zindexer (using the same GraphQL query)\n      // Data is fed into the indices specified in the elasticsearch section\n      fetchNode: {\n        includeGithubEvents: ['*'],\n        excludeGithubEvents: [''],\n      },\n    },\n  },\n")),Object(s.b)("p",null,"This section of configures handling of GitHub."),Object(s.b)("h3",{id:"fetch"},"Fetch"),Object(s.b)("p",null,"Zindexer and Zqueue must abide by GitHub rate limits, and performance implication of some of the calls."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"maxNodes"),": Number of nodes to fetch at a time during bulk fetch operations. For example when fetching issues, the system will by default limit itself to 30 issues at a time. GitHub supports a maximum of 100, but for some of the most complex GraphQL queries (or largest repos), 100 could result in errors. So it's all about finding the sweet spot between number of queries and chances for errors. The sweet spot is usually in the 30-50 region."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"maxParrallel"),": Used by zqueue to limit the number of parallel threads processing the queue to 1."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"delayBetweenCalls"),": Should there be a minimum delay between each call to GitHub API ?")),Object(s.b)("h3",{id:"story-points"},"Story Points"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"storyPointsLabels")," is an array of label and points, when parsing an issue ",Object(s.b)("inlineCode",{parentName:"p"},"zindexer")," and ",Object(s.b)("inlineCode",{parentName:"p"},"zqueue")," would look for one of these labels and assign the corresponding points to the issue."),Object(s.b)("h3",{id:"webook"},"Webook"),Object(s.b)("p",null,"The webhook section has three elements to define how the payload should be processed based on received events."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"includeGithubEvents"),": Allow for specifying which events should be processed by the queue. Using ",Object(s.b)("inlineCode",{parentName:"li"},"'*'")," indicates all events should be processed."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"excludeGithubEvents"),": Allow for specifying which events should not be processed by the queue.")),Object(s.b)("p",null,"Specifying ",Object(s.b)("inlineCode",{parentName:"p"},"'*'")," in includeGithubEvents and ",Object(s.b)("inlineCode",{parentName:"p"},"'push'")," in excludeGithubEvents, means the queue will process all but push events."),Object(s.b)("h2",{id:"circleci"},"CircleCI"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),"  circleci: {\n    enabled: true,\n    token: 'YOUR_TOKEN',\n  },\n")),Object(s.b)("p",null,"Circleci configuration is pretty straight forward, just specify the token you generated from CircleCI"),Object(s.b)("h2",{id:"jira"},"Jira"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),"  jira: [\n    {\n      name: 'SERVER_1',\n      enabled: true,\n      config: {\n        username: 'username',\n        password: 'password',\n        host: 'https://jira.myhost.org',\n        fields: {\n          issues: [\n            { jfield: 'issueType', zfield: 'issueType' },\n            { jfield: 'parent', zfield: 'parent' },\n            { jfield: 'project', zfield: 'project' },\n            { jfield: 'fixVersions', zfield: 'fixVersions' },\n            { jfield: 'resolution', zfield: 'resolution' },\n            { jfield: 'resolutiondate', zfield: 'closedAt' },\n            { jfield: 'watches', zfield: 'watches' },\n            { jfield: 'created', zfield: 'createdAt' },\n            { jfield: 'priority', zfield: 'priority' },\n            { jfield: 'versions', zfield: 'versions' },\n            { jfield: 'issuelinks', zfield: 'links' },\n            { jfield: 'issuetype', zfield: 'type' },\n            { jfield: 'assignee', zfield: 'assignee' },\n            { jfield: 'resolution', zfield: 'resolution' },\n            { jfield: 'updated', zfield: 'updatedAt' },\n            { jfield: 'status', zfield: 'status' },\n            { jfield: 'description', zfield: 'description' },\n            { jfield: 'summary', zfield: 'summary' },\n            { jfield: 'creator', zfield: 'creator' },\n            { jfield: 'subtasks', zfield: 'subtasks' },\n            { jfield: 'reporter', zfield: 'reporter' },\n            { jfield: 'environment', zfield: 'environment' },\n            { jfield: 'duedate', zfield: 'dueAt' },\n            { jfield: 'customfield_10114', zfield: 'points' },\n            {\n              jfield: 'customfield_11115',\n              zfield: 'originalPoints',\n            },\n            {\n              jfield: 'customfield_11112',\n              zfield: 'parentInitiative',\n            },\n            {\n              jfield: 'customfield_10314',\n              zfield: 'parentEpic',\n            },\n          ],\n        },\n        excludeDays: ['1900-01-01'],\n        fetch: {\n          maxNodes: 30,\n        },\n      },\n    },\n  ],\n")),Object(s.b)("p",null,"Jira configuration takes an array of Jira servers."))}u.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var i=t(0),a=t.n(i);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=i,h=d["".concat(r,".").concat(p)]||d[p]||b[p]||s;return t?a.a.createElement(h,o(o({ref:n},c),{},{components:t})):a.a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=t[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);