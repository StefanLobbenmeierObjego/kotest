"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[21210],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={id:"assertion_mode",title:"Assertion Mode",slug:"assertion-mode.html"},c=void 0,l={unversionedId:"assertions/assertion_mode",id:"version-5.4/assertions/assertion_mode",title:"Assertion Mode",description:"If you are using Kotest framework alongside Kotest assertions, you can ask Kotest to fail the build, or output a warning to stderr, if a test is executed that does not execute an assertion.",source:"@site/versioned_docs/version-5.4/assertions/assertion_mode.md",sourceDirName:"assertions",slug:"/assertions/assertion-mode.html",permalink:"/docs/5.4/assertions/assertion-mode.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/assertions/assertion_mode.md",tags:[],version:"5.4",frontMatter:{id:"assertion_mode",title:"Assertion Mode",slug:"assertion-mode.html"},sidebar:"assertions",previous:{title:"Inspectors",permalink:"/docs/5.4/assertions/inspectors.html"},next:{title:"Core",permalink:"/docs/5.4/assertions/core-matchers.html"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you are using Kotest framework alongside Kotest assertions, you can ask Kotest to fail the build, or output a warning to stderr, if a test is executed that does not execute an assertion."),(0,s.kt)("p",null,"To do this, set ",(0,s.kt)("inlineCode",{parentName:"p"},"assertionMode")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"AssertionMode.Error")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"AssertionMode.Warn")," inside a spec. For example."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MySpec : FunSpec() {\n   init {\n      assertions = AssertionMode.Error\n      test("this test has no assertions") {\n         val name = "sam"\n         name.length == 3 // this isn\'t actually testing anything\n      }\n   }\n}\n')),(0,s.kt)("p",null,"Running this test will output something like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test 'this test has no assertions' did not invoke any assertions\n")),(0,s.kt)("p",null,"If we want to set this globally, we can do so in ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.4/framework/project-config.html"},"project config")," or via the system property ",(0,s.kt)("inlineCode",{parentName:"p"},"kotest.framework.assertion.mode"),"."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Assertion mode only works for Kotest assertions and not other assertion libraries.")))}m.isMDXComponent=!0}}]);