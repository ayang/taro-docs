"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[5415],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),u=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),k=u(n),p=r,v=k["".concat(o,".").concat(p)]||k[p]||d[p]||i;return n?l.createElement(v,c(c({ref:e},s),{},{components:n})):l.createElement(v,c({ref:e},s))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,c=new Array(i);c[0]=k;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a.mdxType="string"==typeof t?t:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},73914:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return a},default:function(){return k},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const c={title:"Taro.getBLEDeviceCharacteristics(option)",sidebar_label:"getBLEDeviceCharacteristics"},a=void 0,o={unversionedId:"apis/device/ble/getBLEDeviceCharacteristics",id:"version-2.x/apis/device/ble/getBLEDeviceCharacteristics",title:"Taro.getBLEDeviceCharacteristics(option)",description:"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u67d0\u4e2a\u670d\u52a1\u4e2d\u6240\u6709\u7279\u5f81\u503c(characteristic)\u3002",source:"@site/versioned_docs/version-2.x/apis/device/ble/getBLEDeviceCharacteristics.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/getBLEDeviceCharacteristics",permalink:"/taro-docs/en/docs/2.x/apis/device/ble/getBLEDeviceCharacteristics",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/ble/getBLEDeviceCharacteristics.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getBLEDeviceCharacteristics(option)",sidebar_label:"getBLEDeviceCharacteristics"},sidebar:"version-2.x/API",previous:{title:"getBLEDeviceServices",permalink:"/taro-docs/en/docs/2.x/apis/device/ble/getBLEDeviceServices"},next:{title:"createBLEConnection",permalink:"/taro-docs/en/docs/2.x/apis/device/ble/createBLEConnection"}},u={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"BLECharacteristic",id:"blecharacteristic",level:3},{value:"Properties",id:"properties",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:s};function k(t){var{components:e}=t,n=i(t,["components"]);return(0,l.kt)("wrapper",r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u67d0\u4e2a\u670d\u52a1\u4e2d\u6240\u6709\u7279\u5f81\u503c(characteristic)\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"deviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"serviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u84dd\u7259\u670d\u52a1 uuid\uff0c\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("code",null,"getBLEDeviceServices")," \u83b7\u53d6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: SuccessCallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"characteristics"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BLECharacteristic[]")),(0,l.kt)("td",null,"\u8bbe\u5907\u7279\u5f81\u503c\u5217\u8868")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,l.kt)("h3",r({},{id:"blecharacteristic"}),"BLECharacteristic"),(0,l.kt)("p",null,"\u8bbe\u5907\u7279\u5f81\u503c\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"properties"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Properties")),(0,l.kt)("td",null,"\u8be5\u7279\u5f81\u503c\u652f\u6301\u7684\u64cd\u4f5c\u7c7b\u578b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"uuid"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u7684 uuid")))),(0,l.kt)("h3",r({},{id:"properties"}),"Properties"),(0,l.kt)("p",null,"\u8be5\u7279\u5f81\u503c\u652f\u6301\u7684\u64cd\u4f5c\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"indicate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 indicate \u64cd\u4f5c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notify"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 notify \u64cd\u4f5c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"read"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 read \u64cd\u4f5c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"write"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 write \u64cd\u4f5c")))),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.getBLEDeviceCharacteristics({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  success: function (res) {\n    console.log('device getBLEDeviceCharacteristics:', res.characteristics)\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.getBLEDeviceCharacteristics"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);