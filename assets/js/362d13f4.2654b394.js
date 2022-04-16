"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7730],{4907:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(6687);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7570:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=o(5177),r=o(4416),a=(o(6687),o(4907)),i=["components"],s={sidebar_position:3},l=void 0,c={unversionedId:"protocol/Mechanism/Collaterisation",id:"protocol/Mechanism/Collaterisation",title:"Collaterisation",description:'The "collateralization" is the ratio between the Protocol Controlled Value and the User-Circulating FEI (FEI tokens that are not held by the protocol\'s PCV Deposits). It represents the dollar-value of assets held in the protocol, that can be used to back the FEI in circulation at 1$.',source:"@site/docs/protocol/Mechanism/Collaterisation.md",sourceDirName:"protocol/Mechanism",slug:"/protocol/Mechanism/Collaterisation",permalink:"/docs/protocol/Mechanism/Collaterisation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/Mechanism/Collaterisation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Peg stability module",permalink:"/docs/protocol/Mechanism/PegStabilityModule"},next:{title:"Access Control",permalink:"/docs/protocol/Governance/Access Control"}},p={},u=[],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'The "collateralization" is the ratio between the ',(0,a.kt)("a",{parentName:"p",href:"/docs/protocol/Mechanism/PCVManagement"},"Protocol Controlled Value")," and the User-Circulating FEI (FEI tokens that are not held by the protocol's ",(0,a.kt)("a",{parentName:"p",href:"/docs/protocol/Mechanism/PCVDeposits"},"PCV Deposits"),"). It represents the dollar-value of assets held in the protocol, that can be used to back the FEI in circulation at 1$."),(0,a.kt)("p",null,"The Collateralization Ratio is expressed as a percentage, for instance if 100$ of assets are held in the protocol (PCV), and there are 50 User-Circulating FEI, the Collateralization Ratio is 200%."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/oracle/collateralization/CollateralizationOracle.sol"},"Collateralization Oracle"),") is a contract ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xFF6f59333cfD8f4Ebc14aD0a0E181a83e655d257"},"deployed on-chain")," that reports the list of token addresses of each asset held in the PCV ",(0,a.kt)("inlineCode",{parentName:"p"},"getTokensInPcv()"),", and for each token address, the list of PCV Deposits that hold it ",(0,a.kt)("inlineCode",{parentName:"p"},"getDepositsForToken(address)"),". The oracle also holds a mapping of token to oracle ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenToOracle(address)"),' to know the "asset to USD" conversion for each of the PCV assets. A helper method ',(0,a.kt)("inlineCode",{parentName:"p"},"pcvStats()")," is present and returns the PCV, user-circulating FEI (defined as FEI ",(0,a.kt)("inlineCode",{parentName:"p"},"totalSupply()")," minus FEI held by PCV Deposits), PCV Equity (PCV minus user-circulating FEI), and a validity status."),(0,a.kt)("p",null,"In the CR Oracle, a special token address ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1111..."),' is used to represent "USD". This is used for instance for LP tokens of stableswaps (like Curve) where the amount of stablecoins owned is known, but not the percent of each of the underlying stablecoins.'),(0,a.kt)("p",null,"By convention, FEI deposited in lending markets is reported as both PCV asset worth 0$, and protocol-owned FEI (to be deduced from circulating supply)."),(0,a.kt)("p",null,"Reading the CR Oracle on-chain is very expensive, and should only be used in extreme situations. For instance, when Collateralization drops below 100%, the protocol can trigger backstop mechanisms to drain the amount of FEI in circulation & restore the CR above 100%."))}h.isMDXComponent=!0}}]);