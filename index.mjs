// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var n=t(Object.freeze({__proto__:null,default:{}})),r="r",o=438,u=n.open;function i(e,t,n,i){var a=arguments.length;return 2===a?u(e,r,o,t):3===a?u(e,t,o,n):void u(e,t,n,i)}var a=n.openSync;function p(e,t,n){var u,i;u=arguments.length;try{i=1===u?a(e,r,o):a(e,t,2===u?o:n)}catch(e){return e}return i}e(i,"sync",p);export{i as default,p as sync};
//# sourceMappingURL=index.mjs.map
