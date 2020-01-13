(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(9),i=(n(0),n(185)),o={id:"simple_cli",title:"Simple command line application",sidebar_label:"Simple command line application"},c=[],p={id:"version-0.11/tutorial/simple_cli",title:"Simple command line application",description:"This is a simple Hydra application that prints your configuration.",source:"@site/versioned_docs/version-0.11/tutorial/1_simple_cli_app.md",permalink:"/docs/tutorial/simple_cli",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/1_simple_cli_app.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1578885213,sidebar_label:"Simple command line application",sidebar:"version-0.11/Docs",previous:{title:"Getting started",permalink:"/docs/intro"},next:{title:"Configuration file",permalink:"/docs/tutorial/config_file"}},l={rightToc:c,metadata:p},s="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"my_app")," function is a place holder\nfor your code. We will slowly evolve this example to show-case more Hydra features."),Object(i.b)("p",null,"The examples in this tutorial are available ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples"}),"here"),"."),Object(i.b)("p",null,"Python file: ",Object(i.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'import hydra\n\n@hydra.main()\ndef my_app(cfg):\n    print(cfg.pretty())\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cfg")," is an ",Object(i.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"OmegaConf"),"\nobject that holds the configuration for your function.\nYou don't need a deep understanding of OmegaConf for this tutorial."),Object(i.b)("p",null,"We can pass arbitrary command line arguments from which Hydra creates a hierarchical configuration object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db.driver=mysql db.user=omry db.pass=secret\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")))}m.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(n),m=a,d=s[c+"."+m]||s[m]||l[m]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},p,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);