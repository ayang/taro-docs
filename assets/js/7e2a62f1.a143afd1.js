"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[5769],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||s[u]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78016:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(93106);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return r.createElement("div",a({role:"tabpanel"},{hidden:t,className:n}),e)}},27205:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(93106),a=n(60467),l=n(7617),i=n(26679),o="tabItem_ySgZ";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e){var t,n;const{lazy:a,block:p,defaultValue:m,values:s,groupId:d,className:u}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=s?s:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,l.lx)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const N=null===m?m:null!==(v=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:null===(n=f[0])||void 0===n?void 0:n.props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:h}=(0,l.UB)(),[w,y]=(0,r.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=d){const e=b[d];null!=e&&e!==w&&k.some((t=>t.value===e))&&y(e)}const V=e=>{const t=e.currentTarget,n=x.indexOf(t),r=k[n].value;r!==w&&(O(t),y(r),null!=d&&h(d,r))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},u)},k.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>x.push(e),onKeyDown:C,onFocus:V,onClick:V},n,{className:(0,i.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,a.Z)();return r.createElement(p,c({key:String(t)},e))}},90115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});n(93106);var r=n(79874),a=n(27205),l=n(78016);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"View",sidebar_label:"View"},p=void 0,m={unversionedId:"components/viewContainer/view",id:"version-3.x/components/viewContainer/view",title:"View",description:"\u89c6\u56fe\u5bb9\u5668",source:"@site/versioned_docs/version-3.x/components/viewContainer/view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/view",permalink:"/taro-docs/docs/components/viewContainer/view",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/viewContainer/view.md",tags:[],version:"3.x",frontMatter:{title:"View",sidebar_label:"View"},sidebar:"components",previous:{title:"Slot",permalink:"/taro-docs/docs/components/slot"},next:{title:"ScrollView",permalink:"/taro-docs/docs/components/viewContainer/scroll-view"}},s={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"ViewProps",id:"viewprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],u={toc:d};function f(e){var{components:t}=e,c=o(e,["components"]);return(0,r.kt)("wrapper",i({},u,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u89c6\u56fe\u5bb9\u5668"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(21207).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(92182).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(66839).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(58884).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(56174).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(82078).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(13555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/view.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ViewProps>\n")),(0,r.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>flex-direction: row \u6a2a\u5411\u5e03\u5c40</Text>\n        <View className='flex-wrp' style='flex-direction:row;'>\n          <View className='flex-item demo-text-1'/>\n          <View className='flex-item demo-text-2'/>\n          <View className='flex-item demo-text-3'/>\n        </View>\n        <Text>flex-direction: column \u7eb5\u5411\u5e03\u5c40</Text>\n        <View className='flex-wrp' style='flex-direction:column;'>\n          <View className='flex-item flex-item-V demo-text-1'/>\n          <View className='flex-item flex-item-V demo-text-2'/>\n          <View className='flex-item flex-item-V demo-text-3'/>\n        </View>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <text>flex-direction: row \u6a2a\u5411\u5e03\u5c40</text>\n    <view class="flex-wrp flex-wrp-row" hover-class="hover" >\n      <view class="flex-item demo-text-1" :hover-stop-propagation="true" />\n      <view class="flex-item demo-text-2" hover-start-time="1000" hover-class="hover" />\n      <view class="flex-item demo-text-3" hover-stayTime="1000" hover-class="hover" />\n    </view>\n    <text>flex-direction: column \u7eb5\u5411\u5e03\u5c40</text>\n    <view class="flex-wrp flex-wrp-column">\n      <view class="flex-item flex-item-V demo-text-1" />\n      <view class="flex-item flex-item-V demo-text-2" />\n      <view class="flex-item flex-item-V demo-text-3" />\n    </view>\n  </view>\n</template>\n\n<style>\n.flex-wrp { display: flex; }\n.flex-wrp-column{ flex-direction: column; }\n.flex-wrp-row { flex-direction:row; padding: 20px; background: #f1f1f1; }\n.flex-item { width: 180px; height: 90px; }\n.demo-text-1 { background: #ccc; }\n.demo-text-2 { background: #999; }\n.demo-text-3 { background: #666; }\n.hover {\n  background: #000;\n}\n</style>\n')))),(0,r.kt)("h2",i({},{id:"viewprops"}),"ViewProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"hoverClass"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"none")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u6307\u5b9a\u6309\u4e0b\u53bb\u7684\u6837\u5f0f\u7c7b\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},'hover-class="none"')," \u65f6\uff0c\u6ca1\u6709\u70b9\u51fb\u6001\u6548\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"hoverStyle"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"StyleProp<ViewStyle>")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"none")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u7531\u4e8e RN \u4e0d\u652f\u6301 Class\uff0c\u6545 RN \u7aef\u7684 View \u7ec4\u4ef6\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"hoverStyle"),"\u5c5e\u6027\uff0c\u5199\u6cd5\u548c style \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"hoverStyle")," \u7684\u6837\u5f0f\u662f\u6307\u5b9a\u6309\u4e0b\u53bb\u7684\u6837\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"hoverStopPropagation"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u6307\u5b9a\u662f\u5426\u963b\u6b62\u672c\u8282\u70b9\u7684\u7956\u5148\u8282\u70b9\u51fa\u73b0\u70b9\u51fb\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"hoverStartTime"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"50")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u6309\u4f4f\u540e\u591a\u4e45\u51fa\u73b0\u70b9\u51fb\u6001\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"hoverStayTime"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"400")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u624b\u6307\u677e\u5f00\u540e\u70b9\u51fb\u6001\u4fdd\u7559\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"catchMove"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u4ee5 catch \u7684\u5f62\u5f0f\u7ed1\u5b9a touchmove \u4e8b\u4ef6")))),(0,r.kt)("h3",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"ViewProps.hoverClass"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"(\u7531\u4e8e RN \u4e0d\u652f\u6301 Class\uff0c\u6545 RN \u7aef\u7684 View \u7ec4\u4ef6\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"hoverStyle"),"\u5c5e\u6027\uff0c\u5199\u6cd5\u548c style \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"hoverStyle")," \u7684\u6837\u5f0f\u662f\u6307\u5b9a\u6309\u4e0b\u53bb\u7684\u6837\u5f0f\u3002)"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"ViewProps.hoverStyle"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"ViewProps.hoverStopPropagation"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"ViewProps.hoverStartTime"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"ViewProps.hoverStayTime"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0},66839:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},56174:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},13555:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},82078:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},92182:function(e,t,n){t.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},58884:function(e,t,n){t.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},21207:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);