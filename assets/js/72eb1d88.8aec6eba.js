"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6387],{4907:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return u}});var r=a(6687);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(a),u=n,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(f,i(i({ref:e},c),{},{components:a})):r.createElement(f,i({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4051:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=a(5177),n=a(4416),l=(a(6687),a(4907)),i=["components"],o={},p="IPCVEquityMinter",s={unversionedId:"protocol/smart-contract-api/fei/minter/IPCVEquityMinter",id:"protocol/smart-contract-api/fei/minter/IPCVEquityMinter",title:"IPCVEquityMinter",description:"Functions",source:"@site/docs/protocol/smart-contract-api/fei/minter/IPCVEquityMinter.md",sourceDirName:"protocol/smart-contract-api/fei/minter",slug:"/protocol/smart-contract-api/fei/minter/IPCVEquityMinter",permalink:"/docs/protocol/smart-contract-api/fei/minter/IPCVEquityMinter",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/fei/minter/IPCVEquityMinter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IFeiTimedMinter",permalink:"/docs/protocol/smart-contract-api/fei/minter/IFeiTimedMinter"},next:{title:"OwnableTimedMinter",permalink:"/docs/protocol/smart-contract-api/fei/minter/OwnableTimedMinter"}},c={},d=[{value:"Functions",id:"functions",level:2},{value:"setCollateralizationOracle",id:"setcollateralizationoracle",level:3},{value:"Parameters",id:"parameters",level:4},{value:"setAPRBasisPoints",id:"setaprbasispoints",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"MAX_APR_BASIS_POINTS",id:"max_apr_basis_points",level:3},{value:"collateralizationOracle",id:"collateralizationoracle",level:3},{value:"aprBasisPoints",id:"aprbasispoints",level:3},{value:"Events",id:"events",level:2},{value:"APRUpdate",id:"aprupdate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"CollateralizationOracleUpdate",id:"collateralizationoracleupdate",level:3},{value:"Parameters",id:"parameters-3",level:4}],m={toc:d};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ipcvequityminter"},"IPCVEquityMinter"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"setcollateralizationoracle"},"setCollateralizationOracle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setCollateralizationOracle(\n    contract ICollateralizationOracle newCollateralizationOracle\n) external\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newCollateralizationOracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract ICollateralizationOracle"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"setaprbasispoints"},"setAPRBasisPoints"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setAPRBasisPoints(\n    uint256 newAprBasisPoints\n) external\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newAprBasisPoints")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"max_apr_basis_points"},"MAX_APR_BASIS_POINTS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function MAX_APR_BASIS_POINTS() external returns (uint256)\n")),(0,l.kt)("h3",{id:"collateralizationoracle"},"collateralizationOracle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function collateralizationOracle() external returns (contract ICollateralizationOracle)\n")),(0,l.kt)("h3",{id:"aprbasispoints"},"aprBasisPoints"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function aprBasisPoints() external returns (uint256)\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"aprupdate"},"APRUpdate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event APRUpdate(\n    uint256 oldAprBasisPoints,\n    uint256 newAprBasisPoints\n)\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oldAprBasisPoints")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newAprBasisPoints")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"collateralizationoracleupdate"},"CollateralizationOracleUpdate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event CollateralizationOracleUpdate(\n    address oldCollateralizationOracle,\n    address newCollateralizationOracle\n)\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oldCollateralizationOracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newCollateralizationOracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);