(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),i=(r(0),r(168)),a={id:"faq",title:"FAQ",sidebar_label:"FAQ"},s={id:"faq",title:"FAQ",description:"How do I contribute ? Where can I report issues, post suggestions ?",source:"@site/docs/faq.md",permalink:"/docs/faq",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/faq.md",sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"Try ZenCrepes self-hosted",permalink:"/docs/try"},next:{title:"ZenCrepes Serverless",permalink:"/docs/serverless"}},c=[{value:"How do I contribute ? Where can I report issues, post suggestions ?",id:"how-do-i-contribute--where-can-i-report-issues-post-suggestions-",children:[]},{value:"Do I need to deploy the entire ZenCrepes stack ?",id:"do-i-need-to-deploy-the-entire-zencrepes-stack-",children:[]},{value:"Do I need to backup the data",id:"do-i-need-to-backup-the-data",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"how-do-i-contribute--where-can-i-report-issues-post-suggestions-"},"How do I contribute ? Where can I report issues, post suggestions ?"),Object(i.b)("p",null,"Simply start by submitting an issue here: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zencrepes/zencrepes/issues"}),"https://github.com/zencrepes/zencrepes/issues")),Object(i.b)("h3",{id:"do-i-need-to-deploy-the-entire-zencrepes-stack-"},"Do I need to deploy the entire ZenCrepes stack ?"),Object(i.b)("p",null,"No, if you want to trade usability for flexibility, you could simply use ZenCrepes indexer and dive in the data using Kibana."),Object(i.b)("h3",{id:"do-i-need-to-backup-the-data"},"Do I need to backup the data"),Object(i.b)("p",null,"Not really, in the even your Elasticsearch cluster looses its data, it can be re-fetched using zindexer. ZenCrepes doesn't do any magic, it just displays data fetched from GitHub/Jira/CircleCI APIs."))}p.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(a,".").concat(b)]||d[b]||l[b]||i;return r?o.a.createElement(f,s(s({ref:t},u),{},{components:r})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);