(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[13],{101:function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return j})),r.d(e,"a",(function(){return O}));var n=r(33),a=r(29),c=r.n(a),s=r(18).default,i=r(8),o=i.FETCH_POST_SUCCESS,u=i.FETCH_POST_FAILURE,p=i.INFO,l=i.FETCH_PROFILE_POST_SUCCESS,d=i.FETCH_PROFILE_POST_FAILURE,b=i.FETCH_A_POST_SUCCESS,f=(i.FETCH_A_POST_FAILURE,i.ERROR),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var e=Object(n.a)(c.a.mark((function e(r){var n,a,i,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/post/fetchHomepagePosts?skip="+t);case 2:return n=e.sent,a=n.data,e.next=6,a;case 6:i=e.sent,l=i.success,d=i.details,e.t0=l,e.next=!0===e.t0?12:!1===e.t0?13:14;break;case 12:return e.abrupt("return",r({type:o,payload:d}));case 13:return e.abrupt("return",r({type:u}));case 14:return e.abrupt("return",r({type:p,payload:"Something went wrong while fetching the posts."}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(t){var e=t.skip,r=t.profile;return function(){var t=Object(n.a)(c.a.mark((function t(n){var a,i,o,u,b;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/post/fetchProfilePosts",{params:{skip:e,profile:r}});case 2:return a=t.sent,i=a.data,t.next=6,i;case 6:o=t.sent,u=o.success,b=o.details,t.t0=u,t.next=!0===t.t0?12:!1===t.t0?13:14;break;case 12:return t.abrupt("return",n({type:l,payload:b}));case 13:return t.abrupt("return",n({type:d}));case 14:return t.abrupt("return",n({type:p,payload:"Something went wrong while fetching the posts."}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(n.a)(c.a.mark((function e(r){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/post/fetch?id=".concat(t));case 3:n=e.sent,a=n.data,e.t0=a.success,e.next=!0===e.t0?8:!1===e.t0?9:10;break;case 8:return e.abrupt("return",r({type:b,payload:a.details}));case 9:return e.abrupt("return",r({type:u,payload:a.details}));case 10:return e.abrupt("return",r({type:f,payload:"Something went wrong while fetching the post."}));case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(0),r({type:f,payload:"Something went wrong while fetching the post."});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()}},122:function(t,e,r){},139:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return f}));var n=r(21),a=r(15),c=r(1),s=r(34),i=(r(122),r(11)),o=r(140),u=r(5),p=r(101),l=r(123),d=r.n(l),b=r(2);function f(t){t.title,t.body,t.category;var e=t.preview,r=void 0!==e&&e,l=Object(i.c)((function(t){return t.common})).dark,f=Object(u.i)().id,h=Object(i.b)(),j=Object(i.c)((function(t){return t.post.visitedPosts.filter((function(t){return t._id===f}))})),O=Object(n.a)(j,1)[0];return Object(c.useEffect)((function(){j.some((function(t){return t._id===f}))||h(Object(p.a)(f))}),[]),Object(b.jsx)("div",{className:Object(a.a)("post py-4 px-1 p-md-4",l?"post_dark":"post_light",r&&"border"),children:Object(b.jsx)("div",{className:"container ",children:Object(b.jsxs)("article",{children:[Object(b.jsx)("div",{className:Object(a.a)("title-bar row align-items-start "),children:Object(b.jsx)("div",{className:"col-12 title-row",children:Object(b.jsx)("h1",{className:"post-title",children:O?O.title:"Post title goes here..."})})}),Object(b.jsxs)("div",{className:"info-row mb-3",children:[Object(b.jsxs)("span",{className:"author-col",children:["Article by ",Object(b.jsx)("b",{children:O?O.author.authorName:"Author name"})]}),"\xa0 \u2022 \xa0 Published on"," ",O?d()(O.createdAt).format("LLL"):"Time"," \xa0 \u2022 \xa0 ",O?O.category:"Undefined"]}),Object(b.jsx)("div",{className:"post-body",children:O?Object(o.a)(O.content):Object(b.jsx)(s.a,{})})]})})})}}}]);
//# sourceMappingURL=13.4e51038c.chunk.js.map