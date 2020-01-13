(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"rightToc",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(1),o=t(9),s=(t(0),t(185)),r={id:"objects",title:"Creating objects",sidebar_label:"Creating objects"},c=[],i={id:"version-0.11/patterns/objects",title:"Creating objects",description:"One of the best ways to drive different behavior in the application is to instantiate different implementations of an interface.",source:"@site/versioned_docs/version-0.11/patterns/objects.md",permalink:"/docs/patterns/objects",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/patterns/objects.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1578885213,sidebar_label:"Creating objects",sidebar:"version-0.11/Docs",previous:{title:"Debugging",permalink:"/docs/tutorial/debugging"},next:{title:"Specializing configuration",permalink:"/docs/patterns/specializing_config"}},l={rightToc:c,metadata:i},p="wrapper";function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)(p,Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"One of the best ways to drive different behavior in the application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),Object(s.b)("p",null,"A Database connection interface may have a ",Object(s.b)("inlineCode",{parentName:"p"},"connect()")," method, implemented by different database drivers."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'class DBConnection:\n    def connect(self):\n        pass\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, host, user, password):\n        self.host = host\n        self.user = user\n        self.password = password\n\n    def connect(self):\n        print(\n            "MySQL connecting to {} with user={} and password={}".format(\n                self.host, self.user, self.password\n            )\n        )\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, host, user, password, database):\n        self.host = host\n        self.user = user\n        self.password = password\n        self.database = database\n\n    def connect(self):\n        print(\n            "PostgreSQL connecting to {} "\n            "with user={} and password={} and database={}".format(\n                self.host, self.user, self.password, self.database\n            )\n        )\n')),Object(s.b)("p",null,"To support this, we can have a parallel config structure:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),Object(s.b)("p",null,"Config file: ",Object(s.b)("inlineCode",{parentName:"p"},"config.yaml")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - db: mysql\n")),Object(s.b)("p",null,"Config file: ",Object(s.b)("inlineCode",{parentName:"p"},"db/mysql.yaml")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"db:\n  class: tutorial.objects_example.objects.MySQLConnection\n  params:\n    host: localhost\n    user: root\n    password: 1234\n")),Object(s.b)("p",null,"db/postgresql.yaml:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"db:\n  class: tutorial.objects_example.objects.PostgreSQLConnection\n  params:\n    host: localhost\n    user: root\n    password: 1234\n    database: tutorial\n")),Object(s.b)("p",null,"With this, you can instantiate the object from the configuration with a single line of code:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'@hydra.main(config_path="conf/config.yaml")\ndef my_app(cfg):\n    connection = hydra.utils.instantiate(cfg.db)\n    connection.connect()\n')),Object(s.b)("p",null,"MySQL is the default per the ",Object(s.b)("inlineCode",{parentName:"p"},"config.yaml")," file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n")),Object(s.b)("p",null,"Change the instantiated object class and override values from the command line:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py db=postgresql db.params.password=abcde\nPostgreSQL connecting to localhost with user=root and password=abcde and database=tutorial\n")))}b.isMDXComponent=!0},185:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a),s=o.a.createContext({}),r=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=r(e.components);return o.a.createElement(s.Provider,{value:n},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=r(t),b=a,d=p[c+"."+b]||p[b]||l[b]||s;return t?o.a.createElement(d,Object.assign({},{ref:n},i,{components:t})):o.a.createElement(d,Object.assign({},{ref:n},i))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[i]="string"==typeof e?e:a,r[1]=c;for(var b=2;b<s;b++)r[b]=t[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);