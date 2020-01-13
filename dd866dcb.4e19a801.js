(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"metadata",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(185)),i={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},u=[{value:"Configuring hydra.job.override_dirname",id:"configuring-hydrajoboverride_dirname",children:[]},{value:"Customizing outputs with substitution through the CLI",id:"customizing-outputs-with-substitution-through-the-cli",children:[]}],c={id:"configure_hydra/workdir",title:"Customizing working directory pattern",description:"Run output directory grouped by day:",source:"@site/docs/configure_hydra/workdir.md",permalink:"/docs/next/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/configure_hydra/workdir.md",version:"next",lastUpdatedBy:"omry",lastUpdatedAt:1578564277,sidebar_label:"Customizing working directory pattern",sidebar:"Docs",previous:{title:"Customizing logging",permalink:"/docs/next/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/next/configure_hydra/app_help"}},d={rightToc:u,metadata:c},l="wrapper";function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Run output directory grouped by day:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),Object(o.b)("p",null,"Sweep sub directory contains the the job number and the override parameters for the job instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  sweep:\n    subdir: ${hydra.job.num}_${hydra.job.num}_${hydra.job.override_dirname}\n")),Object(o.b)("p",null,"Run output directory grouped by job name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),Object(o.b)("p",null,"Run output directory can contain user configuration variables:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n\n")),Object(o.b)("p",null,"Run output directory can contain override parameters for the job"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")),Object(o.b)("h3",{id:"configuring-hydrajoboverride_dirname"},"Configuring hydra.job.override_dirname"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hydra.job.override_dirname")," can be configured via hydra.job.config.override_dirname.\nYou can exclude keys such as ",Object(o.b)("inlineCode",{parentName:"p"},"random_seed")," or change the separator used to construct override_dirname."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job:\n    config:\n      # configuration for the ${hydra.job.override_dirname} runtime variable\n      override_dirname:\n        kv_sep: '='\n        item_sep: ','\n        exclude_keys: []\n")),Object(o.b)("h3",{id:"customizing-outputs-with-substitution-through-the-cli"},"Customizing outputs with substitution through the CLI"),Object(o.b)("p",null,"Outputs can also be configured through the CLI, like any other configuration."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"python train.py model.nb_layers=3 hydra.run.dir=3_layers")),Object(o.b)("p",null,"This feature can become really powerful to write multiruns without boilerplate using substitution."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"python train.py --multirun model.nb_layers=1,2,3,5 hydra.sweep.dir=multiruns/layers_effect hydra.sweep.subdir=\\","$","{model.nb_layers}")),Object(o.b)("p",null,"With bash, be careful to escape the $ symbol. Otherwise, bash will try to resolve the substitution, instead of passing it to Hydra."))}b.isMDXComponent=!0},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},u=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),l=i(r),b=n,s=l[u+"."+b]||l[b]||d[b]||o;return r?a.a.createElement(s,Object.assign({},{ref:t},c,{components:r})):a.a.createElement(s,Object.assign({},{ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=l;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[c]="string"==typeof e?e:n,i[1]=u;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);