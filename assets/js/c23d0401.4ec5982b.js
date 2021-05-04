(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(8),o=(n(0),n(268)),r=n(275),c={id:"compose_api",title:"Compose API",sidebar_label:"Compose API"},s={unversionedId:"advanced/compose_api",id:"advanced/compose_api",isDocsHomePage:!1,title:"Compose API",description:"The compose API can compose a config similarly to @hydra.main() anywhere in the code.",source:"@site/docs/advanced/compose_api.md",slug:"/advanced/compose_api",permalink:"/docs/next/advanced/compose_api",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/compose_api.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1620153382,formattedLastUpdatedAt:"5/4/2021",sidebar_label:"Compose API",sidebar:"docs",previous:{title:"Structured Configs example",permalink:"/docs/next/advanced/instantiate_objects/structured_config"},next:{title:"Hydra plugins types",permalink:"/docs/next/advanced/plugins"}},l=[{value:"When to use the Compose API",id:"when-to-use-the-compose-api",children:[]},{value:"Initialization methods",id:"initialization-methods",children:[]},{value:"Code example",id:"code-example",children:[]},{value:"API Documentation",id:"api-documentation",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The compose API can compose a config similarly to ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," anywhere in the code.",Object(o.b)("br",{parentName:"p"}),"\n","Prior to calling compose(), you have to initialize Hydra: This can be done by using the standard ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()"),"\nor by calling one of the initialization methods listed below."),Object(o.b)("h3",{id:"when-to-use-the-compose-api"},"When to use the Compose API"),Object(o.b)("p",null,"The Compose API is useful when ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," is not applicable.\nFor example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inside a Jupyter notebook (",Object(o.b)("a",{parentName:"li",href:"/docs/next/advanced/jupyter_notebooks"},"Example"),")"),Object(o.b)("li",{parentName:"ul"},"Inside a unit test (",Object(o.b)("a",{parentName:"li",href:"/docs/next/advanced/unit_testing"},"Example"),")"),Object(o.b)("li",{parentName:"ul"},"In parts of your application that does not have access to the command line (",Object(o.b)(r.b,{to:"examples/advanced/ad_hoc_composition",mdxType:"GithubLink"},"Example"),")."),Object(o.b)("li",{parentName:"ul"},"To compose multiple configuration objects (",Object(o.b)(r.b,{to:"examples/advanced/ray_example/ray_compose_example.py",mdxType:"GithubLink"},"Example with Ray"),").")),Object(o.b)("div",{class:"alert alert--info",role:"alert"},"Please avoid using the Compose API in cases where ",Object(o.b)("b",null,"@hydra.main()")," can be used. Doing so forfeits many of the benefits of Hydra (e.g., Tab completion, Multirun, Working directory management, Logging management and more)"),Object(o.b)("h3",{id:"initialization-methods"},"Initialization methods"),Object(o.b)("p",null,"There are 3 initialization methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialize()"),": Initialize with a config path relative to the caller"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialize_config_module()")," : Initialize with config_module (absolute)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialize_config_dir()")," : Initialize with a config_dir on the file system (absolute)")),Object(o.b)("p",null,"All 3 can be used as methods or contexts.\nWhen used as methods, they are initializing Hydra globally and should only be called once.\nWhen used as contexts, they are initializing Hydra within the context can be used multiple times."),Object(o.b)("h3",{id:"code-example"},"Code example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from hydra import compose, initialize\nfrom omegaconf import OmegaConf\n\nif __name__ == "__main__":\n    # context initialization\n    with initialize(config_path="conf", job_name="test_app"):\n        cfg = compose(config_name="config", overrides=["db=mysql", "db.user=me"])\n        print(OmegaConf.to_yaml(cfg))\n\n    # global initialization\n    initialize(config_path="conf", job_name="test_app")\n    cfg = compose(config_name="config", overrides=["db=mysql", "db.user=me"])\n    print(OmegaConf.to_yaml(cfg))\n')),Object(o.b)("h3",{id:"api-documentation"},"API Documentation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Compose API"',title:'"Compose','API"':!0},'def compose(\n    config_name: Optional[str] = None,\n    overrides: List[str] = [],\n    return_hydra_config: bool = False,\n) -> DictConfig:\n    """\n    :param config_name: the name of the config\n           (usually the file name without the .yaml extension)\n    :param overrides: list of overrides for config file\n    :param return_hydra_config: True to return the hydra config node in the result\n    :return: the composed config\n    """\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Relative initialization"',title:'"Relative','initialization"':!0},'def initialize(\n    config_path: Optional[str] = None,\n    job_name: Optional[str] = "app",\n    caller_stack_depth: int = 1,\n) -> None:\n    """\n    Initializes Hydra and add the config_path to the config search path.\n    config_path is relative to the parent of the caller.\n    Hydra detects the caller type automatically at runtime.\n\n    Supported callers:\n    - Python scripts\n    - Python modules\n    - Unit tests\n    - Jupyter notebooks.\n    :param config_path: path relative to the parent of the caller\n    :param job_name: the value for hydra.job.name (By default it is automatically detected based on the caller)\n    :param caller_stack_depth: stack depth of the caller, defaults to 1 (direct caller).\n    """\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Initialzing with config module"',title:'"Initialzing',with:!0,config:!0,'module"':!0},'def initialize_config_module(config_module: str, job_name: str = "app") -> None:\n    """\n    Initializes Hydra and add the config_module to the config search path.\n    The config module must be importable (an __init__.py must exist at its top level)\n    :param config_module: absolute module name, for example "foo.bar.conf".\n    :param job_name: the value for hydra.job.name (default is \'app\')\n    """\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Initialzing with config directory"',title:'"Initialzing',with:!0,config:!0,'directory"':!0},'def initialize_config_dir(config_dir: str, job_name: str = "app") -> None:\n    """\n    Initializes Hydra and add an absolute config dir to the to the config search path.\n    The config_dir is always a path on the file system and is must be an absolute path.\n    Relative paths will result in an error.\n    :param config_dir: absolute file system path\n    :param job_name: the value for hydra.job.name (default is \'app\')\n    """\n')))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(r,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},270:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(11),r=n(269),c=n(7),s=Object(i.createContext)({collectLink:function(){}}),l=n(271),u=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,f=e.to,m=e.href,b=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(l.b)().withBaseUrl,_=Object(i.useContext)(s),w=f||m,x=Object(r.a)(w),A=null==w?void 0:w.replace("pathname://",""),D=void 0!==A?(n=A,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(i.useRef)(!1),C=p?o.e:o.c,N=c.default.canUseIntersectionObserver;Object(i.useEffect)((function(){return!N&&x&&window.docusaurus.prefetch(D),function(){N&&d&&d.disconnect()}}),[D,N,x]);var I=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,z=!D||!x||I;return D&&x&&!I&&!g&&_.collectLink(D),z?a.a.createElement("a",Object.assign({href:D},w&&!x&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(C,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(D),P.current=!0)},innerRef:function(e){var t,n;N&&e&&x&&(t=e,n=function(){window.docusaurus.prefetch(D)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:D||""},p&&{isActive:h,activeClassName:b}))}},271:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var i=n(10),a=n(269);function o(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,c=void 0!==r&&r,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},272:function(e,t,n){try{e.exports=n(273)}catch(a){var i={};e.exports={useAllDocsData:function(){return i},useActivePluginAndVersion:function(){}}}},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var i=n(23),a=n(38),o=n(274);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=i.useLocation().pathname;return o.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=i.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=i.useLocation().pathname;return o.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=i.useLocation().pathname;return o.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=i.useLocation().pathname;return o.getDocVersionSuggestions(n,a)}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var i=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!i.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!i.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,o,r=t.getActiveVersion(e,n),c=null==r?void 0:r.docs.find((function(e){return!!i.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:r,activeDoc:c,alternateDocVersions:c?(a=c.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var i=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),o=a.activeVersion!==i;return{latestDocSuggestion:o?null==a?void 0:a.alternateDocVersions[i.name]:void 0,latestVersionSuggestion:o?i:void 0}}},275:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var i=n(3),a=n(0),o=n.n(a),r=n(270),c=n(10),s=n(272);function l(e){return o.a.createElement(r.a,Object(i.a)({},e,{to:(t=e.to,a=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(l,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);