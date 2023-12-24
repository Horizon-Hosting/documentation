"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[1420],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),m=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=m(a),u=n,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||l;return a?i.createElement(d,r(r({ref:t},p),{},{components:a})):i.createElement(d,r({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=a(7462),n=(a(7294),a(3905));const l={id:"tutorial_vehicle_limits",title:"How to change Cobalt Essentials' Vehicle Limit",description:"The Cobalt Essentials mod will set its own vehicle limit, separate from the main vehicle limit."},r=void 0,o={unversionedId:"game_servers/beammp/cobalt_essentials/tutorial_vehicle_limits",id:"game_servers/beammp/cobalt_essentials/tutorial_vehicle_limits",title:"How to change Cobalt Essentials' Vehicle Limit",description:"The Cobalt Essentials mod will set its own vehicle limit, separate from the main vehicle limit.",source:"@site/knowledgebase/game_servers/beammp/cobalt_essentials/tutorial_vehicle_limits.md",sourceDirName:"game_servers/beammp/cobalt_essentials",slug:"/game_servers/beammp/cobalt_essentials/tutorial_vehicle_limits",permalink:"/pl/knowledgebase/game_servers/beammp/cobalt_essentials/tutorial_vehicle_limits",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/beammp/cobalt_essentials/tutorial_vehicle_limits.md",tags:[],version:"current",frontMatter:{id:"tutorial_vehicle_limits",title:"How to change Cobalt Essentials' Vehicle Limit",description:"The Cobalt Essentials mod will set its own vehicle limit, separate from the main vehicle limit."},sidebar:"tutorialSidebar",previous:{title:"Instalacja Cobalt Essentials",permalink:"/pl/knowledgebase/game_servers/beammp/cobalt_essentials/cobalt_essentials_installation"},next:{title:"Konfiguracja serwera",permalink:"/pl/knowledgebase/game_servers/beammp/beammp_server_setup"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Steps",id:"steps",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Cobalt Essentials is a powerful moderation tool for BeamMP. Cobalt Essentials defines its own vehicles limits, which can be dynamic for different players, depending on permission level. However, this is not clear when installing Cobalt Essentials. This guide details how to change this limit, so you can have as many cars as you want."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the File Manager",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/1Gamepanel%20File%20Manager.png",alt:"Gamepanel File Manager"})))),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Resources -> Server -> CobaltEssentials -> CobaltDB")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/2Gamepanel%20File%20Manager%20CobaltDB%20Folder.png",alt:"Gamepanel File Manager CobaltDB Folder"})))),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"permissions.json")," to open the file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/3Gamepanel%20FIle%20Manager%20with%20permissions.json%20highlighted.png",alt:"Gamepanel FIle Manager with permissions.json highlighted"}))))),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON")," formatting in this file is important. Please try to keep the formatting as it is where possible, otherwise it might break the server.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Under the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"vehicleCap"))," section, the number of vehicles each permission level can spawn is defined.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For example, with the default configuration, a user with a level of 1, can only spawn one vehicle. A level of 1 is the default for a normal player."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/4Gamepanel%20file%20editor%20for%20permissions.json,%20with%20default%20values%20set.png",alt:"Gamepanel file editor for permissions.json, with default values set"})))),(0,n.kt)("li",{parentName:"ol"},"Set the levels to how you wish. The below config allows any player to spawn 10 vehicles",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/5Gamepanel%20file%20editor%20for%20permissions.json,%20with%20updated%20values.png",alt:"Gamepanel file editor for permissions.json, with updated values"}))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If the MaxCars value on the ",(0,n.kt)("em",{parentName:"p"},"server")," (set in Startup) is lower, than it will be limited to that value.")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Save Content"))," to save the file, then return to the ",(0,n.kt)("strong",{parentName:"li"},"Console")," section",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/6Gamepanel%20file%20editor%20for%20permissions.json,%20with%20Save%20Content%20and%20Console%20buttons%20highlighted.png",alt:"Gamepanel file editor for permissions.json, with Save Content and Console buttons highlighted"})))),(0,n.kt)("li",{parentName:"ol"},"Restart the server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/7Gamepanel%20Console%20page,%20with%20Restart%20button%20highlighted.png",alt:"Gamepanel Console page, with Restart button highlighted"}))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Done!")," You have now adjusted Cobalt Essentials' vehicle limit."))}c.isMDXComponent=!0}}]);