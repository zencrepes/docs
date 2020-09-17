(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(2),r=n(6),a=(n(0),n(92)),s={id:"overview",title:"Overview",sidebar_label:"Overview"},o={unversionedId:"github/overview",id:"github/overview",isDocsHomePage:!1,title:"Overview",description:'GitHub is the primary data source used for ZenCrepes, data is fetched through GitHub GraphQL API and stored mostly "as-is" in the elasticsearch cluster.',source:"@site/docs/github/overview.md",slug:"/github/overview",permalink:"/docs/github/overview",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/github/overview.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Querying",permalink:"/docs/use/querying"},next:{title:"GitHub Issues",permalink:"/docs/github/issues"}},l=[{value:"Data updates",id:"data-updates",children:[]},{value:"Business logic (use of labels)",id:"business-logic-use-of-labels",children:[{value:"Story Points",id:"story-points",children:[]},{value:"Define Sprints",id:"define-sprints",children:[]},{value:"Define teams",id:"define-teams",children:[]},{value:"Categorize Labels",id:"categorize-labels",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'GitHub is the primary data source used for ZenCrepes, data is fetched through GitHub GraphQL API and stored mostly "as-is" in the elasticsearch cluster.'),Object(a.b)("h2",{id:"data-updates"},"Data updates"),Object(a.b)("p",null,"Enabling Keycloak authentication in ZenCrepes (see the Install section) also makes possible to modify data in GitHub."),Object(a.b)("p",null,"Although ZenCrepes provides a \"view\" over a large dataset for all of its authorized users, the actual bulk data modifications (transfer issues, create labels, ...) are done by direct communications between the user's browser and GitHub. All edit capabilities are subject to the user's authorization level defined in GitHub."),Object(a.b)("p",null,"In short, ZenCrepes central components (ZAPI, ZQUEUE, ZINDEXER) don't perform any modifications, and tokens used by zindexer for data fetching are never exposed to the user."),Object(a.b)("h2",{id:"business-logic-use-of-labels"},"Business logic (use of labels)"),Object(a.b)("p",null,"ZenCrepes will process some labels in a particular fashion, mostly when dealing with Issues, in order to collect the metadata it needs for certain views (for example Story points)."),Object(a.b)("h3",{id:"story-points"},"Story Points"),Object(a.b)("p",null,"Story points assigned to an issue while the issue is being ingested by ZenCrepes, either from zindexer or whenever an update to an issue triggers a webhook event."),Object(a.b)("p",null,"Story points can be added by:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Attaching to an issue a label prefixed with ",Object(a.b)("inlineCode",{parentName:"li"},"SP:")," and the numerical number of points (for example: SP:1, SP:2, SP:3, ...)"),Object(a.b)("li",{parentName:"ul"},"Attaching to an issue a label with a description prefixed with ",Object(a.b)("inlineCode",{parentName:"li"},"SP:")," and the numerical number of points (for example: SP:1, SP:2, SP:3, ...), the actual name of the issue can be anything"),Object(a.b)("li",{parentName:"ul"},"By statically defining, in ZenCrepes configuration file, an array of labels with their corresponding points.")),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yml"}),"storyPointsLabels:\n  - label: xx-small\n    points: 1\n  - label: x-small\n    points: 2\n  - label: small\n    points: 3\n  - label: medium\n    points: 5\n  - label: large\n    points: 8\n  - label: x-large\n    points: 13\n")),Object(a.b)("p",null,"The logic for issue indexing is stored here: ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/zencrepes/zindexer/blob/master/src/components/githubIssues/ingestNodes.ts"}),"https://github.com/zencrepes/zindexer/blob/master/src/components/githubIssues/ingestNodes.ts")),Object(a.b)("h3",{id:"define-sprints"},"Define Sprints"),Object(a.b)("p",null,"Sprints are used in the Issue ",Object(a.b)("inlineCode",{parentName:"p"},"Deliver")," view to filter down the dataset. Sprints are labels prefixed with ",Object(a.b)("inlineCode",{parentName:"p"},"sprint:")," (for example: sprint:1, sprint:2, ...)."),Object(a.b)("h3",{id:"define-teams"},"Define teams"),Object(a.b)("p",null,"ZenCrepes provides some naive forecasting by simply dividing the number of open issues (or open points) by the team velocity, but identifying how this velocity should be calculated can sometime be complex."),Object(a.b)("p",null,"For that purpose, a ",Object(a.b)("inlineCode",{parentName:"p"},"team")," label can be attached to particular issues. Users can then select an containing that label, and ZenCrepes will fetch all assignees to that issue, and calculate their aggregated velocity."),Object(a.b)("h3",{id:"categorize-labels"},"Categorize Labels"),Object(a.b)("p",null,"ZenCrepes will understand that some labels fall into the same category by looking for labels containing a ",Object(a.b)("inlineCode",{parentName:"p"},":"),"."),Object(a.b)("p",null,"For example: ",Object(a.b)("inlineCode",{parentName:"p"},"Priority:high"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Priority:medium"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Priority:low")," will be handled as a group of labels, and some views will be adjusted based on this logic. This allow ZenCrepes to display the number of remaining points per priority level."))}b.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);