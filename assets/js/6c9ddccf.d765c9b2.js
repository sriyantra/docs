"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6624],{4907:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var a=r(6687);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,l(l({ref:e},p),{},{components:r})):a.createElement(f,l({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4115:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=r(5177),n=r(4416),o=(r(6687),r(4907)),l=["components"],i={},s="IFuseFeeDistributor",c={unversionedId:"protocol/smart-contract-api/external/fuse/IFuseFeeDistributor",id:"protocol/smart-contract-api/external/fuse/IFuseFeeDistributor",title:"IFuseFeeDistributor",description:"Functions",source:"@site/docs/protocol/smart-contract-api/external/fuse/IFuseFeeDistributor.md",sourceDirName:"protocol/smart-contract-api/external/fuse",slug:"/protocol/smart-contract-api/external/fuse/IFuseFeeDistributor",permalink:"/docs/protocol/smart-contract-api/external/fuse/IFuseFeeDistributor",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/external/fuse/IFuseFeeDistributor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConvexERC4626",permalink:"/docs/protocol/smart-contract-api/external/fuse/IConvexERC4626"},next:{title:"IRewardsDistributor",permalink:"/docs/protocol/smart-contract-api/external/fuse/IRewardsDistributor"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"_editCErc20DelegateWhitelist",id:"_editcerc20delegatewhitelist",level:3},{value:"Parameters",id:"parameters",level:4},{value:"_callPool",id:"_callpool",level:3},{value:"Parameters",id:"parameters-1",level:4}],d={toc:u};function m(t){var e=t.components,r=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ifusefeedistributor"},"IFuseFeeDistributor"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"_editcerc20delegatewhitelist"},"_editCErc20DelegateWhitelist"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function _editCErc20DelegateWhitelist(\n    address[] oldImplementations,\n    address[] newImplementations,\n    bool[] allowResign,\n    bool[] statuses\n) external\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"oldImplementations")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"newImplementations")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"allowResign")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bool[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"statuses")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bool[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"_callpool"},"_callPool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function _callPool(\n    address[] targets,\n    bytes data\n) external\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"targets")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);