(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(268)),o={id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},c={unversionedId:"upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",id:"upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",isDocsHomePage:!1,title:"Changes to @hydra.main() and hydra.initialize()",description:"Prior to Hydra 1.1, @hydra.main() and hydra.initialize() default config path was the directory containing the Python app (calling @hydra.main() or hydra.initialize()).",source:"@site/docs/upgrades/1.0_to_1.1/hydra_main_config_path.md",slug:"/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",permalink:"/docs/next/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/1.0_to_1.1/hydra_main_config_path.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1620153382,formattedLastUpdatedAt:"5/4/2021",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/upgrades/intro"},next:{title:"Changes to default composition order",permalink:"/docs/next/upgrades/1.0_to_1.1/default_composition_order"}},d=[{value:"Dedicated config directory",id:"dedicated-config-directory",children:[]},{value:"No config directory",id:"no-config-directory",children:[]},{value:"Using the application directory",id:"using-the-application-directory",children:[]}],p={toc:d};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Prior to Hydra 1.1, ",Object(i.b)("strong",{parentName:"p"},"@hydra.main()")," and ",Object(i.b)("strong",{parentName:"p"},"hydra.initialize()")," default ",Object(i.b)("inlineCode",{parentName:"p"},"config path")," was the directory containing the Python app (calling ",Object(i.b)("strong",{parentName:"p"},"@hydra.main()")," or ",Object(i.b)("strong",{parentName:"p"},"hydra.initialize()"),")."),Object(i.b)("p",null,"This can cause unexpected behavior:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sibling directories are interpreted as config groups, which can lead to surprising results (See ",Object(i.b)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/1533"},"#1533"),")."),Object(i.b)("li",{parentName:"ul"},"The subtree added automatically can have many files/directories - which will cause ",Object(i.b)("strong",{parentName:"li"},"--help")," to be very slow as it's scanning for all config groups/config files (See ",Object(i.b)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/759"},"#759"),").")),Object(i.b)("p",null,"To address these issues, Hydra 1.1 issues a warning if the config_path is not specified.",Object(i.b)("br",{parentName:"p"}),"\n","Your options are as follows:"),Object(i.b)("h3",{id:"dedicated-config-directory"},"Dedicated config directory"),Object(i.b)("p",null,'For applications with config files, specify a directory like "conf" to use a dedicated config directory relative to the application.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf")\n# or:\nhydra.initialize(config_path="conf")\n')),Object(i.b)("h3",{id:"no-config-directory"},"No config directory"),Object(i.b)("p",null,"For applications that do not define config files next to the Python script (typically applications using only Structured Configs), it is recommended that\nyou pass ",Object(i.b)("inlineCode",{parentName:"p"},"None")," as the config_path, indicating that no directory should be added to the config search path.\nThis will become the default in Hydra 1.2."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path=None)\n# or:\nhydra.initialize(config_path=None)\n")),Object(i.b)("h3",{id:"using-the-application-directory"},"Using the application directory"),Object(i.b)("p",null,"Use the directory/module of the Python script.\nThis was the default behavior up to Hydra 1.0.",Object(i.b)("br",{parentName:"p"}),"\n","This is not recommended as it can cause the surprising behavior outlined above."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path=".")\n# or:\nhydra.initialize(config_path=".")\n')))}s.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=s(n),h=r,f=l["".concat(o,".").concat(h)]||l[h]||u[h]||i;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);