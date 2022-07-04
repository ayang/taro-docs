"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46433],{79874:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78016:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(93106);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a({children:e,hidden:n,className:t}){return r.createElement("div",o({role:"tabpanel"},{hidden:n,className:t}),e)}},27205:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(93106),o=t(60467),a=t(7617),l=t(26679),i="tabItem_ySgZ";function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function c(e){var n,t;const{lazy:o,block:c,defaultValue:u,values:p,groupId:d,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=p?p:h.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),v=(0,a.lx)(f,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const k=null===u?u:null!==(g=null!=u?u:null===(n=h.find((e=>e.props.default)))||void 0===n?void 0:n.props.value)&&void 0!==g?g:null===(t=h[0])||void 0===t?void 0:t.props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,a.UB)(),[x,w]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,a.o5)();if(null!=d){const e=b[d];null!=e&&e!==x&&f.some((n=>n.value===e))&&w(e)}const C=e=>{const n=e.currentTarget,t=N.indexOf(n),r=f[t].value;r!==x&&(E(n),w(r),null!=d&&y(d,r))},j=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==n||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},f.map((({value:e,label:n,attributes:t})=>r.createElement("li",s({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>N.push(e),onKeyDown:j,onFocus:C,onClick:C},t,{className:(0,l.Z)("tabs__item",i,null==t?void 0:t.className,{"tabs__item--active":x===e})}),null!=n?n:e)))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function u(e){const n=(0,o.Z)();return r.createElement(c,s({key:String(n)},e))}},33413:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});t(93106);var r=t(79874),o=t(27205),a=t(78016);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"\u9519\u8bef\u5904\u7406"},c=void 0,u={unversionedId:"react-error-handling",id:"version-3.x/react-error-handling",title:"\u9519\u8bef\u5904\u7406",description:"React \u548c\u5c0f\u7a0b\u5e8f\u90fd\u63d0\u4f9b\u4e86\u5404\u81ea\u7684\u9519\u8bef\u5904\u7406\u65b9\u6cd5\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u7ed3\u5408\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-3.x/react-error-handling.mdx",sourceDirName:".",slug:"/react-error-handling",permalink:"/taro-docs/en/docs/react-error-handling",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/react-error-handling.mdx",tags:[],version:"3.x",frontMatter:{title:"\u9519\u8bef\u5904\u7406"},sidebar:"docs",previous:{title:"Hooks",permalink:"/taro-docs/en/docs/hooks"},next:{title:"React DevTools",permalink:"/taro-docs/en/docs/react-devtools"}},p={},d=[{value:"\u9519\u8bef\u8fb9\u754c",id:"\u9519\u8bef\u8fb9\u754c",level:2},{value:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c",id:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c",level:3},{value:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef",id:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef",level:3},{value:"App onError",id:"app-onerror",level:2}],m={toc:d};function h(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",l({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React \u548c\u5c0f\u7a0b\u5e8f\u90fd\u63d0\u4f9b\u4e86\u5404\u81ea\u7684\u9519\u8bef\u5904\u7406\u65b9\u6cd5\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u7ed3\u5408\u4f7f\u7528\u3002"),(0,r.kt)("h2",l({},{id:"\u9519\u8bef\u8fb9\u754c"}),"\u9519\u8bef\u8fb9\u754c"),(0,r.kt)("p",null,"React 16 \u5f15\u5165\u4e86",(0,r.kt)("a",l({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"\u9519\u8bef\u8fb9\u754c"),"\u7684\u6982\u5ff5\uff0c\u76f8\u6bd4\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"try catch")," \u548c\u5c0f\u7a0b\u5e8f\u7684\u5168\u5c40\u9519\u8bef\u76d1\u542c\u56de\u8c03 ",(0,r.kt)("inlineCode",{parentName:"p"},"App onError"),"\uff0c\u5b83\u7684\u4f18\u70b9\u5728\u4e8e\u80fd\u6355\u83b7 React \u6e32\u67d3\u8fc7\u7a0b\u4e2d\u7684\u9519\u8bef\u548c\u663e\u793a\u515c\u5e95\u754c\u9762\u3002"),(0,r.kt)("div",l({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",l({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",l({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",l({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",l({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",l({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"\u9519\u8bef\u8fb9\u754c\u4e0d\u80fd\u6355\u83b7\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u56de\u8c03"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u4ee3\u7801\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u56de\u8c03"),(0,r.kt)("li",{parentName:"ul"},"\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u81ea\u8eab\u7684\u6e32\u67d3\u9519\u8bef")),(0,r.kt)("p",{parentName:"div"},"\u524d\u4e24\u70b9\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"try catch")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"App onError")," \u8fdb\u884c\u5904\u7406\uff0c\u7b2c\u4e09\u70b9\u5c06\u5728\u540e\u6587\u4e2d\u4ecb\u7ecd\u3002"))),(0,r.kt)("h3",l({},{id:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c"}),"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c"),(0,r.kt)("p",null,"\u6b63\u5982 React \u6587\u6863\u6240\u6307\u51fa\u7684\uff0c\u9519\u8bef\u8fb9\u754c\u7684\u9897\u7c92\u5ea6\u53ef\u4ee5\u7531\u5f00\u53d1\u8005\u81ea\u884c\u9009\u62e9\u3002\u5982\u679c\u8981\u6355\u83b7",(0,r.kt)("strong",{parentName:"p"},"\u9875\u9762\u5185\u5b50\u7ec4\u4ef6"),"\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u628a\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"class BuggyCounter extends Component {\n  state = {\n    counter: 0\n  }\n\n  handleClick = () => {\n    this.setState(({ counter }) => ({\n      counter: counter + 1\n    }))\n  }\n\n  render() {\n    if (this.state.counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n    return <Button onClick={this.handleClick}>{this.state.counter}</Button>\n  }\n}\n\n// \u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\nexport default class Index extends Component {\n  state = {\n    hasError: null\n  }\n\n  static getDerivedStateFromError () {\n    return {\n      hasError: true\n    }\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log(error, errorInfo)\n  }\n\n  render() {\n    return (\n      this.state.hasError\n        // \u5f02\u5e38\u65f6\u663e\u793a\u515c\u5e95 UI\n        ? <View>Something went wrong.</View>\n        // \u6b63\u5e38\u663e\u793a\n        : <BuggyCounter></BuggyCounter>\n    )\n  }\n}\n")),(0,r.kt)("h3",l({},{id:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef"}),"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76f8\u5173\u8ba8\u8bba\uff1a",(0,r.kt)("a",l({parentName:"p"},{href:"https://github.com/NervJS/taro/pull/8191"}),"#8191"))),(0,r.kt)("p",null,"\u8fd8\u8bb0\u5f97\u9519\u8bef\u8fb9\u754c\u7684\u7b2c\u4e09\u4e2a\u9650\u5236",(0,r.kt)("strong",{parentName:"p"},"\u201c\u4e0d\u80fd\u6355\u83b7\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u81ea\u8eab\u7684\u6e32\u67d3\u9519\u8bef\u201d"),"\u5417\uff1f\u5982\u679c\u6211\u4eec\u628a\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\uff0c\u8fd9\u65f6\u662f\u4e0d\u80fd\u6355\u83b7\u5176\u81ea\u8eab\u7684\u9519\u8bef\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u518d\u521b\u5efa\u4e00\u4e2a\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u4ee5\u5305\u88f9\u6211\u4eec\u7684\u9875\u9762\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u9ad8\u9636\u7ec4\u4ef6\u4e3a\u9875\u9762\u7ec4\u4ef6\u5d4c\u5957\u9519\u8bef\u8fb9\u754c\uff0c\u5982\u679c\u9875\u9762\u7ec4\u4ef6\u4e3a Class Component\uff0c\u8fd8\u9700\u8981\u5bf9 Taro \u7684\u751f\u547d\u5468\u671f\u8fdb\u884c\u989d\u5916\u5904\u7406\u3002\u56e0\u6b64\u5efa\u8bae\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9875\u9762\u7ec4\u4ef6\u4f7f\u7528 Functional Component \u7684\u5199\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)(o.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"import React, { Component } from 'react'\nimport { View, Button } from '@tarojs/components'\n\n// \u9875\u9762\u7ec4\u4ef6\nclass Index extends Component {\n  state = {\n    counter: 0\n  }\n\n  componentDidShow () {\n    console.log('show')\n  }\n\n  componentDidHide () {\n    console.log('hide')\n  }\n\n  onShareAppMessage () {\n    return {\n      title: 'myShareTitle'\n    }\n  }\n\n  handleClick = () => {\n    this.setState(({ counter }) => ({\n      counter: counter + 1\n    }))\n  }\n\n  render() {\n    if (this.state.counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n    return <Button onClick={this.handleClick}>{this.state.counter}</Button>\n  }\n}\n\n// \u4f7f\u7528 HOC \u4ee5\u65b9\u4fbf\u4e3a\u5404\u4e2a\u9875\u9762\u590d\u7528\u8fd9\u6bb5\u903b\u8f91\nfunction createErrorBoundary (Page) {\n  return class ErrorBoundary extends Component {\n    el = React.createRef()\n    state = {\n      hasError: null\n    }\n\n    static getDerivedStateFromError () {\n      return {\n        hasError: true\n      }\n    }\n\n    componentDidCatch(error, errorInfo) {\n      console.log(error, errorInfo)\n    }\n\n    /* Start \u9700\u8981\u624b\u52a8\u8c03\u7528\u9875\u9762\u7ec4\u4ef6\u4e0a\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5 **/\n    componentDidShow () {\n      return this.el.current?.componentDidShow?.()\n    }\n\n    componentDidHide () {\n      return this.el.current?.componentDidHide?.()\n    }\n\n    onShareAppMessage () {\n      return this.el.current?.onShareAppMessage?.()\n    }\n\n    //...\n\n    /* End \u9700\u8981\u624b\u52a8\u8c03\u7528\u9875\u9762\u7ec4\u4ef6\u4e0a\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5 **/\n\n    render() {\n      return (\n        this.state.hasError\n          ? <View>Something went wrong.</View>\n          : <Page ref={this.el} />\n      )\n    }\n  }\n}\n\nexport default createErrorBoundary(Index)\n"))),(0,r.kt)(a.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"import { Component, useEffect, useState } from 'react'\nimport { View, Button } from '@tarojs/components'\nimport { useDidShow, useDidHide, useShareAppMessage } from '@tarojs/taro'\n\nfunction Index () {\n  const [counter, setCounter] = useState(0)\n\n  useDidShow(() => console.log('show'))\n\n  useDidHide(() => console.log('hide'))\n\n  useShareAppMessage(() => ({ title: 'myShareTitle' }))\n\n  function handleClick () {\n    setCounter(counter + 1)\n  }\n\n  useEffect(() => {\n    if (counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n  })\n\n  return <Button onClick={handleClick}>{counter}</Button>\n\n}\n\n// \u4f7f\u7528 HOC \u4ee5\u65b9\u4fbf\u4e3a\u5404\u4e2a\u9875\u9762\u590d\u7528\u8fd9\u6bb5\u903b\u8f91\nfunction createErrorBoundary (Page) {\n  return class ErrorBoundary extends Component {\n    state = {\n      hasError: null\n    }\n\n    static getDerivedStateFromError () {\n      return {\n        hasError: true\n      }\n    }\n\n    componentDidCatch(error, errorInfo) {\n      console.log(error, errorInfo)\n    }\n\n    render() {\n      return (\n        this.state.hasError\n          ? <View>Something went wrong.</View>\n          : <Page />\n      )\n    }\n  }\n}\n\nexport default createErrorBoundary(Index)\n")))),(0,r.kt)("h2",l({},{id:"app-onerror"}),"App onError"),(0,r.kt)("div",l({},{className:"admonition admonition-info alert alert--info"}),(0,r.kt)("div",l({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",l({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",l({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",l({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,r.kt)("div",l({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Taro v3.5+ \u5f00\u59cb\u652f\u6301"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React \u6e32\u67d3\u6d41\u7a0b\u4e4b\u5916\u7684 JS \u9519\u8bef\u90fd\u80fd\u88ab\u5176\u76d1\u542c\u5230\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6e32\u67d3\u9519\u8bef\u6ca1\u6709\u88ab\u5f00\u53d1\u8005\u8bbe\u7f6e\u7684\u9519\u8bef\u8fb9\u754c\u6355\u83b7\u65f6\uff0c\u6e32\u67d3\u62a5\u9519\u90fd\u53ef\u4ee5\u88ab\u76d1\u542c\u5230\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)(o.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import { Component } from 'react'\n\nexport default class App extends Component {\n  onError (error) {\n    console.log(error)\n  }\n\n  render () {\n    return this.props.children\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import { useError } from '@tarojs/taro'\n\nexport default function App (props) {\n  useError(error => console.log(error))\n\n  return props.children\n}\n")))))}h.isMDXComponent=!0}}]);