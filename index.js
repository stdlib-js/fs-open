// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),_&&l&&l.call(e,t,r.set),e};var f=t,p="r",_=438,d=e.open;function s(e,t,r,n){var o=arguments.length;return 2===o?d(e,p,_,t):3===o?d(e,t,_,r):void d(e,t,r,n)}var y,b=e.openSync;return y=function(e,t,r){var n,o;n=arguments.length;try{o=1===n?b(e,p,_):b(e,t,2===n?_:r)}catch(e){return e}return o},f(s,"sync",{configurable:!1,enumerable:!1,writable:!1,value:y}),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("fs")):"function"==typeof define&&define.amd?define(["fs"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).open=t(e.require$$0);
//# sourceMappingURL=index.js.map
