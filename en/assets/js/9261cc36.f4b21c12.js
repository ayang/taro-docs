"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44298],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(93106);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:e},p),{},{components:n})):r.createElement(f,l({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18291:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const l={title:"OfficialAccount",sidebar_label:"OfficialAccount"},i=void 0,c={unversionedId:"components/open/official-account",id:"components/open/official-account",title:"OfficialAccount",description:"The Official Account following component. You can add this component to a Mini Program, to help a user conveniently follow an Official Account after the user opens the Mini Program by scanning the Mini Program code. This component can be nested into a native component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/open/official-account.md",sourceDirName:"components/open",slug:"/components/open/official-account",permalink:"/taro-docs/en/docs/next/components/open/official-account",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/open/official-account.md",tags:[],version:"current",frontMatter:{title:"OfficialAccount",sidebar_label:"OfficialAccount"},sidebar:"components",previous:{title:"AdCustom",permalink:"/taro-docs/en/docs/next/components/open/ad-custom"},next:{title:"OpenData",permalink:"/taro-docs/en/docs/next/components/open/open-data"}},u={},p=[{value:"Type",id:"type",level:2},{value:"OfficialAccountProps",id:"officialaccountprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"detail",id:"detail",level:3},{value:"status",id:"status",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:p};function d(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Official Account following component. You can add this component to a Mini Program, to help a user conveniently follow an Official Account after the user opens the ",(0,r.kt)("strong",{parentName:"p"},"Mini Program")," by scanning the Mini Program code. This component can be nested into a native component."),(0,r.kt)("p",null,"Tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before using this component, you need to go to Mini Program Console, and choose ",(0,r.kt)("strong",{parentName:"p"},"Settings > API Settings > Official Account Following Component")," to set the Official Account to be displayed. ",(0,r.kt)("strong",{parentName:"p"},"Note: The Official Account and the Mini Program must belong to the same entity."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"During the lifecycle of a Mini Program, the capability of displaying the Official Account following component is available only when the Mini Program is opened in any of the following scenarios:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Mini Program is opened by scanning the Mini Program code (scene value 1047).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the Mini Program is opened from ",(0,r.kt)("strong",{parentName:"p"},"Recently Used")," at the top of the Chats screen (scene value 1089), if the Mini Program is not destroyed, the component remains in the same state as that when the Mini Program was last opened.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When returning to the Mini Program from another Mini Program (scene value 1038), if the Mini Program is not destroyed, the component remains in the same state as when the Mini Program was opened last time."))),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The minimum width of the component is limited to 300 px and the height is fixed at 84 px.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Each page can include only one Official Account following component."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/official-account.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<OfficialAccountProps>\n")),(0,r.kt)("h2",o({},{id:"officialaccountprops"}),"OfficialAccountProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"onLoad"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<detail>")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the component is loaded successfully.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onError"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<detail>")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the component fails to be loaded.")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OfficialAccountProps.onLoad"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OfficialAccountProps.onError"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"detail"}),"detail"),(0,r.kt)("p",null,"detail object"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"status"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Status code")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Error message")))),(0,r.kt)("h3",o({},{id:"status"}),"status"),(0,r.kt)("p",null,"Valid values of status"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"-2"),(0,r.kt)("td",null,"Network error")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"-1"),(0,r.kt)("td",null,"Data parsing error")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"Loading succeeded")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"The Official Account following feature in the Mini Program is suspended")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"Linked Official Account is suspended")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"The Official Account is unlinked or not selected")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"The Official Account following feature is disabled")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"Scene value error")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"Repeated creation")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OfficialAccount"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);