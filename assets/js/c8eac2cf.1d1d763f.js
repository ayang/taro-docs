"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[80288],{79874:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=m(r),f=a,g=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(g,l(l({ref:e},s),{},{components:r})):n.createElement(g,l({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3770:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const l={title:"Taro.getSystemInfo(OBJECT)",sidebar_label:"getSystemInfo"},i=void 0,p={unversionedId:"apis/device/systeminfo/getSystemInfo",id:"version-1.x/apis/device/systeminfo/getSystemInfo",title:"Taro.getSystemInfo(OBJECT)",description:"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/systeminfo/getSystemInfo.md",sourceDirName:"apis/device/systeminfo",slug:"/apis/device/systeminfo/getSystemInfo",permalink:"/taro-docs/docs/1.x/apis/device/systeminfo/getSystemInfo",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/systeminfo/getSystemInfo.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getSystemInfo(OBJECT)",sidebar_label:"getSystemInfo"},sidebar:"version-1.x/API",previous:{title:"canIUse",permalink:"/taro-docs/docs/1.x/apis/device/systeminfo/canIUse"},next:{title:"getSystemInfoSync",permalink:"/taro-docs/docs/1.x/apis/device/systeminfo/getSystemInfoSync"}},m={},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],c={toc:s};function d(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"success"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8be6\u89c1\u8fd4\u56de\u53c2\u6570\u8bf4\u660e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"fail"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"complete"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"success \u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"brand"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u624b\u673a\u54c1\u724c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"model"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u624b\u673a\u578b\u53f7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"system"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"pixelRatio"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u8bbe\u5907\u50cf\u7d20\u6bd4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"screenWidth"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5c4f\u5e55\u5bbd\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"screenHeight"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5c4f\u5e55\u9ad8\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"windowWidth"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"windowHeight"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"version"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u7248\u672c\u53f7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"statusBarHeight"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"platform"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5ba2\u6237\u7aef\u5e73\u53f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"language"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"fontSizeSetting"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u7528\u6237\u5b57\u4f53\u5927\u5c0f\u8bbe\u7f6e\u3002\u4ee5\u201c\u6211-\u8bbe\u7f6e-\u901a\u7528-\u5b57\u4f53\u5927\u5c0f\u201d\u4e2d\u7684\u8bbe\u7f6e\u4e3a\u51c6\uff0c\u5355\u4f4d\uff1apx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"SDKVersion"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")))),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a",(0,n.kt)("strong",{parentName:"p"},"H5")," \u7aef\u4e0d\u652f\u6301 version\u3001statusBarHeight\u3001fontSizeSetting\u3001SDKVersion"),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getSystemInfo({\n  success: res => console.log(res)\n})\n  .then(res => console.log(res))\n")),(0,n.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getSystemInfo"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getSystemInfoSync"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);