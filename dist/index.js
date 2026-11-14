"use strict";var m=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(n){throw (a=0, n)}};};var j=m(function(K,g){
var p=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-abs/dist');function C(i,a,n,q,e,o,b){var v,t,u,f,s,c,r,l,x;if(v=a.data,t=e.data,u=a.accessors[0],f=e.accessors[1],c=q,r=b,s=P(u(v,c)),f(t,r,s),r+=o,x=1,p(s)===!1)for(x;x<i;x++){if(c+=n,l=P(u(v,c)),p(l)){s=l;break}l>s&&(s=l),f(t,r,s),r+=o}if(p(s))for(x;x<i;x++)f(t,r,s),r+=o;return e}g.exports=C
});var y=m(function(L,h){
var k=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),D=j();function E(i,a,n,q,e,o,b){var v,t,u,f,s,c,r;if(i<=0)return e;if(f=R(a),s=R(e),f.accessorProtocol||s.accessorProtocol)return D(i,f,n,q,s,o,b),e;if(t=q,u=b,v=O(a[t]),e[u]=v,u+=o,r=1,k(v)===!1)for(r;r<i;r++){if(t+=n,c=O(a[t]),k(c)){v=c;break}c>v&&(v=c),e[u]=v,u+=o}if(k(v))for(r;r<i;r++)e[u]=v,u+=o;return e}h.exports=E
});var A=m(function(M,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(i,a,n,q,e){var o=w(i,n),b=w(i,e);return F(i,a,n,o,q,e,b)}z.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),I=y();H(B,"ndarray",I);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
