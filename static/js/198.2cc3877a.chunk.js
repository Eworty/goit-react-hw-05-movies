"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[198],{856:function(e,t,n){n.d(t,{Z:function(){return f}});var r="MovieList_movie-list__vTqZL",a=n(689),s=n(87),i=n(273),o=n(602),c={"movie-list__item":"MovieListItem_movie-list__item__x0-A3","movie-card":"MovieListItem_movie-card__T0y2W","item-info":"MovieListItem_item-info__S9TK9"},u=n(184),l=function(e){var t=e.poster,n=e.name,r=e.title,l=e.releaseDate,f=e.commonDate,m=e.id,p=(0,a.TH)(),v=t?"".concat(i.G.imgBaseURL).concat(t):o,h=l||f?(l||f).slice(0,4):"unknown";return(0,u.jsx)("li",{className:c["movie-list__item"],children:(0,u.jsx)(s.rU,{to:"/movies/".concat(m),state:{from:p},children:(0,u.jsxs)("div",{className:c["movie-card"],children:[(0,u.jsx)("div",{className:c.thumb,children:(0,u.jsx)("img",{src:v,alt:r||n,width:240,className:c["item-img"]})}),(0,u.jsxs)("div",{className:c["item-info"],children:[(0,u.jsx)("h2",{className:c["item-title"],children:r||n}),(0,u.jsx)("p",{className:c["item-year"],children:h})]})]})})},m)},f=function(e){var t=e.movies;return(0,u.jsx)("ul",{className:r,children:t.map((function(e){var t=e.id,n=e.poster_path,r=e.name,a=e.title,s=e.release_date,i=e.first_air_date;return(0,u.jsx)(l,{id:t,poster:n,name:r,title:a,releaseDate:s,commonDate:i},t)}))})}},198:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),s=n(757),i=n.n(s),o=n(791),c={form:"FilterForm_form__pLxxp",input:"FilterForm_input__NJviq"},u=n(184),l=function(e){var t=e.onSubmit,n=(0,o.useState)(""),r=(0,a.Z)(n,2),s=r[0],i=r[1];return(0,u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===s.trim())return alert("Enter search query...");t(s),i("")},className:c.form,children:[(0,u.jsx)("label",{children:(0,u.jsx)("input",{type:"text",name:s,value:s,onChange:function(e){i(e.currentTarget.value)},className:c.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",placeholder:"Enter query to search movies"})}),(0,u.jsx)("button",{type:"submit",className:c["search-btn"],children:"Search"})]})},f=n(809),m=n(856),p=n(87),v=n(273),h=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],c=(0,o.useState)(!1),h=(0,a.Z)(c,2),d=h[0],g=h[1],x=(0,o.useState)(null),_=(0,a.Z)(x,2),b=_[0],w=_[1],y=(0,p.lr)(),k=(0,a.Z)(y,2),j=k[0],Z=k[1],S=j.get("query");(0,o.useEffect)((function(){if(S){var e=new AbortController,t=e.signal,n=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,v.G.getMovies(S,t);case 4:if(0!==(n=e.sent).results.length){e.next=8;break}return w("Movies with this query weren't found. Please enter valid query and try again!"),e.abrupt("return");case 8:s(n.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("abort error"):(console.log(e.t0),w("Something went wrong... Please, try again later."));case 14:return e.prev=14,g(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return n(),function(){return e.abort()}}}),[S]);return(0,u.jsxs)("section",{style:{padding:20},children:[(0,u.jsx)("h1",{className:"visually-hidden",children:"Search movies"}),(0,u.jsx)(l,{onSubmit:function(e){w(null),Z({query:e})}}),d&&(0,u.jsx)(f.Z,{}),b&&(0,u.jsx)("div",{children:b}),0!==n.length&&(0,u.jsx)(m.Z,{movies:n})]})}},273:function(e,t,n){n.d(t,{G:function(){return m}});var r=n(861),a=n(757),s=n.n(a),i="61a6b843c58046eb2a3a15bde4cbc7b9",o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i),e.next=3,fetch(n,{signal:t});case 3:if((r=e.sent).ok){e.next=6;break}throw new Error(r.status);case 6:return e.next=8,r.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"),e.next=3,fetch(r,{signal:n});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"),e.next=3,fetch(r,{signal:n});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"),e.next=3,fetch(r,{signal:n});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),e.next=3,fetch(r,{signal:n});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m={getTrending:o,getMovies:c,getDetails:u,getCast:l,getReviews:f,imgBaseURL:"https://image.tmdb.org/t/p/w500"}},602:function(e,t,n){e.exports=n.p+"static/media/defaultPoster.fb7e09e04ca3dad60feb.jpg"},861:function(e,t,n){function r(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function o(e){r(i,a,s,o,c,"next",e)}function c(e){r(i,a,s,o,c,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=198.2cc3877a.chunk.js.map