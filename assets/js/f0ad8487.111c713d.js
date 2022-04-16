"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2543],{4907:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2743:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=a(5177),n=a(4416),i=(a(6687),a(4907)),l=["components"],o={},s="IReserveStabilizer",p={unversionedId:"protocol/smart-contract-api/tribe/stabilizer/IReserveStabilizer",id:"protocol/smart-contract-api/tribe/stabilizer/IReserveStabilizer",title:"IReserveStabilizer",description:"Functions",source:"@site/docs/protocol/smart-contract-api/tribe/stabilizer/IReserveStabilizer.md",sourceDirName:"protocol/smart-contract-api/tribe/stabilizer",slug:"/protocol/smart-contract-api/tribe/stabilizer/IReserveStabilizer",permalink:"/docs/protocol/smart-contract-api/tribe/stabilizer/IReserveStabilizer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/tribe/stabilizer/IReserveStabilizer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TribeMinter",permalink:"/docs/protocol/smart-contract-api/tribe/TribeMinter"},next:{title:"ITribeReserveStabilizer",permalink:"/docs/protocol/smart-contract-api/tribe/stabilizer/ITribeReserveStabilizer"}},d={},u=[{value:"Functions",id:"functions",level:2},{value:"exchangeFei",id:"exchangefei",level:3},{value:"Parameters",id:"parameters",level:4},{value:"setUsdPerFeiRate",id:"setusdperfeirate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"usdPerFeiBasisPoints",id:"usdperfeibasispoints",level:3},{value:"getAmountOut",id:"getamountout",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Events",id:"events",level:2},{value:"FeiExchange",id:"feiexchange",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"UsdPerFeiRateUpdate",id:"usdperfeirateupdate",level:3},{value:"Parameters",id:"parameters-4",level:4}],m={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ireservestabilizer"},"IReserveStabilizer"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"exchangefei"},"exchangeFei"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function exchangeFei(\n    uint256 feiAmount\n) external returns (uint256)\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feiAmount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"setusdperfeirate"},"setUsdPerFeiRate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function setUsdPerFeiRate(\n    uint256 exchangeRateBasisPoints\n) external\n")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"exchangeRateBasisPoints")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"usdperfeibasispoints"},"usdPerFeiBasisPoints"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function usdPerFeiBasisPoints() external returns (uint256)\n")),(0,i.kt)("h3",{id:"getamountout"},"getAmountOut"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getAmountOut(\n    uint256 amountIn\n) external returns (uint256)\n")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"feiexchange"},"FeiExchange"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event FeiExchange(\n    address to,\n    uint256 feiAmountIn,\n    uint256 amountOut\n)\n")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feiAmountIn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"usdperfeirateupdate"},"UsdPerFeiRateUpdate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event UsdPerFeiRateUpdate(\n    uint256 oldUsdPerFeiBasisPoints,\n    uint256 newUsdPerFeiBasisPoints\n)\n")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"oldUsdPerFeiBasisPoints")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newUsdPerFeiBasisPoints")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}c.isMDXComponent=!0}}]);