// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function r(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var t=r(Object.freeze({__proto__:null,default:{}})),n={flags:"r",mode:438},o=t.open,a=n;var u=function(e,r,t,n){var u=arguments.length;return 2===u?o(e,a.flags,a.mode,r):3===u?o(e,r,a.mode,t):void o(e,r,t,n)},d=t.openSync,l=n;var c=function(e,r,t){var n,o;n=arguments.length;try{o=1===n?d(e,l.flags,l.mode):d(e,r,2===n?l.mode:t)}catch(e){return e}return o},f=u,i=c;e(f,"sync",i);var s=f;export{s as default,i as sync};
//# sourceMappingURL=index.mjs.map
