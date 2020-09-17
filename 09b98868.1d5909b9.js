(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{55:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return c}));var r=i(2),n=i(6),a=(i(0),i(92)),o={id:"import",title:"Import Issues",sidebar_label:"Import Issues"},s={unversionedId:"github/import",id:"github/import",isDocsHomePage:!1,title:"Import Issues",description:"d be redirected to that gist.",source:"@site/docs/github/import.md",slug:"/github/import",permalink:"/docs/github/import",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/github/import.md",version:"current",sidebar_label:"Import Issues",sidebar:"someSidebar",previous:{title:"GitHub Watchers & Stargazers",permalink:"/docs/github/watchers"},next:{title:"CircleCI Environment Variables",permalink:"/docs/circleci/envvars"}},l=[{value:"Before starting",id:"before-starting",children:[{value:"Recommended setup",id:"recommended-setup",children:[]}]},{value:"Overview",id:"overview",children:[]},{value:"Configure ZenCrepes",id:"configure-zencrepes",children:[]},{value:"Import Data from Jira",id:"import-data-from-jira",children:[]},{value:"Prepare data for GitHub import",id:"prepare-data-for-github-import",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"Run",id:"run",children:[]},{value:"Health-check",id:"health-check",children:[]},{value:"Import Data in GitHub",id:"import-data-in-github",children:[]}],u={rightToc:l};function c(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Github offers an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/jonmagic/5282384165e0f86ef105"}),'"slightly-unofficial" API')," to bulk import a large number of issues without triggering all sort of notifications you would get by using the regular issues management endpoints (or GraphQL mutations). I'm referring to it as \"slightly-unofficial\" since you can't find any documentation other than a gist, but if contacting GitHub support, you'd be redirected to that gist."),Object(a.b)("p",null,"In the context of ZenCrepes an API importer was implemented to support bulk importing of a fairly large number of issues (the dataset used for final testing had slightly over 40,000 issues). The primary use case here is exporting issues data from Jira and importing those into GitHub."),Object(a.b)("h2",{id:"before-starting"},"Before starting"),Object(a.b)("p",null,"There are a couple of things to consider before getting started:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Labels"),' must be unique (case insensitive), for example, GitHub will reject an issue with a label "Bug" if the repository already contains a label called "bug". Zindexer includes a feature to map labels on the fly just prior to submission (for example convert ',Object(a.b)("inlineCode",{parentName:"li"},"Documentation")," to ",Object(a.b)("inlineCode",{parentName:"li"},"documentation"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Assignees")," must exist, you can't assign an issue to someone not having access to the repository."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Reporters")," can't be set, the username used as a reporter is the one attach to the user. This is true for issue body but also issue comments (which can then be slightly annoying)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Created, Updated, Closed dates")," can be set, so if your issue was closed in 2015, it will still show as closed in 2015 in GitHub."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"No duplicate Jira keys"),", zindexer assumes that issue keys are unique (DOC-1234), you will not be able to import data from different remove Jira server into the same repository if they share the same keys."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Checking import status")," when dealing with a very large number of issues is going to be problematic")),Object(a.b)("h3",{id:"recommended-setup"},"Recommended setup"),Object(a.b)("p",null,"For this import you will need zindexer and a running Elasticsearch instance (+ Kibana to look at the data), it would be recommended to use a dedicated instance (and separate GitHub token) for those and not try to use any already running version of ZenCrepes you might have. The import remains a manual operation, you're probably best running this from your workstation (or dedicated cloud instance)."),Object(a.b)("p",null,"You should also do a dry run first, by creating a test repository and importing your issues there."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"The whole export & import process is divided in five sequential phases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Configure your Jira connection and ZenCrepes sources"),Object(a.b)("li",{parentName:"ul"},"Import data from Jira"),Object(a.b)("li",{parentName:"ul"},"Prepare data for GitHub import"),Object(a.b)("li",{parentName:"ul"},"Import data in GitHub"),Object(a.b)("li",{parentName:"ul"},"Update issue links")),Object(a.b)("h2",{id:"configure-zencrepes"},"Configure ZenCrepes"),Object(a.b)("p",null,"Please refer to the section of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/install/configuration"}),"documentation refering to installation"),", configuration is the exact same."),Object(a.b)("h2",{id:"import-data-from-jira"},"Import Data from Jira"),Object(a.b)("p",null,"First start by importing all of the issues from Jira, this is the exact same action than when using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/jira/issues"}),"Jira issues directly in ZenCrepes"),"."),Object(a.b)("p",null,"You can do that by running:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"zindexer jira:issues\n")),Object(a.b)("h2",{id:"prepare-data-for-github-import"},"Prepare data for GitHub import"),Object(a.b)("p",null,"This next stage will go through all of the Jira issues and prepare their payload for GitHub import. During this stage, most Jira fields will be converted to GitHub labels, and headers will be added in the issue body and issue comments."),Object(a.b)("p",null,"The header in the issue body looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Imported from Jira, on Sun Jun 21, 2020\nIssue: DOC-1234 in project: Documentation\nReporter: @jondoe (Jon Doe)\nAssignee: None found in Jira, making reporter the assignee in GitHub\nCreated: Thu Jun 18, 2020, last updated: Thu Jun 18, 2020\nStatus: Open\nIssues in Epic:\n - [ ] DOC-456 - A sample ticket (Bug, Open)\n - [x] DOC-457 - Another sample ticket (Story, Closed)\n")),Object(a.b)("p",null,"It contains a link (DOC-1234) to the original Jira server, may you want to keep the server around in read-only for some time."),Object(a.b)("p",null,"The header will also contain list of subtasks, children issues, links... with checkboxes corresponding to these issues states. Initially these will include links back to Jira, but those will be modified later on."),Object(a.b)("p",null,"The header in the issue comments looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Imported from Jira, on Sun Jun 21, 2020\nComment by: @jondoe (Jon Doe) on Fri Jan 31, 2020 edited\n")),Object(a.b)("h3",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The importer is using a dedicated configuration file, the first time you'll run it, it will generate a default configuration for you to modify. There are a couple of things you'll need to do in this file:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Match your Jira users to GitHub nickhandles. This is done through Jira's ",Object(a.b)("inlineCode",{parentName:"li"},"emailAddress")," field for reporters, authors, assignees. Zindexer will generate a list of all the users it finds, you will simply have to copy this list into your configuration file and update GitHub usernames"),Object(a.b)("li",{parentName:"ul"},'Configure the repositories. You will need to tell Zindexer into which GitHub repositories the various Jira projects have to be imported. You could use the configuration file to push some of the "older" issues to an archive repository based on either ',Object(a.b)("inlineCode",{parentName:"li"},"createdAt"),", ",Object(a.b)("inlineCode",{parentName:"li"},"updatedAt")," or ",Object(a.b)("inlineCode",{parentName:"li"},"closedAt"),".")),Object(a.b)("p",null,"The file also contains parameters that will be needed later in the process:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can configure an on-the-fly label rename"),Object(a.b)("li",{parentName:"ul"},"You need to specify the link to individual Jira tickets (without the issue key), it would usually looks like this: ",Object(a.b)("inlineCode",{parentName:"li"},"https://jira.mydomain.com/browse/"),". This will be needed for the last part of the import when replacing Jira links to GitHub links")),Object(a.b)("h2",{id:"run"},"Run"),Object(a.b)("p",null,"Once your configuration is setup, you can simply run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"zindexer jira:ghexport\n")),Object(a.b)("p",null,"Note that if at any point in time you would like to start again with the import, you can do this easily by deleting the Elasticsearch index (by default ",Object(a.b)("inlineCode",{parentName:"p"},"gh_import"),")."),Object(a.b)("h2",{id:"health-check"},"Health-check"),Object(a.b)("p",null,"At that stage, it's a good idea to take a look at the data in the import index, just to ensure it all looks good."),Object(a.b)("h2",{id:"import-data-in-github"},"Import Data in GitHub"),Object(a.b)("p",null,"The previous step staged data for import in GitHub, it could actually be used to import data from other sources than Jira. Usage it's pretty straight-forward:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"zindexer github:import\n")))}c.isMDXComponent=!0},92:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return m}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=n.a.createContext({}),c=function(e){var t=n.a.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},b=function(e){var t=c(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(i),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return i?n.a.createElement(m,s(s({ref:t},u),{},{components:i})):n.a.createElement(m,s({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=i[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);