(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(9),i=(a(0),a(163)),o={id:"architecture",title:"Architecture",sidebar_label:"Architecture"},c={id:"install/architecture",title:"Architecture",description:"ZenCrepes architecture is fairly straight forward, it fetches data from remote sources, pushes it to a data store and display everything with a UI.",source:"@site/docs/install/architecture.md",permalink:"/docs/install/architecture",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/install/architecture.md",sidebar_label:"Architecture",sidebar:"someSidebar",previous:{title:"ZenCrepes Serverless",permalink:"/docs/serverless"},next:{title:"Overview",permalink:"/docs/github/overview"}},l=[{value:"Zindexer",id:"zindexer",children:[]},{value:"Zqueue",id:"zqueue",children:[]},{value:"Elasticsearch",id:"elasticsearch",children:[]},{value:"Zapi",id:"zapi",children:[]},{value:"Zui",id:"zui",children:[]},{value:"Keycloak",id:"keycloak",children:[]}],s={rightToc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ZenCrepes architecture is fairly straight forward, it fetches data from remote sources, pushes it to a data store and display everything with a UI."),Object(i.b)("p",null,"A ZenCrepes deployment is made of the following services:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"zindexer"),": A bulk data fetcher"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"zqueue"),": A event driven data fetcher (to be implemented)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Elasticsearch"),": The datastore"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"zapi"),": A GraphQL API linking the UI to the datastore"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"zui"),": The user interface"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Keycloak"),": An authentication/authorization provider (optional)")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/zencrepes-architecture.png",alt:null}))),Object(i.b)("p",null,"All services are meant to be running in Docker, corresponding containers are available on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/orgs/zencrepes/repositories"}),"Docker Hub"),"."),Object(i.b)("h2",{id:"zindexer"},"Zindexer"),Object(i.b)("p",null,"Zindexer is a CLI tool created to fetch data, in bulk, from many sources (it plays gently with GitHub API and follow rate limits). Data is then pushed to an Elasticsearch cluster."),Object(i.b)("p",null,"For those using ZenCrepes primariraly with GitHub, zindexer is only really useful during initial setup, it will provision the Elasticsearch cluster with any historical data. Following the initial fetch, ",Object(i.b)("inlineCode",{parentName:"p"},"zqueue")," would take over and push nodes updates whenever they happen.\nFor the other data sources, in the absence of web-hooks, zindxer can be cron'd to fetch additional data at regular interval."),Object(i.b)("p",null,"A couple of things worth noting:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The node ID (an Issue, a project, a milestone) is ported over from the data source to the elasticsearch index, which prevents duplicated data. For example if ",Object(i.b)("inlineCode",{parentName:"li"},"zqueue")," receives an update for a node that was previously imported by ",Object(i.b)("inlineCode",{parentName:"li"},"zindexer"),", this node will be updated."),Object(i.b)("li",{parentName:"ul"},"Whenever possible (depending of the data source API characteristics), nodes are fetched sorted by last update date (descending), when the system fetch an issue that is already present and has the same late update date, it knows it can stop fetching further nodes.")),Object(i.b)("h2",{id:"zqueue"},"Zqueue"),Object(i.b)("p",null,"Zqueue is a queue aimed at processing events received after registering a webhook with GitHub."),Object(i.b)("p",null,"It contains three Redis queues:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"github"),": Limited to processing one queue element at a time and per second (to play nicely with ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.github.com/v3/#rate-limiting"}),"GitHub rate limits"),"), this queue initiates a call to GitHub to fetch additional metadata, not included in the webhook payload. The objective here is to reach content parity with nodes fetches using ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://github.com/zencrepes/zindexer"}),"Zindexer"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"storepayload"),": Pushes the payload to an elasticsearch index (one index per payload type) while trying to keep only one document per github node (overwrite on update). It aims at providing the latest state of a node."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"storerawpayload"),": Pushes the payload to an elasticsearch index (one index per payload type) and record the date at which the event was received. It aims at providing a timeline view of nodes lifecycle.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"storepayload")," and ",Object(i.b)("inlineCode",{parentName:"p"},"storerawpayload")," are mostly there for those willing to diving in their data using a tool like Kibana or to archive GitHub events on their organization. ZenCrepes doesn't try to access datasets processed through these two queues."),Object(i.b)("h2",{id:"elasticsearch"},"Elasticsearch"),Object(i.b)("p",null,"Elasticsearch is the datastore for the project, two options are available for indices:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"One index per data source and data type (all GitHub issues, all Jira issues, ...)"),Object(i.b)("li",{parentName:"ul"},"One index per data repository, data source and data type, using index aliases for querying.")),Object(i.b)("p",null,"Cluster sizing is not going to be discussed in this documentation, there are many resources available online covering this topic."),Object(i.b)("h2",{id:"zapi"},"Zapi"),Object(i.b)("p",null,"Zapi is a GraphQL api providing an interface between the Elasticsearch datastore and our UI. It supports querying through an abstraction language called ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://arranger.readthedocs.io/en/latest/src/sqon.html"}),"SQON")," and supports pagination, aggregations and various ZenCrepes-specific operations."),Object(i.b)("h2",{id:"zui"},"Zui"),Object(i.b)("p",null,"Zui is ZenCrepes front-end, nothing particular to mention about it. It interacts primariraly with Zapi, and will (not implemented yet) in some occurences communicate directly with the data source (GitHub in particular) for bulk operations (if authentication/authorization is set-up properly)."),Object(i.b)("h2",{id:"keycloak"},"Keycloak"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.keycloak.org/"}),"Keycloak")," is an identify and access management solution, it is used to control access to the data. Keycloak can be disabled through environment variables, although this usecase is only recommended during development."))}u.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return a?n.a.createElement(h,c(c({ref:t},s),{},{components:a})):n.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);