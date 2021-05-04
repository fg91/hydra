(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(268)),o={id:"terminology",title:"Terminology"},c={unversionedId:"advanced/terminology",id:"advanced/terminology",isDocsHomePage:!1,title:"Terminology",description:"This page describes some common concepts in Hydra, most of which are covered in greater details throughout the documentation.",source:"@site/docs/advanced/terminology.md",slug:"/advanced/terminology",permalink:"/docs/next/advanced/terminology",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/terminology.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1620153382,formattedLastUpdatedAt:"5/4/2021",sidebar:"docs",previous:{title:"Optuna Sweeper plugin",permalink:"/docs/next/plugins/optuna_sweeper"},next:{title:"Hydra's command line flags",permalink:"/docs/next/advanced/hydra-command-line-flags"}},l=[{value:"Input Configs",id:"input-configs",children:[{value:"Config files",id:"config-files",children:[]},{value:"Structured Config",id:"structured-config",children:[]}]},{value:"Other configs",id:"other-configs",children:[]},{value:"Overrides",id:"overrides",children:[]},{value:"Defaults List",id:"defaults-list",children:[]},{value:"Config Group",id:"config-group",children:[]},{value:"Config Group Option",id:"config-group-option",children:[]},{value:"Package",id:"package",children:[]},{value:"Example of Core Concepts",id:"example-of-core-concepts",children:[]},{value:"Config Search Path",id:"config-search-path",children:[]},{value:"Plugins",id:"plugins",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page describes some common concepts in Hydra, most of which are covered in greater details throughout the documentation.\nExamples of many of the following concepts are in the ",Object(i.b)("a",{parentName:"p",href:"#example-of-core-concepts"},"Examples section"),"."),Object(i.b)("h2",{id:"input-configs"},"Input Configs"),Object(i.b)("p",null,"Input configs are building blocks used to construct the ",Object(i.b)("a",{parentName:"p",href:"#output-config"},"Output Config")," consumed by the application.\nThey can be grouped by placing them in ",Object(i.b)("a",{parentName:"p",href:"#config-group"},"Config Groups"),"."),Object(i.b)("h3",{id:"config-files"},"Config files"),Object(i.b)("p",null,"Config files are form of input configs in ",Object(i.b)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," format. They can exist in the file system or\nin a Python module."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example config file',title:'"Example',config:!0,file:!0},"user:\n  name: James Bond\n  age: 7\n")),Object(i.b)("h3",{id:"structured-config"},"Structured Config"),Object(i.b)("p",null,"This term has two common meanings:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A class decorated with ",Object(i.b)("a",{parentName:"li",href:"https://docs.python.org/3/library/dataclasses.html"},"@dataclass")," or ",Object(i.b)("a",{parentName:"li",href:"https://www.attrs.org/en/stable/"},"@attr.s"),", or an instance of such a class which is intended to be used as config.  "),Object(i.b)("li",{parentName:"ol"},"A Config object initialized from a class or object as defined in 1. Structured Configs provide additional type information that enables static and runtime type checking.")),Object(i.b)("p",null,"The two primary patterns for using Structured Configs are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As an ",Object(i.b)("a",{parentName:"li",href:"#input-configs"},"Input Config"),"."),Object(i.b)("li",{parentName:"ul"},"As a schema validating Config Files and command line arguments.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Example Schema"',title:'"Example','Schema"':!0},"@dataclass\nclass User:\n  name: str\n  age: int\n")),Object(i.b)("h2",{id:"other-configs"},"Other configs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Primary Config"),": The input config named in ",Object(i.b)("a",{parentName:"p",href:"/docs/next/tutorials/basic/your_first_app/config_file"},Object(i.b)("strong",{parentName:"a"},"@hydra.main()"))," or in the ",Object(i.b)("a",{parentName:"p",href:"/docs/next/advanced/compose_api"},Object(i.b)("strong",{parentName:"a"},"Compose API")),".",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Output Config"),": A config composed from the ",Object(i.b)("a",{parentName:"p",href:"#input-configs"},"Input Configs")," and ",Object(i.b)("a",{parentName:"p",href:"#overrides"},"Overrides")," by ",Object(i.b)("strong",{parentName:"p"},"@hydra.main()"),", or the Compose API."),Object(i.b)("h2",{id:"overrides"},"Overrides"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"override_grammar/basic"},"Overrides")," are strings that can be used to manipulate the config composition process.\nThis includes updating, adding and deleting config values and ",Object(i.b)("a",{parentName:"p",href:"#defaults-list"},"Defaults List")," options.  "),Object(i.b)("p",null,"Overrides can be used in the command line and in the ",Object(i.b)("a",{parentName:"p",href:"/docs/next/advanced/compose_api"},"Compose API"),".",Object(i.b)("br",{parentName:"p"}),"\n","In the examples below, ",Object(i.b)("inlineCode",{parentName:"p"},"key=value")," is an override:"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Override in the command line"',title:'"Override',in:!0,the:!0,command:!0,'line"':!0},"$ python my_app.py key=value\n\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Override used in the Compose API"',title:'"Override',used:!0,in:!0,the:!0,Compose:!0,'API"':!0},'cfg = compose(config_name, \n              overrides=["key=value"])\n')))),Object(i.b)("h2",{id:"defaults-list"},"Defaults List"),Object(i.b)("p",null,"A list in an ",Object(i.b)("a",{parentName:"p",href:"#input-configs"},"Input Config")," that instructs Hydra how compose the config. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Defaults List in a YAML config"',title:'"Defaults',List:!0,in:!0,a:!0,YAML:!0,'config"':!0},"defaults:\n  - db: mysql      # An overridable defaults list entry\n  - schema/school  # A non-overridable defaults list entry\n")),Object(i.b)("h2",{id:"config-group"},"Config Group"),Object(i.b)("p",null,"A Config Group is directory in the ",Object(i.b)("a",{parentName:"p",href:"#config-search-path"},"Config Search Path")," that contains ",Object(i.b)("a",{parentName:"p",href:"#input-configs"},"Input Configs"),".\nConfig Groups can be nested, and in that case the path elements are separated by a forward slash ('/') regardless of the operating system."),Object(i.b)("h2",{id:"config-group-option"},"Config Group Option"),Object(i.b)("p",null,"An Input Config in a Config Group. When used in a Defaults List, a Config Group Option can be a single Input Config, or a list of Input Configs from the same Config Group. "),Object(i.b)("h2",{id:"package"},"Package"),Object(i.b)("p",null,"A Package is the path to node in a config. By default, the Package of a Config Group Option is derived from the Config Group.\n",Object(i.b)("em",{parentName:"p"},"e.g:")," Configs in ",Object(i.b)("strong",{parentName:"p"},"mi6/agent")," will have the package ",Object(i.b)("strong",{parentName:"p"},"mi6.agent")," by default."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/docs/next/advanced/overriding_packages#overriding-the-package-via-the-package-directive"},"Package Directive")," specifies the root ",Object(i.b)("a",{parentName:"p",href:"#package"},"Package")," of a ",Object(i.b)("a",{parentName:"p",href:"#input-configs"},"Config File"),". It can appear at the top of YAML config file."),Object(i.b)("h2",{id:"example-of-core-concepts"},"Example of Core Concepts"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n - mi6/agent: james_bond\n\n"))),Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="mi6/agent/james_bond.yaml" {1}',title:'"mi6/agent/james_bond.yaml"',"{1}":!0},"# @package bond.james\ncodename: '007'\n\n"))),Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output config" {1,2}',title:'"Output','config"':!0,"{1,2}":!0},"bond:\n  james:\n    codename: '007'\n")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#input-configs"},"Input Configs"),": ",Object(i.b)("strong",{parentName:"li"},"config.yaml"),", ",Object(i.b)("strong",{parentName:"li"},"mi6/agent/james_bond.yaml")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#config-group"},"Config Group"),": mi6/agent"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#config-group-option"},"Config Group Option"),": james_bond"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#package"},"Packages"),": ",Object(i.b)("strong",{parentName:"li"},"<empty",">"),", ",Object(i.b)("strong",{parentName:"li"},"mi6"),", ",Object(i.b)("strong",{parentName:"li"},"mi6.agent"),", ",Object(i.b)("strong",{parentName:"li"},"mi6.agent.codename")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#package-directive"},"Package directive"),": ",Object(i.b)("strong",{parentName:"li"},"# @package bond.james"),", overriding the default Package for the containing Input Config ")),Object(i.b)("h2",{id:"config-search-path"},"Config Search Path"),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/docs/next/advanced/search_path"},"Config Search Path")," is a list of paths that are searched in order to find configs. It is similar to\nthe Python ",Object(i.b)("a",{parentName:"p",href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"},"PYTHONPATH"),"."),Object(i.b)("h2",{id:"plugins"},"Plugins"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/advanced/plugins"},"Plugins")," extend Hydra's capabilities. Hydra has several plugin types, for examples Launcher and Sweeper."))}p.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);