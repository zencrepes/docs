(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o,i=n(2),r=n(9),a=(n(0),n(151)),l={id:"try",title:"Try ZenCrepes self-hosted",sidebar_label:"Try It !"},c={id:"try",title:"Try ZenCrepes self-hosted",description:"This section of the documentation contains instructions to get started quickly using docker and docker-compose. This doesn't aim at providing instructions to install a production-grade environment, but to take the shortest path to a running ZenCrepes environment.",source:"@site/docs/try.md",permalink:"/docs/try",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/try.md",sidebar_label:"Try It !",sidebar:"someSidebar",previous:{title:"What is ZenCrepes ?",permalink:"/docs/introduction"},next:{title:"ZenCrepes Serverless",permalink:"/docs/serverless"}},s=[{value:"Obtain a GitHub developer token",id:"obtain-a-github-developer-token",children:[]},{value:"Clone the repo",id:"clone-the-repo",children:[]},{value:"Configure ZenCrepes",id:"configure-zencrepes",children:[]},{value:"Enable repositories",id:"enable-repositories",children:[]},{value:"Fetch Pull Requests",id:"fetch-pull-requests",children:[]},{value:"Important notes",id:"important-notes",children:[]}],p=(o="Note",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),b={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section of the documentation contains instructions to get started quickly using ",Object(a.b)("inlineCode",{parentName:"p"},"docker")," and ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose"),". This doesn't aim at providing instructions to install a production-grade environment, but to take the shortest path to a running ZenCrepes environment."),Object(a.b)("p",null,"This documentation has been tested on Mac, instructions should be identical on GNU/Linux."),Object(a.b)("h2",{id:"obtain-a-github-developer-token"},"Obtain a GitHub developer token"),Object(a.b)("p",null,"Log-in your profile in GitHub, and go to your settings."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/zencrepes-dev-github-settings.png",alt:null}))),Object(a.b)("p",null,"In the left-side menu, click on ",Object(a.b)("inlineCode",{parentName:"p"},"Developer settings")," at the bottom."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/images/github-dev-settings.png",alt:null}))),Object(a.b)("p",null,"Then select ",Object(a.b)("inlineCode",{parentName:"p"},"Personal access tokens")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Generate new token"),"."),Object(a.b)("p",null,"Give your token a name, and select the following scopes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"repo"),Object(a.b)("li",{parentName:"ul"},"admin:org")),Object(a.b)("p",null,"Those scopes should be sufficient to get started, click on ",Object(a.b)("inlineCode",{parentName:"p"},"Generate token")," and keep this token safe (don't share it!)."),Object(a.b)("h2",{id:"clone-the-repo"},"Clone the repo"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"mkdir ~/zencrepes\ncd ~/zencrepes\ngit clone git@github.com:zencrepes/docker.git\ncd docker\nmkdir /tmp/zencrepes-data\ndocker-compose up -d\n")),Object(a.b)("p",null,"PS: ",Object(a.b)("inlineCode",{parentName:"p"},"/tmp/zencrepes-data")," is where the configuration file and cache data will be stored, if you whish to use a different directory, you'll need to update the ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),Object(a.b)("p",null,"ZenCrepes is now available at http://localhost:8080 but hasn't been configured yet ! At that point you should be able to access it, but the left-side menu will be mostly empty."),Object(a.b)("h2",{id:"configure-zencrepes"},"Configure ZenCrepes"),Object(a.b)("p",null,"Data will be fetched by ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/zencrepes/zindexer"}),"zindexer"),". During its initial startup, the tool generated a blank configuration file you will need to modify."),Object(a.b)("p",null,"Open-up ",Object(a.b)("inlineCode",{parentName:"p"},"/tmp/zencrepes-data/config.yml"),", and modify the following elements:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yml"}),"elasticsearch:\n  host: 'http://elasticsearch:9200'\ngithub:\n  username: YOUR_GITHUB_USERNAME\n  token: THE_TOKEN_YOU_GOT_AT_THE_BEGINNING_OF_THIS_DOC\n")),Object(a.b)("p",null,"For the elasticsearch host, use ",Object(a.b)("inlineCode",{parentName:"p"},"http://elasticsearch:9200")," as this corresponds to the setup with docker-compose. Leave all the other settings as-is."),Object(a.b)("h2",{id:"enable-repositories"},"Enable repositories"),Object(a.b)("p",null,"To facilite discovery (and limit dependencies to external tools), zindexer (which is a CLI tool) has been dockerized, and a small (hugly?) ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/zencrepes/zindexer/blob/master/startup.sh"}),"hack")," was done to ensure this process doesn't shut down, keeping the Docker container alive. This will allow you to interact with the command tool without needing to have node and npm running on your machine."),Object(a.b)("p",null,"The first step is to identify repositories to load data from (those are called ",Object(a.b)("inlineCode",{parentName:"p"},"sources")," in ZenCrepes)."),Object(a.b)("p",null,"Run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it zindexer zindexer sources --help\n")),Object(a.b)("p",null,"This gives view a quick view at the available commands, which ultimately define what data will be fetched."),Object(a.b)(p,{type:"tip",mdxType:"Note"},"Yes, there needs to be two `zindexer` in the command above, the first one is the docker container name, while the second one is the command to run within that container."),Object(a.b)("p",null,"To get started quickly, with as much data as possible, run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it zindexer zindexer sources -a -g affiliated\n")),Object(a.b)("p",null,"This will enable all repositories from all GitHub organizations affiliated with your account. But be careful, that could represent a lot of data !"),Object(a.b)("h2",{id:"fetch-pull-requests"},"Fetch Pull Requests"),Object(a.b)("p",null,"Although ",Object(a.b)("inlineCode",{parentName:"p"},"zindexer")," will give you access to a lot of entities (issues, projects, milestones, ...), the only datasource useful in the context of discovery are ",Object(a.b)("inlineCode",{parentName:"p"},"pull requests"),", the other ones are expected to be unstable as development on ZenCrepes continues."),Object(a.b)("p",null,"To fetch all pull requests, from all repositories, run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it zindexer zindexer github:pullrequests\n")),Object(a.b)("p",null,"Data is fetched per repository, once a repository has been fully loaded its data becomes available in ZenCrepes. So if you are fetching a lot of data, you don't need to wait until the end to start playing with the tool."),Object(a.b)("h2",{id:"important-notes"},"Important notes"),Object(a.b)("p",null,"Authentication/Authorization is not enabled, so pay attention to where you are spinning up this environment."),Object(a.b)("p",null,"Don't run zindexer multiple times in parallel. If you do that you will hit GitHub rate throttling. On top of that, it's in everyone best interest to play gently with GitHub API."),Object(a.b)("p",null,"GitHub will issue 5000 tokens per 1-hour period, which should be plenty for most discovery situations. You can monitor token consumption while ",Object(a.b)("inlineCode",{parentName:"p"},"zindexer")," is running, by watching for the following messages:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"GitHub Tokens - remaining: 3724 query cost: 1 (token will reset at: 2020-04-29T04:18:44Z)\n")),Object(a.b)("p",null,"ZenCrepes will pause data loading, until token reset, if you do consume all tokens."),Object(a.b)("p",null,"If you re-run the command later on, ",Object(a.b)("inlineCode",{parentName:"p"},"zindexer")," will only fetch newly updated PRs."),Object(a.b)("p",null,"On the long-run, ",Object(a.b)("inlineCode",{parentName:"p"},"zindexer")," will only be useful for the initial data fetching (historical data). another tool ",Object(a.b)("inlineCode",{parentName:"p"},"zqueue")," (not built yet), will take care of fetching data based on events it will receive from GitHub. ",Object(a.b)("inlineCode",{parentName:"p"},"zindexer")," is only needed to fetch data, it doesn't need to be running constantly."),Object(a.b)("p",null,"That's it, happy discovery !"))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,h=b["".concat(a,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);