(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(91)),s={id:"repositories",title:"GitHub Repositories",sidebar_label:"Repositories"},a={unversionedId:"github/repositories",id:"github/repositories",isDocsHomePage:!1,title:"GitHub Repositories",description:"Display GitHub repositories, currently only support the exploration and list tabs.",source:"@site/docs/github/repositories.md",slug:"/github/repositories",permalink:"/docs/github/repositories",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/github/repositories.md",version:"current",sidebar_label:"Repositories",sidebar:"someSidebar",previous:{title:"GitHub Issues",permalink:"/docs/github/issues"},next:{title:"GitHub Labels",permalink:"/docs/github/labels"}},c=[],l={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Display GitHub repositories, currently only support the exploration and list tabs."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{alt:"Issues View",title:"Issues view",src:"/img/zencrepes-repos-list.png",width:"640"})),Object(i.b)("p",null,"For organizations with a large number of repositories this view provides insight about repo's activity through color-coding its commits to master:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Green: The repos has 20 commits or more in the past 3 months or if it has less than 20, all of its commits in the past 3 months (for new repos)."),Object(i.b)("li",{parentName:"ul"},"Yellow: The repo only has 20 commits in 3 to 6 months"),Object(i.b)("li",{parentName:"ul"},"Red: The repo has less than 20 commits overall (and over more than 3 months), or it took more than 7 months to get to 20 commits.")),Object(i.b)("p",null,"This feature, due to its querying cost, is currently limited to 20 commits, only onto the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch."))}p.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||i;return r?o.a.createElement(d,a(a({ref:t},l),{},{components:r})):o.a.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);