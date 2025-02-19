"use strict";var l=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var j=l(function(Q,g){
var p=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-abs/dist');function E(e,i,f,q,a,c,b){var s,t,u,n,v,o,r,m,x;if(s=i.data,t=a.data,u=i.accessors[0],n=a.accessors[1],o=q,r=b,v=P(u(s,o)),n(t,r,v),r+=c,x=1,p(v)===!1)for(x;x<e;x++){if(o+=f,m=P(u(s,o)),p(m)){v=m;break}m>v&&(v=m),n(t,r,v),r+=c}if(p(v))for(x;x<e;x++)n(t,r,v),r+=c;return a}g.exports=E
});var y=l(function(S,h){
var k=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),F=j();function G(e,i,f,q,a,c,b){var s,t,u,n,v,o,r;if(e<=0)return a;if(n=R(i),v=R(a),n.accessorProtocol||v.accessorProtocol)return F(e,n,f,q,v,c,b),a;if(t=q,u=b,s=O(i[t]),a[u]=s,u+=c,r=1,k(s)===!1)for(r;r<e;r++){if(t+=f,o=O(i[t]),k(o)){s=o;break}o>s&&(s=o),a[u]=s,u+=c}if(k(s))for(r;r<e;r++)a[u]=s,u+=c;return a}h.exports=G
});var A=l(function(T,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),H=y();function I(e,i,f,q,a){var c=w(e,f),b=w(e,a);return H(e,i,f,c,q,a,b)}z.exports=I
});var D=l(function(U,C){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),K=y();J(B,"ndarray",K);C.exports=B
});var L=D();module.exports=L;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
