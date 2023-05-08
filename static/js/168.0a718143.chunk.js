"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),s=r(757),c=r.n(s),o=r(809),u=r(791),i=r(689),p=r(273),f={},h=r(184),l=function(){var e=(0,i.UO)().movieId,t=(0,u.useState)([]),r=(0,a.Z)(t,2),s=r[0],l=r[1],v=(0,u.useState)(!1),g=(0,a.Z)(v,2),w=g[0],d=g[1],x=(0,u.useState)(null),m=(0,a.Z)(x,2),b=m[0],k=m[1];return(0,u.useEffect)((function(){var t=new AbortController,r=t.signal;d(!0);var a=function(){var t=(0,n.Z)(c().mark((function t(){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.G.getReviews(e,r);case 3:if(n=t.sent,0!==(a=n.results).length){t.next=8;break}return k("There aren't reviews for this movie yet. Try again later."),t.abrupt("return");case 8:l(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),"AbortError"===t.t0.name?console.log("abort error"):(console.log(t.t0),k("Something went wrong... Please, try again later."));case 14:return t.prev=14,d(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})));return function(){return t.apply(this,arguments)}}();return a(),function(){return t.abort()}}),[e]),(0,h.jsxs)(h.Fragment,{children:[w&&(0,h.jsx)(o.Z,{}),b&&(0,h.jsx)("div",{children:b}),0!==s.length&&(0,h.jsx)("ul",{className:f["review-list"],children:s.map((function(e){var t=e.author,r=e.content,n=e.id,a=e.created_at,s=new Date(a).toLocaleString();return(0,h.jsxs)("li",{className:f.item,children:[(0,h.jsxs)("h3",{children:["Author: ",t]}),(0,h.jsx)("p",{children:r}),(0,h.jsx)("p",{className:f["review-date"],children:s})]},n)}))})]})}},273:function(e,t,r){r.d(t,{G:function(){return h}});var n=r(861),a=r(757),s=r.n(a),c="61a6b843c58046eb2a3a15bde4cbc7b9",o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c),e.next=3,fetch(r,{signal:t});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.status);case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"),e.next=3,fetch(n,{signal:r});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"),e.next=3,fetch(n,{signal:r});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"),e.next=3,fetch(n,{signal:r});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),e.next=3,fetch(n,{signal:r});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h={getTrending:o,getMovies:u,getDetails:i,getCast:p,getReviews:f,imgBaseURL:"https://image.tmdb.org/t/p/w500"}},861:function(e,t,r){function n(e,t,r,n,a,s,c){try{var o=e[s](c),u=o.value}catch(i){return void r(i)}o.done?t(u):Promise.resolve(u).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var c=e.apply(t,r);function o(e){n(c,a,s,o,u,"next",e)}function u(e){n(c,a,s,o,u,"throw",e)}o(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=168.0a718143.chunk.js.map