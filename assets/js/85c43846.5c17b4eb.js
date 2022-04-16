"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4243],{4907:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8661:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(5177),a=r(4416),o=(r(6687),r(4907)),i=["components"],l={},p="IERC20Airdropper",c={unversionedId:"protocol/smart-contract-api/external/multisend/IERC20Airdropper",id:"protocol/smart-contract-api/external/multisend/IERC20Airdropper",title:"IERC20Airdropper",description:"Functions",source:"@site/docs/protocol/smart-contract-api/external/multisend/IERC20Airdropper.md",sourceDirName:"protocol/smart-contract-api/external/multisend",slug:"/protocol/smart-contract-api/external/multisend/IERC20Airdropper",permalink:"/docs/protocol/smart-contract-api/external/multisend/IERC20Airdropper",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/external/multisend/IERC20Airdropper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ABDKMath64x64",permalink:"/docs/protocol/smart-contract-api/external/gyro/abdk/ABDKMath64x64"},next:{title:"RariGovernanceTokenUniswapDistributor",permalink:"/docs/protocol/smart-contract-api/external/rari/RariGovernanceTokenUniswapDistributor"}},s={},d=[{value:"Functions",id:"functions",level:2},{value:"pricePerTx",id:"pricepertx",level:3},{value:"transfer",id:"transfer",level:3},{value:"Parameters",id:"parameters",level:4}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ierc20airdropper"},"IERC20Airdropper"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"pricepertx"},"pricePerTx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function pricePerTx() external returns (uint256)\n")),(0,o.kt)("h3",{id:"transfer"},"transfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function transfer(\n    address _token,\n    address payable _referral,\n    address[] _addresses,\n    uint256[] _values\n) external returns (bool)\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_token")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_referral")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_addresses")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_values")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);