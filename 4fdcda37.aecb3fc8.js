(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return a})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return u}));var n=i(2),r=i(6),s=(i(0),i(92)),o={id:"issues",title:"GitHub Issues",sidebar_label:"Issues"},a={unversionedId:"github/issues",id:"github/issues",isDocsHomePage:!1,title:"GitHub Issues",description:"Explore",source:"@site/docs/github/issues.md",slug:"/github/issues",permalink:"/docs/github/issues",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/github/issues.md",version:"current",sidebar_label:"Issues",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/github/overview"},next:{title:"GitHub Repositories",permalink:"/docs/github/repositories"}},l=[{value:"Explore",id:"explore",children:[]},{value:"Analyze",id:"analyze",children:[]},{value:"Deliver",id:"deliver",children:[{value:"Displaying open issues (remaining)",id:"displaying-open-issues-remaining",children:[]}]},{value:"Network",id:"network",children:[{value:"Shortest path",id:"shortest-path",children:[]}]},{value:"List",id:"list",children:[]}],c={rightToc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"explore"},"Explore"),Object(s.b)("p",null,'The objective of this tab is to be able to quickly identify patterns and potential things to address. It provides quick metrics to answers questions such as "Is everything alright ? ".'),Object(s.b)("p",{align:"center"},Object(s.b)("img",{alt:"Issues View",title:"Issues view",src:"/img/zencrepes-github-issues.png",width:"640"})),Object(s.b)("h2",{id:"analyze"},"Analyze"),Object(s.b)("p",null,"In this tab, users can get a sense of the effort put by a team, over time, across different metrics."),Object(s.b)("p",{align:"center"},Object(s.b)("img",{alt:"Issues View",title:"Issues view",src:"/img/zencrepes-github-issues-focus.png",width:"640"})),Object(s.b)("p",null,"Data about closed issues is aggregated by week over the following fields:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Organization"),Object(s.b)("li",{parentName:"ul"},"Repository"),Object(s.b)("li",{parentName:"ul"},"Author"),Object(s.b)("li",{parentName:"ul"},"Assignee"),Object(s.b)("li",{parentName:"ul"},"Label"),Object(s.b)("li",{parentName:"ul"},"Milestone"),Object(s.b)("li",{parentName:"ul"},"Project")),Object(s.b)("p",null,'You can answer questions such as "What are the most active repositories?", "Are we consistenty addressing defects?", ...'),Object(s.b)("h2",{id:"deliver"},"Deliver"),Object(s.b)("p",null,"The deliver tab is focused on short-term deliveries to track completion towards a defined goal (completion of a milestone, completion of a project, completion of a sprint)."),Object(s.b)("p",{align:"center"},Object(s.b)("img",{alt:"Issues View",title:"Issues view",src:"/img/zencrepes-github-issues-deliver.png",width:"640"})),Object(s.b)("p",null,"Note that this screen supports a second level of independent filters to further restrict the dataset based on Milestone, Project or Sprint."),Object(s.b)("h3",{id:"displaying-open-issues-remaining"},"Displaying open issues (remaining)"),Object(s.b)("p",null,"The remaining widget display the number of OPEN issues (or OPEN points depending of the selection), by various aggregations (Repositories, Assigness, Project, Author, ...), but it also break labels by their prefixes (any label containing ",Object(s.b)("inlineCode",{parentName:"p"},":"),")."),Object(s.b)("p",null,"For example, you can get the remaining issues by priority, by sprint..."),Object(s.b)("p",{align:"center"},Object(s.b)("img",{alt:"Issues View",title:"Issues view",src:"/img/zencrepes-github-issues-deliver-remaining.png",width:"480"})),Object(s.b)("h2",{id:"network"},"Network"),Object(s.b)("p",null,"The network view displays a graph of the issues and PR corresponding to the current query."),Object(s.b)("p",{align:"center"},Object(s.b)("img",{alt:"Issues View",title:"Issues view",src:"/img/zencrepes-github-issues-network.png",width:"640"})),Object(s.b)("p",null,"The default view is limited to 100 root nodes, and from there, ZenCrepes will walk down the tree to fetch all of the possible links (between issues, to PRs, ...), which can result in a pretty large amount of data nodes."),Object(s.b)("p",null,"Clicking on a node will allow you to use that particular node as a root node, but also to build a path."),Object(s.b)("h3",{id:"shortest-path"},"Shortest path"),Object(s.b)("p",null,"You might wonder how issue A and issue B relate to eachother although they're completely different ?"),Object(s.b)("p",null,"ZenCrepes (thanks to Cytoscapes.js) allows you to visualize the shortest path between two nodes."),Object(s.b)("p",{align:"center"},Object(s.b)("img",{alt:"Issues View",title:"Issues view",src:"/img/zencrepes-github-issues-network-path.png",width:"640"})),Object(s.b)("p",null,"You can then hover over the nodes in the path to discover more."),Object(s.b)("h2",{id:"list"},"List"),Object(s.b)("p",null,"The list view is just a table view showing all items in the current query."))}u.isMDXComponent=!0},92:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return h}));var n=i(0),r=i.n(n);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(i),d=n,h=b["".concat(o,".").concat(d)]||b[d]||p[d]||s;return i?r.a.createElement(h,a(a({ref:t},c),{},{components:i})):r.a.createElement(h,a({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var c=2;c<s;c++)o[c]=i[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);