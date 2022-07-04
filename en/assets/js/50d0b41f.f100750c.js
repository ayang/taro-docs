"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[55639],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78016:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(93106);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",r({role:"tabpanel"},{hidden:t,className:n}),e)}},27205:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(93106),r=n(60467),i=n(7617),l=n(26679),o="tabItem_ySgZ";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function p(e){var t,n;const{lazy:r,block:p,defaultValue:d,values:u,groupId:s,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=u?u:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,i.lx)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const v=null===d?d:null!==(g=null!=d?d:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:null===(n=h[0])||void 0===n?void 0:n.props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,i.UB)(),[w,N]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=s){const e=y[s];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const M=e=>{const t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==w&&(O(t),N(a),null!=s&&b(s,a))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},m)},k.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>x.push(e),onKeyDown:P,onFocus:M,onClick:M},n,{className:(0,l.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),r?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,r.Z)();return a.createElement(p,c({key:String(t)},e))}},85134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});n(93106);var a=n(79874),r=n(27205),i=n(78016);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"MatchMedia",sidebar_label:"MatchMedia"},p=void 0,d={unversionedId:"components/viewContainer/match-media",id:"version-3.x/components/viewContainer/match-media",title:"MatchMedia",description:"media query match detection node. You can specify a set of media query rules that will be satisfied before this node is displayed.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/match-media.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/match-media",permalink:"/taro-docs/en/docs/components/viewContainer/match-media",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/viewContainer/match-media.md",tags:[],version:"3.x",frontMatter:{title:"MatchMedia",sidebar_label:"MatchMedia"},sidebar:"components",previous:{title:"CoverImage",permalink:"/taro-docs/en/docs/components/viewContainer/cover-image"},next:{title:"ShareElement",permalink:"/taro-docs/en/docs/components/viewContainer/share-element"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"matchMediaProps",id:"matchmediaprops",level:2},{value:"API Support",id:"api-support",level:3}],m={toc:s};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"media query")," match detection node. You can specify a set of ",(0,a.kt)("inlineCode",{parentName:"p"},"media query")," rules that will be satisfied before this node is displayed."),(0,a.kt)("p",null,"This node enables the effect that an area is only displayed when the page is within a certain width and height range."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"}),"Reference"))),(0,a.kt)("h2",l({},{id:"type"}),"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MatchMediaProps>\n")),(0,a.kt)("h2",l({},{id:"examples"}),"Examples"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),'class App extends Components {\n  render () {\n    return (\n      <View>\n        <MatchMedia minWidth="300" maxWidth="600">\n          <view>Displayed when the page width is between 300 ~ 500 px</view>\n        </MatchMedia>\n        <MatchMedia minHeight="400" orientation="landscape">\n          <view>Displayed here when the page height is not less than 400 px and the screen orientation is portrait</view>\n        </MatchMedia>\n      </View>\n    )\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <match-media min-width="300" max-width="500">\n      <view>Displayed when the page width is between 300 ~ 500 px</view>\n    </match-media>\n    <match-media min-height="400" orientation="landscape">\n      <view>Displayed here when the page height is not less than 400 px and the screen orientation is portrait</view>\n    </match-media>\n  </view>\n</template>\n')))),(0,a.kt)("h2",l({},{id:"matchmediaprops"}),"matchMediaProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"minWidth"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the minimum page width in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxWidth"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the maximum page width in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"width"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the page width in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"minHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the minimum page height in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the maximum page height in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the page height in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"orientation"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the screen orientation")))),(0,a.kt)("h3",l({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.minWidth"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.maxWidth"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.width"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.minHeight"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.maxHeight"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.Height"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.orientation"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))))))}h.isMDXComponent=!0}}]);