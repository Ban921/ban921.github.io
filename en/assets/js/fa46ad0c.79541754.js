"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[406],{3905:(e,t,A)=>{A.d(t,{Zo:()=>g,kt:()=>b});var n=A(7294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function c(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},g=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),p=o(A),u=r,b=p["".concat(l,".").concat(u)]||p[u]||s[u]||a;return A?n.createElement(b,i(i({ref:t},g),{},{components:A})):n.createElement(b,i({ref:t},g))}));function b(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=A.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var o=2;o<a;o++)i[o]=A[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,A)}u.displayName="MDXCreateElement"},2123:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=A(7462),r=(A(7294),A(3905));const a={slug:"github",title:"github action \u5931\u6557",authors:["ban"],tags:["github","github action"]},i=void 0,c={permalink:"/en/blog/github",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-10-04-github-page-deploy/index.md",source:"@site/blog/2023-10-04-github-page-deploy/index.md",title:"github action \u5931\u6557",description:"\u67d0\u5929\u5728github action \u57f7\u884c\u6642\u767c\u751f\u4ee5\u4e0b\u932f\u8aa4\u8a0a\u606f",date:"2023-10-04T00:00:00.000Z",formattedDate:"October 4, 2023",tags:[{label:"github",permalink:"/en/blog/tags/github"},{label:"github action",permalink:"/en/blog/tags/github-action"}],readingTime:.755,hasTruncateMarker:!1,authors:[{name:"ban",title:"Use Docusaurus",url:"https://github.com/Ban921",imageURL:"https://github.com/ban921.png",key:"ban"}],frontMatter:{slug:"github",title:"github action \u5931\u6557",authors:["ban"],tags:["github","github action"]}},l={authorsImageUrls:[void 0]},o=[],g={toc:o},p="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u67d0\u5929\u5728github action \u57f7\u884c\u6642\u767c\u751f\u4ee5\u4e0b\u932f\u8aa4\u8a0a\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error: The deploy step encountered an error: The process '/usr/bin/git' failed with exit code 128 \u274c\nDeployment failed! \u274c\n")),(0,r.kt)("h1",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,r.kt)("p",null,"\u67e5\u4e86\u4e00\u4e0b\u767c\u73fe\uff0c\u662f\u56e0\u70ba\u6211\u4f7f\u7528GITHUB_TOKEN\u57f7\u884c\u90e8\u7f72\uff0c\u9810\u8a2dGITHUB_TOKEN running workflow \u662f\u53ea\u6709 Read\uff0c\u9700\u8981\u628a\u6b0a\u9650\u6253\u958b\u3002"),(0,r.kt)("h1",{id:"\u89e3\u6c7a\u65b9\u6cd5"},"\u89e3\u6c7a\u65b9\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9032\u5165 GitHub Repository \u7684 Settings \u9801\u9762\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'\u9ede\u64ca\u5de6\u5074\u9078\u55ae\u4e2d\u7684 "Actions" \u5e95\u4e0b\u7684 "General"\u3002'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u622a\u5716 2023-10-04 \u4e0b\u53489.54.42.png",src:A(3436).Z,width:"317",height:"92"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'\u52fe\u9078 "Read and write permissions" \u6b0a\u9650\uff0c\u4fdd\u5b58\u66f4\u6539\u3002'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u622a\u5716 2023-10-04 \u4e0b\u53489.54.48.png",src:A(3824).Z,width:"795",height:"154"})))),(0,r.kt)("h1",{id:"ref"},"ref"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_42282187/article/details/124766382"},"\u3010Git\u3011workflows \u90e8\u7f72 vuepress \u9519\u8bef\u201cThe process \u2018/usr/bin/git\u2018 failed with exit code 128\u201c_the process '/usr/bin/git' failed with exit code 1-CSDN\u535a\u5ba2")))}s.isMDXComponent=!0},3436:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},3824:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/\u622a\u5716 2023-10-04 \u4e0b\u53489.54.48-71fd8bc22c38453f0e517f0e353dc77e.png"}}]);