(self.webpackChunkMyMapStoreProject=self.webpackChunkMyMapStoreProject||[]).push([[4108],{40188:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},91358:(t,n,e)=>{"use strict";e.d(n,{V:()=>o,vw:()=>i,G$:()=>u,tK:()=>c,MP:()=>f,XQ:()=>a,De:()=>s,Qm:()=>d,GQ:()=>v,NL:()=>E});var r="undefined"!=typeof navigator?navigator.userAgent.toLowerCase():"",o=-1!==r.indexOf("firefox"),i=-1!==r.indexOf("safari")&&-1==r.indexOf("chrom"),u=-1!==r.indexOf("webkit")&&-1==r.indexOf("edge"),c=-1!==r.indexOf("macintosh"),f=window.devicePixelRatio||1,a=function(){var t=!1;try{t=!!document.createElement("canvas").getContext("2d").setLineDash}catch(t){}return t}(),s="geolocation"in navigator,d="ontouchstart"in window,v="PointerEvent"in window,E=!!navigator.msPointerEnabled},2285:(t,n,e)=>{"use strict";e.d(n,{gD:()=>h,Sx:()=>p,U2:()=>w,_Q:()=>P,rM:()=>S,UQ:()=>O,zY:()=>U,bU:()=>x,OP:()=>y,WO:()=>C,Ck:()=>M,vs:()=>R,$A:()=>D});var r,o,i,u,c=e(70295),f=e(21915),a=e(21882),s=e(14194),d=e(48990),v=e(40868),E=e(31564),g=e(84110);function l(t,n,e){var r;if(void 0!==n){for(var o=0,i=t.length;o<i;++o)n[o]=t[o];r=n}else r=t.slice();return r}function h(t,n,e){if(void 0!==n&&t!==n){for(var r=0,o=t.length;r<o;++r)n[r]=t[r];t=n}return t}function p(t){E.IH(t.getCode(),t),(0,g.IH)(t,t,l)}function w(t){return"string"==typeof t?E.U2(t):t||null}function P(t,n,e,r){var o,i=(t=w(t)).getPointResolutionFunc();if(i)o=i(n,e);else if(t.getUnits()==v.default.DEGREES&&!r||r==v.default.DEGREES)o=n;else{var u=C(t,w("EPSG:4326")),f=[e[0]-n/2,e[1],e[0]+n/2,e[1],e[0],e[1]-n/2,e[0],e[1]+n/2];f=u(f,f,2),o=((0,c.Sp)(f.slice(0,2),f.slice(2,4))+(0,c.Sp)(f.slice(4,6),f.slice(6,8)))/2;var a=r?v.METERS_PER_UNIT[r]:t.getMetersPerUnit();void 0!==a&&(o/=a)}return o}function S(t){!function(t){t.forEach(p)}(t),t.forEach((function(n){t.forEach((function(t){n!==t&&(0,g.IH)(n,t,l)}))}))}function O(t,n){return t?"string"==typeof t?w(t):t:w(n)}function m(t){return function(n,e,r){for(var o=n.length,i=void 0!==r?r:2,u=void 0!==e?e:new Array(o),c=0;c<o;c+=i){var f=t([n[c],n[c+1]]);u[c]=f[0],u[c+1]=f[1];for(var a=i-1;a>=2;--a)u[c+a]=n[c+a]}return u}}function U(t,n,e,r){var o=w(t),i=w(n);(0,g.IH)(o,i,m(e)),(0,g.IH)(i,o,m(r))}function x(t,n){var e=R(t,void 0!==n?n:"EPSG:3857","EPSG:4326"),r=e[0];return(r<-180||r>180)&&(e[0]=(0,a.$W)(r+180,360)-180),e}function y(t,n){if(t===n)return!0;var e=t.getUnits()===n.getUnits();return(t.getCode()===n.getCode()||C(t,n)===l)&&e}function C(t,n){var e=t.getCode(),r=n.getCode(),o=(0,g.U2)(e,r);return o||(o=h),o}function M(t,n){return C(w(t),w(n))}function R(t,n,e){return M(n,e)(t,void 0,t.length)}function D(t,n,e){var r=M(n,e);return(0,f.Ne)(t,r)}S(s.LB),S(d.LB),r=d.LB,o=s.LB,i=s.jn,u=s.DE,r.forEach((function(t){o.forEach((function(n){(0,g.IH)(t,n,i),(0,g.IH)(n,t,u)}))}))},49179:(t,n,e)=>{"use strict";function r(){return function(){throw new Error("Unimplemented abstract method.")}()}function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t}e.d(n,{O3:()=>r,XW:()=>o,sq:()=>u,q4:()=>c});var i=0;function u(t){return t.ol_uid||(t.ol_uid=String(++i))}var c="5.3.0"}}]);