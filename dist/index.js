"use strict";var x=function(i,f){return function(){return f||i((f={exports:{}}).exports,f),f.exports}};var p=x(function(E,l){
var q=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist');function w(i,f,o,n,u){var e,s,r,v,a;if(i<=0)return n;if(o<0?s=(1-i)*o:s=0,u<0?r=(1-i)*u:r=0,e=m(f[s]),n[r]=e,r+=u,a=1,q(e)===!1)for(a;a<i;a++){if(s+=o,v=m(f[s]),q(v)){e=v;break}v>e&&(e=v),n[r]=e,r+=u}if(q(e))for(a;a<i;a++)n[r]=e,r+=u;return n}l.exports=w
});var R=x(function(F,O){
var b=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-abs/dist');function z(i,f,o,n,u,e,s){var r,v,a,c,t;if(i<=0)return u;if(v=n,a=s,r=k(f[v]),u[a]=r,a+=e,t=1,b(r)===!1)for(t;t<i;t++){if(v+=o,c=k(f[v]),b(c)){r=c;break}c>r&&(r=c),u[a]=r,a+=e}if(b(r))for(t;t<i;t++)u[a]=r,a+=e;return u}O.exports=z
});var j=x(function(G,h){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),B=R();A(g,"ndarray",B);h.exports=g
});var C=j();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
