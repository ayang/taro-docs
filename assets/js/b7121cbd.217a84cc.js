"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23945],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,s=u["".concat(o,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(s,p(p({ref:e},m),{},{components:n})):a.createElement(s,p({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33514:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"Taro.getLaunchOptionsSync()",sidebar_label:"getLaunchOptionsSync"},i=void 0,o={unversionedId:"apis/base/weapp/life-cycle/getLaunchOptionsSync",id:"version-3.x/apis/base/weapp/life-cycle/getLaunchOptionsSync",title:"Taro.getLaunchOptionsSync()",description:"\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u542f\u52a8\u65f6\u7684\u53c2\u6570\u3002\u4e0e App.onLaunch \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002",source:"@site/versioned_docs/version-3.x/apis/base/weapp/life-cycle/getLaunchOptionsSync.md",sourceDirName:"apis/base/weapp/life-cycle",slug:"/apis/base/weapp/life-cycle/getLaunchOptionsSync",permalink:"/taro-docs/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/base/weapp/life-cycle/getLaunchOptionsSync.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getLaunchOptionsSync()",sidebar_label:"getLaunchOptionsSync"},sidebar:"API",previous:{title:"UpdateManager",permalink:"/taro-docs/docs/apis/base/update/UpdateManager"},next:{title:"getEnterOptionsSync",permalink:"/taro-docs/docs/apis/base/weapp/life-cycle/getEnterOptionsSync"}},d={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"LaunchOptions",id:"launchoptions",level:3},{value:"ReferrerInfo",id:"referrerinfo",level:4},{value:"ForwardMaterial",id:"forwardmaterial",level:4},{value:"ChatType",id:"chattype",level:4},{value:"ApiCategory",id:"apicategory",level:4}],c={toc:m};function u(t){var{components:e}=t,p=l(t,["components"]);return(0,a.kt)("wrapper",r({},c,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u542f\u52a8\u65f6\u7684\u53c2\u6570\u3002\u4e0e ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onlaunchobject-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"App.onLaunch"))," \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\n\u90e8\u5206\u7248\u672c\u5728\u65e0",(0,a.kt)("inlineCode",{parentName:"p"},"referrerInfo"),"\u7684\u65f6\u5019\u4f1a\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," \u8fdb\u884c\u5224\u65ad\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(21207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(58884).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(56174).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(82078).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(13555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"() => LaunchOptions\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h3",r({},{id:"launchoptions"}),"LaunchOptions"),(0,a.kt)("p",null,"\u542f\u52a8\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684 query \u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"scene"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684",(0,a.kt)("a",r({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"}),"\u573a\u666f\u503c"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"shareTicket"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"shareTicket\uff0c\u8be6\u89c1",(0,a.kt)("a",r({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html"}),"\u83b7\u53d6\u66f4\u591a\u8f6c\u53d1\u4fe1\u606f"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"referrerInfo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ReferrerInfo")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"td"},"{}"),"\u3002(\u53c2\u89c1\u540e\u6587\u6ce8\u610f)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"forwardMaterials"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ForwardMaterial[]")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6253\u5f00\u7684\u6587\u4ef6\u4fe1\u606f\u6570\u7ec4\uff0c\u53ea\u6709\u4ece\u804a\u5929\u7d20\u6750\u573a\u666f\u6253\u5f00\uff08scene\u4e3a1173\uff09\u624d\u4f1a\u643a\u5e26\u8be5\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"chatType"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof ChatType")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4ece\u5fae\u4fe1\u7fa4\u804a/\u5355\u804a\u6253\u5f00\u5c0f\u7a0b\u5e8f\u65f6\uff0cchatType \u8868\u793a\u5177\u4f53\u5fae\u4fe1\u7fa4\u804a/\u5355\u804a\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"apiCategory"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof ApiCategory")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"API \u7c7b\u522b")))),(0,a.kt)("h4",r({},{id:"referrerinfo"}),"ReferrerInfo"),(0,a.kt)("p",null,"\u6765\u6e90\u4fe1\u606f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"appId"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u7684 appId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"extraData"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u4f20\u8fc7\u6765\u7684\u6570\u636e\uff0cscene=1037\u62161038\u65f6\u652f\u6301")))),(0,a.kt)("h4",r({},{id:"forwardmaterial"}),"ForwardMaterial"),(0,a.kt)("p",null,"ChatType \u7c7b\u578b\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u7684mimetype\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u8def\u5f84\uff08\u5982\u679c\u662fwebview\u5219\u662furl\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"size"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u5927\u5c0f")))),(0,a.kt)("h4",r({},{id:"chattype"}),"ChatType"),(0,a.kt)("p",null,"ChatType \u7c7b\u578b\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5fae\u4fe1\u8054\u7cfb\u4eba\u5355\u804a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4f01\u4e1a\u5fae\u4fe1\u8054\u7cfb\u4eba\u5355\u804a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u666e\u901a\u5fae\u4fe1\u7fa4\u804a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4f01\u4e1a\u5fae\u4fe1\u4e92\u901a\u7fa4\u804a")))),(0,a.kt)("h4",r({},{id:"apicategory"}),"ApiCategory"),(0,a.kt)("p",null,"API \u7c7b\u522b\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"default"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u7c7b\u522b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"nativeFunctionalized"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u539f\u751f\u529f\u80fd\u5316\uff0c\u89c6\u9891\u53f7\u76f4\u64ad\u5546\u54c1\u3001\u5546\u54c1\u6a71\u7a97\u7b49\u573a\u666f\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"browseOnly"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4ec5\u6d4f\u89c8\uff0c\u670b\u53cb\u5708\u5feb\u7167\u9875\u7b49\u573a\u666f\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"embedded"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5185\u5d4c\uff0c\u901a\u8fc7\u6253\u5f00\u534a\u5c4f\u5c0f\u7a0b\u5e8f\u80fd\u529b\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f")))))}u.isMDXComponent=!0},56174:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},13555:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},82078:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},58884:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},21207:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);