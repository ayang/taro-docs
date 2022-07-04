"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[25835],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47427:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.getFileSystemManager()",sidebar_label:"getFileSystemManager"},c=void 0,s={unversionedId:"apis/files/getFileSystemManager",id:"apis/files/getFileSystemManager",title:"Taro.getFileSystemManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u6587\u4ef6\u7ba1\u7406\u5668",source:"@site/docs/apis/files/getFileSystemManager.md",sourceDirName:"apis/files",slug:"/apis/files/getFileSystemManager",permalink:"/taro-docs/docs/next/apis/files/getFileSystemManager",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/files/getFileSystemManager.md",tags:[],version:"current",frontMatter:{title:"Taro.getFileSystemManager()",sidebar_label:"getFileSystemManager"},sidebar:"API",previous:{title:"getSavedFileInfo",permalink:"/taro-docs/docs/next/apis/files/getSavedFileInfo"},next:{title:"getFileInfo",permalink:"/taro-docs/docs/next/apis/files/getFileInfo"}},l={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2}],f={toc:p};function u(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u6587\u4ef6\u7ba1\u7406\u5668"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(21207).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:r(58884).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(56174).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(82078).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(13555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileSystemManager.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => FileSystemManager\n")))}u.isMDXComponent=!0},56174:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},13555:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},82078:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},58884:function(e,t,r){t.Z=r.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},21207:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);