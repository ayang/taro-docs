"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64217],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),i=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=i(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75383:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Taro.canvasPutImageData(option, component)",sidebar_label:"canvasPutImageData"},c=void 0,s={unversionedId:"apis/canvas/canvasPutImageData",id:"apis/canvas/canvasPutImageData",title:"Taro.canvasPutImageData(option, component)",description:'Draws pixel data to the canvas. In a custom component, the "this" of the custom component instance is passed as the second parameter to operate on the canvas component in this component.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/canvas/canvasPutImageData.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasPutImageData",permalink:"/taro-docs/en/docs/next/apis/canvas/canvasPutImageData",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/canvas/canvasPutImageData.md",tags:[],version:"current",frontMatter:{title:"Taro.canvasPutImageData(option, component)",sidebar_label:"canvasPutImageData"},sidebar:"API",previous:{title:"canvasToTempFilePath",permalink:"/taro-docs/en/docs/next/apis/canvas/canvasToTempFilePath"},next:{title:"canvasGetImageData",permalink:"/taro-docs/en/docs/next/apis/canvas/canvasGetImageData"}},i={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:u};function d(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Draws pixel data to the canvas. In a custom component, the "this" of the custom component instance is passed as the second parameter to operate on the ',(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," component in this component."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/wx.canvasPutImageData.html"}),"Reference"))),(0,a.kt)("h2",r({},{id:"type"}),"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option, component?: Record<string, any>) => Promise<CallbackResult>\n")),(0,a.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,a.kt)("h3",r({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"canvasId"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The canvas ID, which is the canvas-id property passed into the ",(0,a.kt)("code",null,"canvas")," component.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Uint8ClampedArray")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The image pixel data, which is a one-dimensional array in which every four items express the RGBA color of one pixel.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The height of the rectangular area of the source image.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"width"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The width of the rectangular area of the source image.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"x"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The position offset (x-axis offset) of the source image data on the destination canvas.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"y"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The position offset (y-axis offset) of the source image data on the destination canvas.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"const data = new Uint8ClampedArray([255, 0, 0, 1])\nTaro.canvasPutImageData({\n  canvasId: 'myCanvas',\n  x: 0,\n  y: 0,\n  width: 1,\n  data: data,\n  success: function (res) {}\n})\n")),(0,a.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.canvasPutImageData"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);