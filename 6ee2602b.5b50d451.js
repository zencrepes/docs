(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(93)),s={id:"states",title:"Testing States",sidebar_label:"States"},o={unversionedId:"tests/states",id:"tests/states",isDocsHomePage:!1,title:"Testing States",description:"This new dataset aims at providing the current test state for large and multi-codebases releases.",source:"@site/docs/tests/states.md",slug:"/tests/states",permalink:"/docs/tests/states",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/tests/states.md",version:"current",sidebar_label:"States",sidebar:"someSidebar",previous:{title:"Jira Issues",permalink:"/docs/jira/issues"},next:{title:"Get Started",permalink:"/docs/develop/getstarted"}},c=[{value:"Use Cases",id:"use-cases",children:[{value:"Preparing the release of a distribution",id:"preparing-the-release-of-a-distribution",children:[]},{value:"Building a compatibility matrix",id:"building-a-compatibility-matrix",children:[]}]},{value:"Misc",id:"misc",children:[{value:"ID generation",id:"id-generation",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This new dataset aims at providing the current test state for large and multi-codebases releases."),Object(i.b)("p",null,"It will receive (usually from your CI/CD platform) test execution status from your various runs. ZenCrepes will then display this data in context. The point here is not to track how execution status is evolving but to display the last status for each of the test runs."),Object(i.b)("p",null,"The payload for a testing state event is as follow:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "30260846-a5fa-5fef-b2df-2cd8d63b3677",\n  "name": "Jahia",\n  "version": "SNAPSHOT",\n  "dependencies": [\n    {\n      "name": "dep1",\n      "version": "1.1.1",\n      "url": "OPTIONAL"\n    },\n    {\n      "name": "dep2",\n      "version": "2.2.2"\n    }\n  ],\n  "createdAt": "2020-10-24T23:02:18.462Z",\n  "state": "PASS",\n  "url": "http://access-the-results-on-the-ci-cd-platform.abc",\n  "runTotal": 434,\n  "runSuccess": 434,\n  "runFailure": 0,\n  "runDuration": 1626\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"id")," (defined by the event submitter) would never change for a set module version and dependency, a code snippet is available at the bottom of this page and can be used as a recommendation for an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," generation logic."),Object(i.b)("p",null,"Although a bit more abstract than the other dataset, this feature can actually be used to solve multiple use cases detailed below."),Object(i.b)("h2",{id:"use-cases"},"Use Cases"),Object(i.b)("h3",{id:"preparing-the-release-of-a-distribution"},"Preparing the release of a distribution"),Object(i.b)("p",null,"Your team is developing a product (wich could be considered a distribution) composed of 15 elements (i.e. microservices, modules, ...), you only cut a release once all those modules are passing your automated test suites."),Object(i.b)("p",null,"Through facets, ZenCrepes UI will let you answer the following questions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'What are the elements being tested with "distribution 1.2"?')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"What are their testing state (PASS / FAILURE)?"))),Object(i.b)("h3",{id:"building-a-compatibility-matrix"},"Building a compatibility matrix"),Object(i.b)("p",null,"Your team is developing a product that needs to be compatible with different versions of a database vendor (or different version of Node). You already have automated tools that test the various combinations."),Object(i.b)("p",null,"Through facets, ZenCrepes UI will let you answer the following questions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Which version of NodeJS is My-Microservice compatible with?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Which of my microservices are compatible with NodeJS 14.x?"))),Object(i.b)("h2",{id:"misc"},"Misc"),Object(i.b)("h3",{id:"id-generation"},"ID generation"),Object(i.b)("p",null,"The code snippet below is a suggestion on how the state ID could be generated for each test run."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { v5 as uuidv5 } from 'uuid';\n\ninterface Dependency {\n  id: string;\n  name: string;\n  version: string;\n  url?: string;\n}\n\nconst prepString = (s: string) => {\n  return s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();\n};\n\n// This generate an unique id based on the combination the component and its dependencies\n// The ID is simply a UUID genreated from the concatenation of all elements\n// Note that the dependencies are sorted and all string are cleaned (lower case and stripped from non alphanumerical characters)\nconst getId = (name: string, version: string, dependencies: Dependency[]) => {\n  let idStr = prepString(name) + prepString(version);\n\n  dependencies\n    .sort((a: Dependency, b: Dependency) => {\n      // Sort by name\n      if (a.name > b.name) return 1;\n      if (a.name < b.name) return -1;\n      // If names are equal, then sort by version\n      if (a.version > b.version) return 1;\n      if (a.version < b.version) return -1;\n      return 0;\n    })\n    .forEach((d: Dependency) => {\n      idStr = idStr + prepString(d.name) + prepString(d.version);\n    });\n\n  const UUID_NAMESPACE = 'c72d8f12-1818-4cb9-bead-44634c441c11';\n  return uuidv5(idStr, UUID_NAMESPACE);\n};\n")))}u.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);