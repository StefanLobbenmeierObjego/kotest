"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[52045],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,s(s({ref:e},p),{},{components:n})):r.createElement(g,s({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17258:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"statistics",title:"Statistics",sidebar_label:"Statistics",slug:"property-test-statistics.html"},l=void 0,c={unversionedId:"proptest/statistics",id:"proptest/statistics",title:"Statistics",description:"Sometimes you may like to know the types of values being generated by Kotest, to ensure that your generators are",source:"@site/docs/proptest/statistics.md",sourceDirName:"proptest",slug:"/proptest/property-test-statistics.html",permalink:"/docs/next/proptest/property-test-statistics.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/statistics.md",tags:[],version:"current",frontMatter:{id:"statistics",title:"Statistics",sidebar_label:"Statistics",slug:"property-test-statistics.html"},sidebar:"proptest",previous:{title:"Shrinking",permalink:"/docs/next/proptest/property-test-shrinking.html"},next:{title:"Global Configuration",permalink:"/docs/next/proptest/property-test-global-config.html"}},p={},u=[{value:"Labels",id:"labels",level:2},{value:"Report Mode",id:"report-mode",level:3},{value:"Checking Coverage of Statistics",id:"checking-coverage-of-statistics",level:3},{value:"Custom Reports",id:"custom-reports",level:3}],d={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes you may like to know the types of values being generated by Kotest, to ensure that your generators are\nconfigured in the way you expect. Property test ",(0,a.kt)("em",{parentName:"p"},"statistics")," are designed to fulfil this need."),(0,a.kt)("p",null,"The function ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," is the entry point to statistcs and is used to count categories of values.\nWe use this by invoking it inside a property test with the category we want to increment."),(0,a.kt)("p",null,"For example, lets say we wanted to gather statistics on the values of ",(0,a.kt)("inlineCode",{parentName:"p"},"RoundingMode")," used by a ",(0,a.kt)("inlineCode",{parentName:"p"},"BigDecimal"),". We would\ninvoke ",(0,a.kt)("inlineCode",{parentName:"p"},"checkAll")," as normal, passing the rounding mode to the collect function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll(Arb.enum<RoundingMode>(), Arb.bigDecimal()) { mode, decimal ->\n  collect(mode)\n  // test here\n}\n")),(0,a.kt)("p",null,"Now after the test is completed, Kotest will output the test name, and the counts/percentages for each category:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Statistics: [collecting stats] (1000 iterations, 1 args)\n\nHALF_DOWN                                                     142 (14%)\nHALF_UP                                                       141 (14%)\nCEILING                                                       132 (13%)\nFLOOR                                                         122 (12%)\nUP                                                            119 (12%)\nUNNECESSARY                                                   119 (12%)\nHALF_EVEN                                                     118 (12%)\nDOWN                                                          107 (11%)\n")),(0,a.kt)("p",null,"The category we use does not have to be an enum. It can be any object, and you can wrap in conditionals if you want more\ncontrol. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'checkAll(Arb.int()) { k ->\n  when {\n    k % 2 == 0 -> collect("EVEN")\n    else -> collect("ODD")\n  }\n  // test here\n}\n')),(0,a.kt)("h2",{id:"labels"},"Labels"),(0,a.kt)("p",null,"Sometimes you may wish to have orthogonal sets of statistics. For example,\nfor a simple number test, we might want to confirm that a certain percentage are even numbers, and a certain percentage\nare negative. One way would be to have EVEN_POS, EVEN_NEG, ODD_POS, ODD_NEG:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'checkAll(Arb.int()) { k ->\n  when {\n    k > 0 && k % 2 == 0 -> collect("EVEN_POS")\n    k % 2 == 0 -> collect("EVEN_NEG")\n    k > 0 -> collect("ODD_POS")\n    else -> collect("ODD_NEG")\n  }\n  // test here\n}\n')),(0,a.kt)("p",null,"This gives us one set of outputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EVEN_POS                                                       142 (27%)\nEVEN_NEG                                                       141 (23%)\nODD_POS                                                        132 (24%)\nODD_NEG                                                        122 (26%)\n")),(0,a.kt)("p",null,"However, as the combinations grow this will become unwieldy, so Kotest supports labelled statistics. You can think of\nthis as distinct sets of statistics. To use labels, just pass the label name as the first arg to the collect method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'checkAll(Arb.int()) { k ->\n  when {\n    k % 2 == 0 -> collect("even_odd", "EVEN")\n    else -> collect("even_odd", "ODD")\n  }\n  when {\n    k > 0 -> collect("pos_neg", "POS")\n    else -> collect("pos_neg", "NEG")\n  }\n  // test here\n}\n')),(0,a.kt)("p",null,"Now, Kotest will output multiple sets of statistics, with the label name in the title:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Statistics: [collecting labelled stats] (1000 iterations, 1 args) [even_odd]\n\nODD                                                           520 (52%)\nEVEN                                                          480 (48%)\n\n\nStatistics: [collecting labelled stats] (1000 iterations, 1 args) [pos_neg]\n\nNEG                                                           527 (53%)\nPOS                                                           473 (47%)\n")),(0,a.kt)("h3",{id:"report-mode"},"Report Mode"),(0,a.kt)("p",null,"By default, statistics are printed for every property test. There are four modes which can be configured using the global configuration object ",(0,a.kt)("inlineCode",{parentName:"p"},"PropertyTesting"),"."),(0,a.kt)("p",null,"The possible options are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Mode"),(0,a.kt)("th",{parentName:"tr",align:null},"Function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PropertyTesting.statisticsReportMode = StatisticsReportMode.OFF"),(0,a.kt)("td",{parentName:"tr",align:null},"disable all statistics reporting")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PropertyTesting.statisticsReportMode = StatisticsReportMode.OFF"),(0,a.kt)("td",{parentName:"tr",align:null},"enables all statistics reporting")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PropertyTesting.statisticsReportMode = StatisticsReportMode.SUCCESS"),(0,a.kt)("td",{parentName:"tr",align:null},"output statistics only on successful tests")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PropertyTesting.statisticsReportMode = StatisticsReportMode.FAILED"),(0,a.kt)("td",{parentName:"tr",align:null},"output statistics only on failed tests")))),(0,a.kt)("h3",{id:"checking-coverage-of-statistics"},"Checking Coverage of Statistics"),(0,a.kt)("p",null,"If you wish to programmatically assert that certain values are being generated, then you can use the specify constraints\nthat must be met."),(0,a.kt)("p",null,"For example, in our previous rounding example, we can check that at least 10% of inputs are covering HALF_DOWN, and 10%\nare covering FLOOR using ",(0,a.kt)("inlineCode",{parentName:"p"},"withCoveragePercentages"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"withCoveragePercentages(mapOf(RoundingMode.HALF_DOWN to 10.0, RoundingMode.FLOOR to 10.0)) {\n  checkAll(Arb.enum<RoundingMode>(), Arb.bigDecimal()) { mode, decimal ->\n    collect(mode)\n    // use the mode / decimal\n  }\n}\n")),(0,a.kt)("p",null,"If we want to check by absolute numbers rather than percentages, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"withCoverageCounts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"withCoverageCounts(mapOf(RoundingMode.HALF_DOWN to 75, RoundingMode.FLOOR to 75)) {\n  checkAll(Arb.enum<RoundingMode>(), Arb.bigDecimal()) { mode, decimal ->\n    collect(mode)\n    // use the mode / decimal\n  }\n}\n")),(0,a.kt)("h3",{id:"custom-reports"},"Custom Reports"),(0,a.kt)("p",null,"You can customize the report format, or generate reports from the raw data, by using your own instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"StatisticsReporter"),".\nThis is configured via the global configuration object ",(0,a.kt)("inlineCode",{parentName:"p"},"PropertyTesting"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"object MyStatisticsReporter : object : StatisticsReporter { ... }\nPropertyTesting.statisticsReporter = MyStatisticsReporter\n")))}m.isMDXComponent=!0}}]);