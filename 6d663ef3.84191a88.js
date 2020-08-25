(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),o=(n(0),n(168)),r={id:"authentication",title:"Authentication & Authorization",sidebar_label:"Authentication"},l={id:"install/authentication",title:"Authentication & Authorization",description:"Authentication & Authorization is handled through Keycloak, which can be enabled or disabled through environment variables. Keycloak can be used to authenticate and authorize users accessing data through the API (don't expose your Elasticsearch instance !).",source:"@site/docs/install/authentication.md",permalink:"/docs/install/authentication",editUrl:"https://github.com/zencrepes/docs/tree/master/docs/docs/install/authentication.md",sidebar_label:"Authentication",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/docs/install/configuration"},next:{title:"Overview",permalink:"/docs/github/overview"}},c=[{value:"Deploy and Configure Keycloak",id:"deploy-and-configure-keycloak",children:[{value:"Create a Realm",id:"create-a-realm",children:[]},{value:"Create a Client",id:"create-a-client",children:[]},{value:"Identity Provider",id:"identity-provider",children:[]}]},{value:"Enable Keycloak on ZUI",id:"enable-keycloak-on-zui",children:[]},{value:"Enable Keycloak on ZAPI",id:"enable-keycloak-on-zapi",children:[]},{value:"Checkpoint",id:"checkpoint",children:[]},{value:"Configure Keycloak for Authorization",id:"configure-keycloak-for-authorization",children:[{value:"More about Authorization",id:"more-about-authorization",children:[]},{value:"Authorization through Group membership",id:"authorization-through-group-membership",children:[]},{value:"Authorization through email pattern",id:"authorization-through-email-pattern",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Authentication & Authorization is handled through ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.keycloak.org/"}),"Keycloak"),", which can be enabled or disabled through environment variables. Keycloak can be used to authenticate and authorize users accessing data through the API (don't expose your Elasticsearch instance !)."),Object(o.b)("p",null,"Instructions on how to get started with Keycloak are available on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.keycloak.org/getting-started/getting-started-docker"}),"their website"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Although this section of the documentation will present instructions on how to get started quickly with Keycloak, it should NOT be considered a best practice or recommended configuration. It remains your responsibilty to understand the data your are exposing, how this data should be protected and what mechanisms are being implemented to ensure rightful access. Use the below (and ZenCrepes in general), at your own risks."))),Object(o.b)("h2",{id:"deploy-and-configure-keycloak"},"Deploy and Configure Keycloak"),Object(o.b)("p",null,"Start by deploying Keycloak (in a Docker container for example)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:latest\n")),Object(o.b)("p",null,"Once done, log into the administration panel: http://localhost:8080/auth/admin"),Object(o.b)("h3",{id:"create-a-realm"},"Create a Realm"),Object(o.b)("p",null,'From there, mouse-over "Master" (the default Realm) and click on "Add realm" and give it the name ',Object(o.b)("inlineCode",{parentName:"p"},"ZenCrepes"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/keycloak-create-realm-menu.png",alt:null}))),Object(o.b)("h3",{id:"create-a-client"},"Create a Client"),Object(o.b)("p",null,"We will then create a client by clicking (within the zencrepes realm) on ",Object(o.b)("inlineCode",{parentName:"p"},"Clients")," > ",Object(o.b)("inlineCode",{parentName:"p"},"Create"),". The client will be the ZenCrepes application that will be used by users to authenticate with KeyCloak."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/keycloak-add-client.png",alt:null}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Client ID"),": Use ",Object(o.b)("inlineCode",{parentName:"li"},"zencrepes"),", this name has a different purpose than the realm, but it doesn't hurt using the same value"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Client Protocol"),": Select ",Object(o.b)("inlineCode",{parentName:"li"},"openid-connect")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Root URL"),": The URL you're using to access ZenCrepes: ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:3000")," (for the purpose of this guide).")),Object(o.b)("h3",{id:"identity-provider"},"Identity Provider"),Object(o.b)("p",null,"Although ZenCrepes would allow you to use any Identify Provider (or none if you want to rely solely on KeyCloak), using GitHub as an identity provider will allow you to enable (upcoming) features allowing bulk modifications to be performed. Such actions will be performed directly between the user's browser and GitHub, thus requiring a user authenticated with GitHub."),Object(o.b)("h4",{id:"register-a-client-in-github"},"Register a Client in GitHub"),Object(o.b)("p",null,"In GitHub, create a new OAuth App (either under an Organization's settings or under your own settings), specifying the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Application Name "),": The desired name of your application"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Hompage URL "),": The Keycloak URL of the realm, for dev we're using: ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:8080/realms/ZenCrepes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Application callback URL "),": ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:8080/auth/realms/ZenCrepes/broker/github/endpoint"))),Object(o.b)("p",null,"GitHub will automatically generate a Client ID and Client Secret, those will be necessary in the next step."),Object(o.b)("h4",{id:"create-an-identify-provider"},"Create an Identify Provider"),Object(o.b)("p",null,'In Keycloak, create a GitHub identify provider by clicking on "Identity Providers", "Add provider ..." and selecting ',Object(o.b)("inlineCode",{parentName:"p"},"GitHub"),". Enter the following settings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Client ID"),": The Client ID you just got from GitHub"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Client Secret"),": The Client Secret you just got from GitHub"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Default Scopes"),": Use the following ",Object(o.b)("inlineCode",{parentName:"li"},"user:email, read:org, repo"),", they will be needed if we want user to start batch modifying content"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Store Tokens"),": ON"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," Store Tokens Readable"),": This parameter must be turned ",Object(o.b)("inlineCode",{parentName:"li"},"ON")," to allow authenticated users to retrieve their token and make direct calls to GitHub. Note that is users connected before this setting was turned on, those users will need to be deleted from Keycloak.")),Object(o.b)("p",null,"Leave the rest by default."),Object(o.b)("h2",{id:"enable-keycloak-on-zui"},"Enable Keycloak on ZUI"),Object(o.b)("p",null,"ZenCrepes ZUI supports passing Keycloak details through environment variable, use the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_DISABLED")," : Whether Keycloak should be disabled or not, set this to false"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_AUTH_SERVER_URL "),": URL of the Keycloak server, for us: ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:8080/auth/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_AUDIENCE "),": The root URL of your application, for us: ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:3000")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_REALM "),": Your Realm, for us: ",Object(o.b)("inlineCode",{parentName:"li"},"ZenCrepes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_CLIENT_ID "),": The client ID you set-up in Keycloak, for us: ",Object(o.b)("inlineCode",{parentName:"li"},"zencrepes"))),Object(o.b)("p",null,"You can set these as environment variables in the docker image (at run or in ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yml"),") or, for developers, by modifying the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file in ZUI's root directory and restarting the UI."),Object(o.b)("p",null,"You should then see the Authentication screen after restarting (if Keycloak is disable this screen is not visible)"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/zencrepes-zui-auth-screen.png",alt:null}))),Object(o.b)("p",null,"Try logging-in with your credentials, if successful, you should see your GitHub Avatar displayed on the top-right corner of the screen, if this is the case this demonstrate that your browser was indeed capable of authenticating to GitHub directly after the Keycloak flow."),Object(o.b)("h2",{id:"enable-keycloak-on-zapi"},"Enable Keycloak on ZAPI"),Object(o.b)("p",null,"ZenCrepes ZAPI supports passing Keycloak details through environment variable, use the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_DISABLED ")," : Whether Keycloak should be disabled or not, set this to false"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_AUTH_SERVER_URL "),": URL of the Keycloak server, for us: ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:8080/auth/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_AUDIENCE "),": Leave empty (default) except if you specified it in Keycloak."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_REALM "),": Your Realm, for us: ",Object(o.b)("inlineCode",{parentName:"li"},"ZenCrepes"))),Object(o.b)("h2",{id:"checkpoint"},"Checkpoint"),Object(o.b)("p",null,"At this point, access to ZenCrepes will be protected by requiring the user to log-in with GitHub, but that doesn't really protect access to your application. We dealt with the Authentication portion, now the next step is configuring Authorization in Keycloak to control which GitHub user are authorized to log-in."),Object(o.b)("h2",{id:"configure-keycloak-for-authorization"},"Configure Keycloak for Authorization"),Object(o.b)("p",null,"From the perspective of Authorization, ZenCrepes has an all-or-nothing approach and currently don't offer any granularity in authorizing access to its dataset (users either have access to all datasets or don't have any accesses at all)."),Object(o.b)("p",null,"The Authorization layer is handled through role assignment."),Object(o.b)("h3",{id:"more-about-authorization"},"More about Authorization"),Object(o.b)("p",null,"ZenCrepes supports two modes for authorization, the first one through group membership, the second one through checking the user email."),Object(o.b)("h3",{id:"authorization-through-group-membership"},"Authorization through Group membership"),Object(o.b)("p",null,"Authentication & Authorization is handled at ZAPI level through decoding a JWT, during authentication, users assigned to a pre-defined role will automatically see their secured token populated with this extra role."),Object(o.b)("p",null,"If the role is missing from the JWT token, access to the data will be denied."),Object(o.b)("p",null,"Roles can also be mapped to user groups, which is the approach that will be documented here. A group will be created and a role will be mapped to this group. By adding users to the groups, users will inherit the role, which will then be verified by the API."),Object(o.b)("h4",{id:"create-a-group"},"Create a Group"),Object(o.b)("p",null,"The first step is to create a group of authorized ZenCrepes users."),Object(o.b)("p",null,"Go back to Keycloak admin, select your Realm (",Object(o.b)("inlineCode",{parentName:"p"},"ZenCrepes"),'), click on "Groups" in the "Manage" section. Then click on "New" to create a new group.'),Object(o.b)("p",null,"For the purpose of this guide we'll call this group ",Object(o.b)("inlineCode",{parentName:"p"},"zencrepes-users"),"."),Object(o.b)("h4",{id:"create-a-role"},"Create a Role"),Object(o.b)("p",null,"Within your Realm (",Object(o.b)("inlineCode",{parentName:"p"},"ZenCrepes"),'), click on "Roles" in the "Configure" section. Then click on "Add Role".'),Object(o.b)("p",null,"We'll call this role ",Object(o.b)("inlineCode",{parentName:"p"},"zencrepes-data"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/keycloak-create-role.png",alt:null}))),Object(o.b)("h4",{id:"attach-the-role-to-the-group"},"Attach the role to the group"),Object(o.b)("p",null,"Go back to the group you created earlier (",Object(o.b)("inlineCode",{parentName:"p"},"zencrepes-users"),'), click on "Edit", select the "Role Mappings" tab and add ',Object(o.b)("inlineCode",{parentName:"p"},"zencrepes-data"),' to the "Assigned Roles.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/keycloak-group-role-mapping.png",alt:null}))),Object(o.b)("p",null,"From that point on, any users assigned to this group will also receive the ",Object(o.b)("inlineCode",{parentName:"p"},"zencrepes-data")," role, but we didn't configure any yet (on purpose)."),Object(o.b)("h4",{id:"update-zapi-configuration"},"Update ZAPI configuration"),Object(o.b)("p",null,"Go back to ZAPI environment variables configuration and update environment variables."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"}," KEYCLOAK_ROLE ")," : The role to check for in the token, for us: ",Object(o.b)("inlineCode",{parentName:"li"},"zencrepes-data"))),Object(o.b)("p",null,"Restart the API with this new variable."),Object(o.b)("h4",{id:"verify-configuration"},"Verify configuration"),Object(o.b)("p",null,"Try logging in ZenCrepes, you'll get a denied request and will be redirected back to the login page."),Object(o.b)("h4",{id:"add-user-to-group"},"Add user to group"),Object(o.b)("p",null,"Go back to Keycloak admin, select your Realm (",Object(o.b)("inlineCode",{parentName:"p"},"ZenCrepes"),'), click on "Users" in the "Manage" section and click on "View all users".'),Object(o.b)("p",null,'Select your user, click on "Edit", go the the "Groups" tab and add the user to group ',Object(o.b)("inlineCode",{parentName:"p"},"zencrepes-users"),"."),Object(o.b)("h4",{id:"verify-configuration-1"},"Verify configuration"),Object(o.b)("p",null,"Log-out and log back in."),Object(o.b)("p",null,"Your user should now be authorized to access ZenCrepes data, for all subsequent logins you will simply have to add users to the ",Object(o.b)("inlineCode",{parentName:"p"},"zencrepes-users")," group for them to be allowed to access ZenCrepes data"),Object(o.b)("h3",{id:"authorization-through-email-pattern"},"Authorization through email pattern"),Object(o.b)("p",null,"The second mode consists in verifying the user's email address towards a pre-configured pattern."),Object(o.b)("h4",{id:"disable-account-login"},"Disable account login"),Object(o.b)("p",null,"Keycloak provides an optional UI to let users edit their profile, this includes updating their email address, which is a feature we want to make sure is disabled."),Object(o.b)("p",null,"You can verify if this feature is disabled or enabled by accessing http://localhost:8080/auth/realms/ZenCrepes/account/ after a successful authentication to ZenCrepes."),Object(o.b)("p",null,"You should see a ",Object(o.b)("inlineCode",{parentName:"p"},"Page not found")," message if the feature is disabled."),Object(o.b)("p",null,"Otherwise, connect to Keycloak administration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"select your Realm (ZenCrepes)"),Object(o.b)("li",{parentName:"ul"},"click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Clients")," section"),Object(o.b)("li",{parentName:"ul"},"select the ",Object(o.b)("inlineCode",{parentName:"li"},"account")," Client ID"),Object(o.b)("li",{parentName:"ul"},"move the ",Object(o.b)("inlineCode",{parentName:"li"},"Enabled")," cursor to ",Object(o.b)("inlineCode",{parentName:"li"},"OFF")),Object(o.b)("li",{parentName:"ul"},"save")),Object(o.b)("p",null,"You can try accessing http://localhost:8080/auth/realms/ZenCrepes/account/ again."),Object(o.b)("h4",{id:"edit-zencrepes-configuration-file"},"Edit Zencrepes configuration file."),Object(o.b)("p",null,"Open up your ",Object(o.b)("inlineCode",{parentName:"p"},"config.yml")," file and update the following section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"auth:\n  domainCheck:\n    enabled: true\n    WARNING: >-\n      If enabled, for each call received by the API, the user email will be\n      verified aginst that list of domains. User will be granted if the user\n      email includes the domain string. Do not forget to disable Account login \n      in your Realm configuration.\n    domains:\n      - '@mydomain.com'\n")),Object(o.b)("p",null,"In every call ZAPI will receive, it will check the user's email contained in the JWT token and check if the email includes part of the domains."),Object(o.b)("p",null,"For example ",Object(o.b)("inlineCode",{parentName:"p"},"joe@mydomain.com")," will be granted access. But if you were to just add ",Object(o.b)("inlineCode",{parentName:"p"},"joe")," in the domain section, it would grant access to ",Object(o.b)("inlineCode",{parentName:"p"},"joe@test.com")," but also ",Object(o.b)("inlineCode",{parentName:"p"},"alex@joedomain.com"),", so just make sure you configure those fields properly."),Object(o.b)("p",null,'You can specify multiple "domains", ZAPI will pass if it matches at least one.'),Object(o.b)("p",null,"PS: The warning message is just there for the administrator while editing the config file."),Object(o.b)("h4",{id:"restart-zapi"},"Restart ZAPI"),Object(o.b)("p",null,"ZAPI's configuration is only read at startup, so simply restart your container to read the updated configuration file."))}b.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(r,".").concat(d)]||u[d]||p[d]||o;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);