"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7982],{4907:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var a=r(6687);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),s=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),c=s(r),m=n,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(k,o(o({ref:e},p),{},{components:r})):a.createElement(k,o({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=c;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:n,o[1]=d;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1192:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var a=r(5177),n=r(4416),i=(r(6687),r(4907)),o=["components"],d={},l="AutoRewardsDistributorV2",s={unversionedId:"protocol/smart-contract-api/fuse/rewards/AutoRewardsDistributorV2",id:"protocol/smart-contract-api/fuse/rewards/AutoRewardsDistributorV2",title:"AutoRewardsDistributorV2",description:"Controller Contract to set tribe per block in Rewards Distributor Admin on Rari",source:"@site/docs/protocol/smart-contract-api/fuse/rewards/AutoRewardsDistributorV2.md",sourceDirName:"protocol/smart-contract-api/fuse/rewards",slug:"/protocol/smart-contract-api/fuse/rewards/AutoRewardsDistributorV2",permalink:"/docs/protocol/smart-contract-api/fuse/rewards/AutoRewardsDistributorV2",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/fuse/rewards/AutoRewardsDistributorV2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AutoRewardsDistributor",permalink:"/docs/protocol/smart-contract-api/fuse/rewards/AutoRewardsDistributor"},next:{title:"IRewardsAdmin",permalink:"/docs/protocol/smart-contract-api/fuse/rewards/IRewardsAdmin"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"init",id:"init",level:3},{value:"_deriveRequiredCompSpeed",id:"_deriverequiredcompspeed",level:3},{value:"getNewRewardSpeed",id:"getnewrewardspeed",level:3},{value:"Return Values",id:"return-values",level:4},{value:"setAutoRewardsDistribution",id:"setautorewardsdistribution",level:3},{value:"setRewardsDistributorAdmin",id:"setrewardsdistributoradmin",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Events",id:"events",level:2},{value:"SpeedChanged",id:"speedchanged",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"RewardsDistributorAdminChanged",id:"rewardsdistributoradminchanged",level:3},{value:"Parameters",id:"parameters-3",level:4}],c={toc:u};function m(t){var e=t.components,r=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"autorewardsdistributorv2"},"AutoRewardsDistributorV2"),(0,i.kt)("p",null,"Controller Contract to set tribe per block in Rewards Distributor Admin on Rari"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address coreAddress,\n    contract IRewardsDistributorAdmin _rewardsDistributorAdmin,\n    contract ITribalChief _tribalChief,\n    contract StakingTokenWrapper _stakedTokenWrapper,\n    address _underlying,\n    bool _isBorrowIncentivized,\n    contract Unitroller _comptroller\n) public\n")),(0,i.kt)("p",null,"constructor function"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"coreAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"address of core contract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_rewardsDistributorAdmin")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract IRewardsDistributorAdmin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"address of rewards distributor admin contract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_tribalChief")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract ITribalChief"),(0,i.kt)("td",{parentName:"tr",align:"left"},"address of tribalchief contract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_stakedTokenWrapper")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract StakingTokenWrapper"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the stakedTokenWrapper this contract controls rewards for")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_underlying")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"address of the underlying for the cToken")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_isBorrowIncentivized")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean that incentivizes borrow or supply")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_comptroller")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract Unitroller"),(0,i.kt)("td",{parentName:"tr",align:"left"},"address of the comptroller contract")))),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function init() external\n")),(0,i.kt)("h3",{id:"_deriverequiredcompspeed"},"_deriveRequiredCompSpeed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _deriveRequiredCompSpeed() internal returns (uint256 compSpeed)\n")),(0,i.kt)("p",null,"helper function that gets all needed state from the TribalChief contract\nbased on this state, it then calculates what the compSpeed should be."),(0,i.kt)("h3",{id:"getnewrewardspeed"},"getNewRewardSpeed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getNewRewardSpeed() public returns (uint256 newCompSpeed, bool updateNeeded)\n")),(0,i.kt)("p",null,"function to get the new comp speed and figure out if an update is needed"),(0,i.kt)("h4",{id:"return-values"},"Return Values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newCompSpeed")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the newly calculated compSpeed based on allocation points in the TribalChief")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updateNeeded")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean indicating whether the new compSpeed is not equal to the existing compSpeed")))),(0,i.kt)("h3",{id:"setautorewardsdistribution"},"setAutoRewardsDistribution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function setAutoRewardsDistribution() external\n")),(0,i.kt)("p",null,"function to automatically set the rewards speed on the RewardsDistributor contract\nthrough the RewardsDistributorAdmin"),(0,i.kt)("h3",{id:"setrewardsdistributoradmin"},"setRewardsDistributorAdmin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function setRewardsDistributorAdmin(\n    contract IRewardsDistributorAdmin _newRewardsDistributorAdmin\n) external\n")),(0,i.kt)("p",null,"API to point to a new rewards distributor admin contract"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_newRewardsDistributorAdmin")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract IRewardsDistributorAdmin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the address of the new RewardsDistributorAdmin contract")))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"speedchanged"},"SpeedChanged"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event SpeedChanged(\n    uint256 newSpeed\n)\n")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newSpeed")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"rewardsdistributoradminchanged"},"RewardsDistributorAdminChanged"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event RewardsDistributorAdminChanged(\n    contract IRewardsDistributorAdmin oldRewardsDistributorAdmin,\n    contract IRewardsDistributorAdmin newRewardsDistributorAdmin\n)\n")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"oldRewardsDistributorAdmin")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract IRewardsDistributorAdmin"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newRewardsDistributorAdmin")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract IRewardsDistributorAdmin"),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);