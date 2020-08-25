(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o,i=n(2),a=n(9),r=(n(0),n(168)),c={id:"try",title:"Try ZenCrepes self-hosted",sidebar_label:"Try It !"},l={id:"try",title:"Try ZenCrepes self-hosted",description:"This section of the documentation contains instructions to get started quickly using docker and docker-compose. This doesn't aim at providing instructions to install a production-grade environment, but to take the shortest path to a running ZenCrepes environment.",source:"@site/docs/try.md",permalink:"/docs/try",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/try.md",sidebar_label:"Try It !",sidebar:"someSidebar",previous:{title:"Features",permalink:"/docs/features"},next:{title:"FAQ",permalink:"/docs/faq"}},s=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"GitHub Configuration",id:"github-configuration",children:[{value:"Obtain a GitHub developer token",id:"obtain-a-github-developer-token",children:[]},{value:"Register a WebHook",id:"register-a-webhook",children:[]}]},{value:"Clone the docker repo",id:"clone-the-docker-repo",children:[]},{value:"Configure ZenCrepes",id:"configure-zencrepes",children:[]},{value:"Configure ZenCrepes",id:"configure-zencrepes-1",children:[]},{value:"Start the environment",id:"start-the-environment",children:[]},{value:"Enable repositories",id:"enable-repositories",children:[]},{value:"Fetch data",id:"fetch-data",children:[]},{value:"Important notes",id:"important-notes",children:[]},{value:"Using Keycloak",id:"using-keycloak",children:[]}],b=(o="Note",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section of the documentation contains instructions to get started quickly using ",Object(r.b)("inlineCode",{parentName:"p"},"docker")," and ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),". This doesn't aim at providing instructions to install a production-grade environment, but to take the shortest path to a running ZenCrepes environment."),Object(r.b)("p",null,"This documentation has been tested on Mac, instructions should be identical on GNU/Linux."),Object(r.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(r.b)("p",null,"The following elements are needs to follow along this page:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Docker and Docker-compose"),Object(r.b)("li",{parentName:"ul"},"A publicly reachable host (for the Webhook configuration)")),Object(r.b)("h2",{id:"github-configuration"},"GitHub Configuration"),Object(r.b)("h3",{id:"obtain-a-github-developer-token"},"Obtain a GitHub developer token"),Object(r.b)("p",null,"Log-in your profile in GitHub, and go to your settings."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/zencrepes-dev-github-settings.png",alt:null}))),Object(r.b)("p",null,"In the left-side menu, click on ",Object(r.b)("inlineCode",{parentName:"p"},"Developer settings")," at the bottom."),Object(r.b)("p",null,"Then select ",Object(r.b)("inlineCode",{parentName:"p"},"Personal access tokens")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Generate new token"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/github-dev-settings.png",alt:null}))),Object(r.b)("p",null,"Give your token a name, and select the following scopes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"repo"),Object(r.b)("li",{parentName:"ul"},"admin:org")),Object(r.b)("p",null,"Those scopes should be sufficient to get started, click on ",Object(r.b)("inlineCode",{parentName:"p"},"Generate token")," and keep this token safe (don't share it!)."),Object(r.b)("h3",{id:"register-a-webhook"},"Register a WebHook"),Object(r.b)("p",null,"The next thing is you need to to register a WebHook, it will be used to receive events on your organization (or on individual repositories)."),Object(r.b)("p",null,"Go to your organization (or repo settings) and click on ",Object(r.b)("inlineCode",{parentName:"p"},"Webhooks")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/github-org-webhook.png",alt:null}))),Object(r.b)("p",null,"Then click on ",Object(r.b)("inlineCode",{parentName:"p"},"Add Webhook"),", and enter the following settings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Payload URL"),": The zqueue host that will be listening to the events, for simplicity's sake and in the context of this guide we're going to expose port 3003, on the assumption you do not configure SSL (don't do that for production), you'd just have to enter: ",Object(r.b)("inlineCode",{parentName:"li"},"http://YOUR_DOMAIN_OR_IP:3003/github/webhook"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Content type"),": Select ",Object(r.b)("inlineCode",{parentName:"li"},"application/json"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Secret"),": Enter a secret and keep it safe, it will be used by zqueue to verify incoming events."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Which events..."),": Select the events you'd like to receive, you can select ",Object(r.b)("inlineCode",{parentName:"li"},"Send me everything")," for the purpose of getting started quickly."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Active"),": Unselect this box until the environment is running (the last step of this guide).")),Object(r.b)("h2",{id:"clone-the-docker-repo"},"Clone the docker repo"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"mkdir ~/zencrepes\ncd ~/zencrepes\ngit clone git@github.com:zencrepes/docker.git\ncd docker\nmkdir /tmp/zencrepes-data\n")),Object(r.b)("p",null,"PS: ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp/zencrepes-data")," is where the configuration file and cache data will be stored, if you whish to use a different directory, you'll need to update the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),Object(r.b)("h2",{id:"configure-zencrepes"},"Configure ZenCrepes"),Object(r.b)("p",null,"The next thing you need to do is to configure ZenCrepes, a template configuration can be obtained easily by starting either ",Object(r.b)("inlineCode",{parentName:"p"},"zindexer"),", ",Object(r.b)("inlineCode",{parentName:"p"},"zapi")," or ",Object(r.b)("inlineCode",{parentName:"p"},"zqueue"),". At startup those tools will look for a configuration file, and if they can't find any, will generate a default one and terminate themselves."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker run \\\n  -it \\\n  --name zapi \\\n  --env CONFIG_PATH=/root/zencrepes \\\n  --mount type=bind,source=/tmp/zencrepes-data,target=/root/zencrepes \\\n  zencrepes/zqueue:latest\n")),Object(r.b)("p",null,"You'll see an error message similar to the below and your container will stop."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ node dist/main.js\n[Nest] 63   - 06/08/2020, 1:56:15 AM   [NestFactory] Starting Nest application...\n[Nest] 63   - 06/08/2020, 1:56:15 AM   [ConfService] Initialized configuration file with defaults in: /root/zencrepes/config.yml +88ms\n[Nest] 63   - 06/08/2020, 1:56:15 AM   [ConfService] Please EDIT the configuration file first +0ms\nerror Command failed with exit code 1.\n")),Object(r.b)("p",null,"A default configuration file (config.yml) is now located in ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp/zencrepes-data"),"."),Object(r.b)("h2",{id:"configure-zencrepes-1"},"Configure ZenCrepes"),Object(r.b)("p",null,"Open-up ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp/zencrepes-data/config.yml"),", and modify the following elements:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yml"}),"elasticsearch:\n  host: 'http://zc_elasticsearch:9200'\nredis:\n  host: 'redis://zc_redis:6379'\ngithub:\n  username: YOUR_GITHUB_USERNAME\n  token: THE_TOKEN_YOU_GOT_AT_THE_BEGINNING_OF_THIS_DOC\n  webhook:\n    secret: THE_SECRET_CONFIGURED_IN_THE_WEBHOOK_SECTION\n")),Object(r.b)("p",null,"For the elasticsearch host, use ",Object(r.b)("inlineCode",{parentName:"p"},"http://elasticsearch:9200")," as this corresponds to the setup with docker-compose, same applies for redis. Leave all the other settings as-is."),Object(r.b)("h2",{id:"start-the-environment"},"Start the environment"),Object(r.b)("p",null,"Simply pull the latest version of all of the images and start the environment."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose pull\ndocker-compose up -d\n")),Object(r.b)("p",null,"ZenCrepes is now available at ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," but hasn't been configured yet ! At that point you should be able to access it, but the left-side menu will be mostly empty."),Object(r.b)("h2",{id:"enable-repositories"},"Enable repositories"),Object(r.b)("p",null,"To facilite discovery (and limit dependencies to external tools), zindexer (which is a CLI tool) has been dockerized, and a small (hugly?) ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/zencrepes/zindexer/blob/master/startup.sh"}),"hack")," was done to ensure this process doesn't shut down after initial execution, keeping the Docker container alive. This will allow you to interact with the command tool without needing to have node and npm running on your machine."),Object(r.b)("p",null,"The first step is to identify repositories to load data from (those are called ",Object(r.b)("inlineCode",{parentName:"p"},"sources")," in ZenCrepes)."),Object(r.b)("p",null,"Run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it zc_zindexer zindexer sources --help\n")),Object(r.b)("p",null,"This gives view a quick view at the available commands, which ultimately define what data will be fetched."),Object(r.b)(b,{type:"tip",mdxType:"Note"},"Yes, there needs to be two `zindexer` in the command above, the first one is the docker container name, while the second one is the command to run within that container."),Object(r.b)("p",null,"To get started quickly, with as much data as possible, run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it zc_zindexer zindexer sources -a -g affiliated\n")),Object(r.b)("p",null,"This will enable all repositories from all GitHub organizations affiliated with your account. But be careful, it could represent a lot of data !"),Object(r.b)("h2",{id:"fetch-data"},"Fetch data"),Object(r.b)("p",null,"ZenCrepes can fetch various different datasets from GitHub, you can get a list of the available datasets by running the following command"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it zc_zindexer zindexer github --help\n")),Object(r.b)("p",null,"You can then fetch the data of your choice (or all of it) using the commands below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it zc_zindexer zindexer github:issues\ndocker exec -it zc_zindexer zindexer github:labels\ndocker exec -it zc_zindexer zindexer github:milestones\ndocker exec -it zc_zindexer zindexer github:projects\ndocker exec -it zc_zindexer zindexer github:pullrequests\ndocker exec -it zc_zindexer zindexer github:releases\ndocker exec -it zc_zindexer zindexer github:repos\ndocker exec -it zc_zindexer zindexer github:stargazers\ndocker exec -it zc_zindexer zindexer github:vulnerabilities\ndocker exec -it zc_zindexer zindexer github:watchers\n")),Object(r.b)("p",null,"Data is fetched per repository, once a repository has been fully loaded its data becomes available in ZenCrepes. So if you are fetching a lot of data, you don't need to wait until the end to start playing with the tool."),Object(r.b)("h2",{id:"important-notes"},"Important notes"),Object(r.b)("p",null,"Authentication/Authorization is not enabled, so pay attention to where you are spinning up this environment."),Object(r.b)("p",null,"Don't run zindexer multiple times in parallel with the same token (or username for that matter). If you do that you will hit GitHub rate throttling. On top of that, it's in everyone best interest to play gently with GitHub API."),Object(r.b)("p",null,"GitHub will issue 5000 tokens per 1-hour period, which should be plenty for most discovery situations. You can monitor token consumption while ",Object(r.b)("inlineCode",{parentName:"p"},"zindexer")," is running, by watching for the following messages:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"GitHub Tokens - remaining: 3724 query cost: 1 (token will reset at: 2020-04-29T04:18:44Z)\n")),Object(r.b)("p",null,"ZenCrepes will pause data loading, until token reset, if you do consume all tokens."),Object(r.b)("p",null,"If you re-run the command later on, ",Object(r.b)("inlineCode",{parentName:"p"},"zindexer")," will only fetch newly updated PRs."),Object(r.b)("p",null,"On the long-run, ",Object(r.b)("inlineCode",{parentName:"p"},"zindexer")," will only be useful for the initial data fetching (historical data). another tool ",Object(r.b)("inlineCode",{parentName:"p"},"zqueue")," (not built yet), will take care of fetching data based on events it will receive from GitHub. ",Object(r.b)("inlineCode",{parentName:"p"},"zindexer")," is only needed to fetch data, it doesn't need to be running constantly."),Object(r.b)("p",null,"That's it, happy discovery !"),Object(r.b)("h2",{id:"using-keycloak"},"Using Keycloak"),Object(r.b)("p",null,"ZenCrepes can be configured to use Keycloak to provide an authorization layer, this is required if you want to use any of the features directly interacting with GitHub (for example bulk modifying labels)."),Object(r.b)("p",null,"To start the ZenCrepes docker environment with Keycloak enabled, simply run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose -f docker-compose-keycloak.yml up -d\n")),Object(r.b)("p",null,"And follow configuration instructions available in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.zencrepes.io/docs/install/authentication"}),"dedicated section on Authentication & Authorization"),", not running the container manually since it is provided by ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose-keycloak.yml"),"."),Object(r.b)("p",null,"Keycloak configuration is a bit peculiar as it needs to be reachable from both your webbrowser (for the redirection from GitHub) and directly from the API, through the ",Object(r.b)("inlineCode",{parentName:"p"},"KEYCLOAK_AUTH_SERVER_URL")," parameter."),Object(r.b)("p",null,"And if those two are not using the same URL, you are going to see the following error ",Object(r.b)("inlineCode",{parentName:"p"},'{"message":"jwt issuer invalid. expected: http://zc_keycloak:8080/auth/realms/ZenCrepes"}')," when trying to access the API."),Object(r.b)("p",null,"The easy solution for this is to edit your local ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/hosts")," file, to create an alias for zc_keycloak."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"##\n# Host Database\n#\n# localhost is used to configure the loopback interface\n# when the system is booting.  Do not change this entry.\n##\n127.0.0.1       localhost\n127.0.0.1       zc_keycloak\n")),Object(r.b)("p",null,"Then edit your github OAuth configuration (which you did when following the Authz configuration above), replacing ",Object(r.b)("inlineCode",{parentName:"p"},"localhost")," with ",Object(r.b)("inlineCode",{parentName:"p"},"zc_keycloak")," in both ",Object(r.b)("inlineCode",{parentName:"p"},"Homepage URL")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization callback URL"),"."),Object(r.b)("p",null,"In production, Keycloak would be hosted properly and have its own URL, which will make this configuration tweak not needed."))}u.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||a;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);