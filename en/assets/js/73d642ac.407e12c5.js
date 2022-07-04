"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18378],{79874:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(93106);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79907:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});t(93106);var r=t(79874);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={title:"Vue3 Pinia"},p=void 0,l={unversionedId:"pinia",id:"version-3.x/pinia",title:"Vue3 Pinia",description:"Taro Vue3 \u652f\u6301\u4f7f\u7528 Pinia \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u3002",source:"@site/versioned_docs/version-3.x/pinia.md",sourceDirName:".",slug:"/pinia",permalink:"/taro-docs/en/docs/pinia",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/pinia.md",tags:[],version:"3.x",frontMatter:{title:"Vue3 Pinia"},sidebar:"docs",previous:{title:"Vue2 Vuex",permalink:"/taro-docs/en/docs/vuex"},next:{title:"Use CSS Modules",permalink:"/taro-docs/en/docs/css-modules"}},s={},c=[{value:"\u5b89\u88c5 &amp; \u914d\u7f6e Taro \u63d2\u4ef6",id:"\u5b89\u88c5--\u914d\u7f6e-taro-\u63d2\u4ef6",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u521b\u5efa Pinia \u5b9e\u4f8b",id:"\u521b\u5efa-pinia-\u5b9e\u4f8b",level:3},{value:"\u521b\u5efa <code>store</code>",id:"\u521b\u5efa-store",level:3},{value:"\u4f7f\u7528 store \u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5",id:"\u4f7f\u7528-store-\u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5",level:3}],u={toc:c};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",i({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro Vue3 \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://pinia.vuejs.org/"}),"Pinia")," \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u3002"),(0,r.kt)("h2",i({},{id:"\u5b89\u88c5--\u914d\u7f6e-taro-\u63d2\u4ef6"}),"\u5b89\u88c5 & \u914d\u7f6e Taro \u63d2\u4ef6"),(0,r.kt)("div",i({},{className:"admonition admonition-info alert alert--info"}),(0,r.kt)("div",i({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",i({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",i({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,r.kt)("div",i({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\uff0cPinia \u5b58\u5728\u90e8\u5206\u4e0d\u517c\u5bb9\u7684\u4ee3\u7801\uff08",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/10696"}),"#10696"),"\uff09\u3002\u611f\u8c22 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/keyding"}),"@keyding")," \u63d0\u4f9b\u7684 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/keyding/taro-plugin-pinia"}),"taro-plugin-pinia")," \u63d2\u4ef6\u4e3a\u6211\u4eec\u62b9\u5e73\u4e86\u8fd9\u4e9b\u5dee\u5f02\u3002"))),(0,r.kt)("p",null,"\u9996\u5148\u8bf7\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"pinia")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"taro-plugin-pinia"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"$ yarn add pinia taro-plugin-pinia\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install pinia taro-plugin-pinia\n")),(0,r.kt)("p",null,"\u7136\u540e\u914d\u7f6e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"taro-plugin-pinia")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  plugins: [\n    'taro-plugin-pinia'\n  ]\n  // ...\n}\n")),(0,r.kt)("h2",i({},{id:"\u4f8b\u5b50"}),"\u4f8b\u5b50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"taro init")," \u547d\u4ee4\u65f6\u9009\u62e9 Vue3 -> pinia \u5373\u53ef\u521b\u5efa vue3-pinia \u6a21\u677f\u9879\u76ee"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-todos-pinia"}),"Todo App"))),(0,r.kt)("h2",i({},{id:"\u4f7f\u7528"}),"\u4f7f\u7528"),(0,r.kt)("h3",i({},{id:"\u521b\u5efa-pinia-\u5b9e\u4f8b"}),"\u521b\u5efa Pinia \u5b9e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="src/app.js"',title:'"src/app.js"'}),"import { createApp } from 'vue'\nimport { createPinia } from 'pinia'\n\nconst App = createApp({})\n\nApp.use(createPinia())\n\nexport default App\n")),(0,r.kt)("h3",i({},{id:"\u521b\u5efa-store"}),"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"h3"},"store")),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store/index.js")," \u6587\u4ef6\u7528\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'}),"import { defineStore } from 'pinia'\n\nexport const useCounterStore = defineStore('counter', {\n  state: () => {\n    return { count: 0 }\n  },\n  actions: {\n    increment() {\n      this.count++\n    }\n  }\n})\n")),(0,r.kt)("h3",i({},{id:"\u4f7f\u7528-store-\u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5"}),"\u4f7f\u7528 store \u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html"}),"<template>\n  <view>\n    <text>{{ counter.count }}</text>\n    <view @tap=\"onAdd\">ADD</view>\n  </view>\n</template>\n\n<script>\nimport { useCounterStore } from '../stores'\n\nexport default {\n  setup() {\n    const counter = useCounterStore()\n\n    const onAdd = () => {\n      counter.count++\n    }\n\n    return {\n      counter,\n      onAdd\n    }\n  }\n}\n<\/script>\n")))}d.isMDXComponent=!0}}]);