"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[38417],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),f=p(n),d=a,u=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(u,l(l({ref:e},m),{},{components:n})):r.createElement(u,l({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3190:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"Switch",sidebar_label:"Switch"},i=void 0,c={unversionedId:"components/forms/switch",id:"version-1.x/components/forms/switch",title:"Switch",description:"\u5f00\u5173\u9009\u62e9\u5668",source:"@site/versioned_docs/version-1.x/components/forms/switch.md",sourceDirName:"components/forms",slug:"/components/forms/switch",permalink:"/taro-docs/en/docs/1.x/components/forms/switch",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/components/forms/switch.md",tags:[],version:"1.x",frontMatter:{title:"Switch",sidebar_label:"Switch"},sidebar:"version-1.x/components",previous:{title:"Slider",permalink:"/taro-docs/en/docs/1.x/components/forms/slider"},next:{title:"Textarea",permalink:"/taro-docs/en/docs/1.x/components/forms/textarea"}},p={},m=[{value:"\u5f00\u5173\u9009\u62e9\u5668",id:"\u5f00\u5173\u9009\u62e9\u5668",level:5},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:6}],s={toc:m};function f(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h5",a({},{id:"\u5f00\u5173\u9009\u62e9\u5668"}),"\u5f00\u5173\u9009\u62e9\u5668"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"checked"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"false"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u662f\u5426\u9009\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"type"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"switch"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u6837\u5f0f\uff0c\u6709\u6548\u503c\uff1aswitch, checkbox")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"color"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Color"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"switch \u7684\u989c\u8272\uff0c\u540c css \u7684 color")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5404\u7aef\u652f\u6301\u5ea6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5c5e\u6027"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"ReactNative"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"checked"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"type"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"color"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714")))),(0,r.kt)("h6",a({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View, Text, Switch } from '@tarojs/components'\n\nexport default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n        <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n      </View>\n    )\n  }\n}\n")))}f.isMDXComponent=!0}}]);