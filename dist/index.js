"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=u(function(b,y){y.exports={flags:"r",mode:438}});var d=u(function(j,f){
var a=require("fs").open,o=i();function p(r,e,t,s){var n=arguments.length;if(n===2)return a(r,o.flags,o.mode,e);if(n===3)return a(r,e,o.mode,t);a(r,e,t,s)}f.exports=p
});var m=u(function(k,l){
var c=require("fs").openSync,v=i();function x(r,e,t){var s,n;s=arguments.length;try{s===1?n=c(r,v.flags,v.mode):s===2?n=c(r,e,v.mode):n=c(r,e,t)}catch(g){return g}return n}l.exports=x
});var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),O=m();S(q,"sync",O);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
