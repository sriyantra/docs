"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7815],{4907:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(6687);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=l,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8278:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=a(5177),l=a(4416),n=(a(6687),a(4907)),i=["components"],o={},s="ITribeReserveStabilizer",c={unversionedId:"protocol/smart-contract-api/tribe/stabilizer/ITribeReserveStabilizer",id:"protocol/smart-contract-api/tribe/stabilizer/ITribeReserveStabilizer",title:"ITribeReserveStabilizer",description:"Functions",source:"@site/docs/protocol/smart-contract-api/tribe/stabilizer/ITribeReserveStabilizer.md",sourceDirName:"protocol/smart-contract-api/tribe/stabilizer",slug:"/protocol/smart-contract-api/tribe/stabilizer/ITribeReserveStabilizer",permalink:"/docs/protocol/smart-contract-api/tribe/stabilizer/ITribeReserveStabilizer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/tribe/stabilizer/ITribeReserveStabilizer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IReserveStabilizer",permalink:"/docs/protocol/smart-contract-api/tribe/stabilizer/IReserveStabilizer"},next:{title:"ReserveStabilizer",permalink:"/docs/protocol/smart-contract-api/tribe/stabilizer/ReserveStabilizer"}},d={},p=[{value:"Functions",id:"functions",level:2},{value:"setCollateralizationOracle",id:"setcollateralizationoracle",level:3},{value:"Parameters",id:"parameters",level:4},{value:"setCollateralizationThreshold",id:"setcollateralizationthreshold",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"startOracleDelayCountdown",id:"startoracledelaycountdown",level:3},{value:"resetOracleDelayCountdown",id:"resetoracledelaycountdown",level:3},{value:"isCollateralizationBelowThreshold",id:"iscollateralizationbelowthreshold",level:3},{value:"collateralizationOracle",id:"collateralizationoracle",level:3},{value:"collateralizationThreshold",id:"collateralizationthreshold",level:3},{value:"Events",id:"events",level:2},{value:"CollateralizationOracleUpdate",id:"collateralizationoracleupdate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"CollateralizationThresholdUpdate",id:"collateralizationthresholdupdate",level:3},{value:"Parameters",id:"parameters-3",level:4}],u={toc:p};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"itribereservestabilizer"},"ITribeReserveStabilizer"),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"setcollateralizationoracle"},"setCollateralizationOracle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function setCollateralizationOracle(\n    contract ICollateralizationOracle newCollateralizationOracle\n) external\n")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newCollateralizationOracle")),(0,n.kt)("td",{parentName:"tr",align:"left"},"contract ICollateralizationOracle"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"setcollateralizationthreshold"},"setCollateralizationThreshold"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function setCollateralizationThreshold(\n    uint256 newCollateralizationThresholdBasisPoints\n) external\n")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newCollateralizationThresholdBasisPoints")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"startoracledelaycountdown"},"startOracleDelayCountdown"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function startOracleDelayCountdown() external\n")),(0,n.kt)("h3",{id:"resetoracledelaycountdown"},"resetOracleDelayCountdown"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function resetOracleDelayCountdown() external\n")),(0,n.kt)("h3",{id:"iscollateralizationbelowthreshold"},"isCollateralizationBelowThreshold"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function isCollateralizationBelowThreshold() external returns (bool)\n")),(0,n.kt)("h3",{id:"collateralizationoracle"},"collateralizationOracle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function collateralizationOracle() external returns (contract ICollateralizationOracle)\n")),(0,n.kt)("h3",{id:"collateralizationthreshold"},"collateralizationThreshold"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function collateralizationThreshold() external returns (struct Decimal.D256)\n")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("h3",{id:"collateralizationoracleupdate"},"CollateralizationOracleUpdate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event CollateralizationOracleUpdate(\n    address oldCollateralizationOracle,\n    address newCollateralizationOracle\n)\n")),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"oldCollateralizationOracle")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newCollateralizationOracle")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"collateralizationthresholdupdate"},"CollateralizationThresholdUpdate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event CollateralizationThresholdUpdate(\n    uint256 oldCollateralizationThresholdBasisPoints,\n    uint256 newCollateralizationThresholdBasisPoints\n)\n")),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"oldCollateralizationThresholdBasisPoints")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newCollateralizationThresholdBasisPoints")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);