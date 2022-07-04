"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[22363],{79874:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return u}});var a=r(93106);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),c=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=c(r),u=n,b=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return r?a.createElement(b,o(o({ref:e},d),{},{components:r})):a.createElement(b,o({ref:e},d))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75670:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},n.apply(this,arguments)}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const o={title:"Taro.setClipboardData(OBJECT)",sidebar_label:"setClipBoardData"},p=void 0,l={unversionedId:"apis/device/clipboard/setClipboardData",id:"version-1.x/apis/device/clipboard/setClipboardData",title:"Taro.setClipboardData(OBJECT)",description:"\u8bbe\u7f6e\u7cfb\u7edf\u526a\u8d34\u677f\u7684\u5185\u5bb9\u3002",source:"@site/versioned_docs/version-1.x/apis/device/clipboard/setClipboardData.md",sourceDirName:"apis/device/clipboard",slug:"/apis/device/clipboard/setClipboardData",permalink:"/taro-docs/en/docs/1.x/apis/device/clipboard/setClipboardData",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/clipboard/setClipboardData.md",tags:[],version:"1.x",frontMatter:{title:"Taro.setClipboardData(OBJECT)",sidebar_label:"setClipBoardData"},sidebar:"version-1.x/API",previous:{title:"getClipBoardData",permalink:"/taro-docs/en/docs/1.x/apis/device/clipboard/getClipboardData"},next:{title:"onCompassChange",permalink:"/taro-docs/en/docs/1.x/apis/device/compass/onCompassChange"}},c={},d=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"object param",id:"object-param",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],s={toc:d};function m(t){var{components:e}=t,r=i(t,["components"]);return(0,a.kt)("wrapper",n({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8bbe\u7f6e\u7cfb\u7edf\u526a\u8d34\u677f\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.setClipboardData.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"wx.setClipboardData")),"\uff0c\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,a.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h3",n({},{id:"object-param"}),"object param"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5c5e\u6027"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u7c7b\u578b"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"data"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u526a\u8d34\u677f\u7684\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"success"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"function"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"fail"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"function"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"complete"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"function"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,a.kt)("h2",n({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.setClipBoardData(params).then(...)\n")),(0,a.kt)("h2",n({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Taro.setClipBoardData"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u90e8\u5206\u5b9e\u73b0)"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);