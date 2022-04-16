"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8219],{4907:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8908:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(5177),o=r(4416),a=(r(6687),r(4907)),c=["components"],l={},i="MockCoreRef",s={unversionedId:"protocol/smart-contract-api/mock/MockCoreRef",id:"protocol/smart-contract-api/mock/MockCoreRef",title:"MockCoreRef",description:"Functions",source:"@site/docs/protocol/smart-contract-api/mock/MockCoreRef.md",sourceDirName:"protocol/smart-contract-api/mock",slug:"/protocol/smart-contract-api/mock/MockCoreRef",permalink:"/docs/protocol/smart-contract-api/mock/MockCoreRef",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/mock/MockCoreRef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MockCore",permalink:"/docs/protocol/smart-contract-api/mock/MockCore"},next:{title:"MockCoreRefTest",permalink:"/docs/protocol/smart-contract-api/mock/MockCoreRefTest"}},u={},p=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"testMinter",id:"testminter",level:3},{value:"testBurner",id:"testburner",level:3},{value:"testPCVController",id:"testpcvcontroller",level:3},{value:"testGovernor",id:"testgovernor",level:3},{value:"testGuardian",id:"testguardian",level:3},{value:"testOnlyGovernorOrAdmin",id:"testonlygovernororadmin",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mockcoreref"},"MockCoreRef"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address core\n) public\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"core")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"testminter"},"testMinter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function testMinter() public\n")),(0,a.kt)("h3",{id:"testburner"},"testBurner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function testBurner() public\n")),(0,a.kt)("h3",{id:"testpcvcontroller"},"testPCVController"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function testPCVController() public\n")),(0,a.kt)("h3",{id:"testgovernor"},"testGovernor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function testGovernor() public\n")),(0,a.kt)("h3",{id:"testguardian"},"testGuardian"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function testGuardian() public\n")),(0,a.kt)("h3",{id:"testonlygovernororadmin"},"testOnlyGovernorOrAdmin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function testOnlyGovernorOrAdmin() public\n")))}d.isMDXComponent=!0}}]);