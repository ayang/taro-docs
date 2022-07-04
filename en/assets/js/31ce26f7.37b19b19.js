"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24342],{79874:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(93106);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,y=p["".concat(a,".").concat(d)]||p[d]||s[d]||o;return n?r.createElement(y,l(l({ref:t},f),{},{components:n})):r.createElement(y,l({ref:t},f))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return f}});n(93106);var r=n(79874);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"WifiInfo",sidebar_label:"WifiInfo"},c=void 0,a={unversionedId:"apis/device/wifi/WifiInfo",id:"apis/device/wifi/WifiInfo",title:"WifiInfo",description:"The information of the Wi-Fi network.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/wifi/WifiInfo.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/WifiInfo",permalink:"/taro-docs/en/docs/next/apis/device/wifi/WifiInfo",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/wifi/WifiInfo.md",tags:[],version:"current",frontMatter:{title:"WifiInfo",sidebar_label:"WifiInfo"},sidebar:"API",previous:{title:"connectWifi",permalink:"/taro-docs/en/docs/next/apis/device/wifi/connectWifi"},next:{title:"addPhoneRepeatCalendar",permalink:"/taro-docs/en/docs/next/apis/device/calendar/addPhoneRepeatCalendar"}},u={},f=[{value:"Methods",id:"methods",level:2}],s={toc:f};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The information of the Wi-Fi network."),(0,r.kt)("h2",i({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"BSSID"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The BSSID of the Wi-Fi network.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SSID"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The SSID of the Wi-Fi network.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"secure"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,"Indicates whether the Wi-Fi network is secure.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"signalStrength"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The signal strength of the Wi-Fi network.")))))}p.isMDXComponent=!0}}]);