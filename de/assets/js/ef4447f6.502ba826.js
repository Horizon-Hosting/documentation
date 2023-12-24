"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[6475],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),g=i,d=m["".concat(u,".").concat(g)]||m[g]||p[g]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={id:"tutorial_changing_port",title:"\xc4ndern des Ports auf einem Horizon Gameserver",description:"Willst du den Port auf deinem Server \xe4ndern?"},o=void 0,l={unversionedId:"game_servers/tutorial_changing_port",id:"game_servers/tutorial_changing_port",title:"\xc4ndern des Ports auf einem Horizon Gameserver",description:"Willst du den Port auf deinem Server \xe4ndern?",source:"@site/i18n/de/docusaurus-plugin-content-docs-knowledgebase/current/game_servers/tutorial_changing_port.md",sourceDirName:"game_servers",slug:"/game_servers/tutorial_changing_port",permalink:"/de/knowledgebase/game_servers/tutorial_changing_port",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/tutorial_changing_port.md",tags:[],version:"current",frontMatter:{id:"tutorial_changing_port",title:"\xc4ndern des Ports auf einem Horizon Gameserver",description:"Willst du den Port auf deinem Server \xe4ndern?"},sidebar:"tutorialSidebar",previous:{title:"Einrichten einer Minecraft-Subdomain",permalink:"/de/knowledgebase/game_servers/minecraft/setting_up_minecraft_subdomain"},next:{title:"Installation und Verwendung von FileZilla FTP Client",permalink:"/de/knowledgebase/game_servers/tutorial_filezilla_sftp"}},u={},s=[{value:"Einleitung",id:"einleitung",level:2},{value:"Anleitung",id:"anleitung",level:2}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"einleitung"},"Einleitung"),(0,i.kt)("p",null,"Diese Anleitung beschreibt, wie man einen neuen, zuf\xe4llig zugewiesenen Port f\xfcr seinen Gameserver erh\xe4lt. Dies kann n\xfctzlich sein, wenn jemand, den du nicht willst, die IP/Port kennt, und du deinen Server privat halten willst."),(0,i.kt)("h2",{id:"anleitung"},"Anleitung"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigieren Sie zu Ihrem Server auf dem Panel",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png",alt:"Gamepanel Server Seite"})))),(0,i.kt)("li",{parentName:"ol"},"Navigieren Sie zu Netzwerk, und erstellen Sie eine neue Zuordnung",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Creating%20Allocation.png",alt:"Gamepanel Netzwerkseite"})))),(0,i.kt)("li",{parentName:"ol"},"Setzen Sie die neue Zuweisung als prim\xe4r",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Making%20Allocation%20Primary.png",alt:"Gamepanel Netzwerkseite"})))),(0,i.kt)("li",{parentName:"ol"},"L\xf6schen Sie die alte Zuordnung",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Deleting%20Allocation.png",alt:"Gamepanel Netzwerkseite"})))),(0,i.kt)("li",{parentName:"ol"},"Best\xe4tigen Sie die L\xf6schung",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Removing%20Allocation.png",alt:"Modal Zuweisung entfernen"})))),(0,i.kt)("li",{parentName:"ol"},"Erledigt! Die neue IP kann auf der Konsolenseite eingesehen werden",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/New%20IP.png",alt:"Gamepanel Konsolenseite"}))))))}p.isMDXComponent=!0}}]);