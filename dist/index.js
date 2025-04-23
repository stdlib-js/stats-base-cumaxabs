"use strict";var m=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var j=m(function(K,g){
var p=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-abs/dist');function C(e,i,f,q,a,o,b){var v,n,u,t,s,c,r,l,x;if(v=i.data,n=a.data,u=i.accessors[0],t=a.accessors[1],c=q,r=b,s=P(u(v,c)),t(n,r,s),r+=o,x=1,p(s)===!1)for(x;x<e;x++){if(c+=f,l=P(u(v,c)),p(l)){s=l;break}l>s&&(s=l),t(n,r,s),r+=o}if(p(s))for(x;x<e;x++)t(n,r,s),r+=o;return a}g.exports=C
});var y=m(function(L,h){
var k=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),D=j();function E(e,i,f,q,a,o,b){var v,n,u,t,s,c,r;if(e<=0)return a;if(t=R(i),s=R(a),t.accessorProtocol||s.accessorProtocol)return D(e,t,f,q,s,o,b),a;if(n=q,u=b,v=O(i[n]),a[u]=v,u+=o,r=1,k(v)===!1)for(r;r<e;r++){if(n+=f,c=O(i[n]),k(c)){v=c;break}c>v&&(v=c),a[u]=v,u+=o}if(k(v))for(r;r<e;r++)a[u]=v,u+=o;return a}h.exports=E
});var A=m(function(M,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(e,i,f,q,a){var o=w(e,f),b=w(e,a);return F(e,i,f,o,q,a,b)}z.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),I=y();H(B,"ndarray",I);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
