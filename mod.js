// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var i,p,_,f;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((p="value"in r)&&(u.call(e,t)||c.call(e,t)?(i=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=i):e[t]=r.value),_="get"in r,f="set"in r,p&&(_||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),f&&l&&l.call(e,t,r.set),e};var i=t;function p(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var _=p(Object.freeze({__proto__:null,default:{}})),f="r",y=438,b=_.open;function v(e,t,r,n){var o=arguments.length;return 2===o?b(e,f,y,t):3===o?b(e,t,y,r):void b(e,t,r,n)}var s=_.openSync;function d(e,t,r){var n,o;n=arguments.length;try{o=1===n?s(e,f,y):s(e,t,2===n?y:r)}catch(e){return e}return o}i(v,"sync",{configurable:!1,enumerable:!1,writable:!1,value:d});export{v as default,d as sync};
//# sourceMappingURL=mod.js.map
