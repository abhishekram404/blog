(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[11,5],{128:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},152:function(e,t,c){"use strict";c.r(t);c(1);var s=c(19),n=(c(173),c(14)),a=c(23),r=c(28),l=c(24),o=c.n(l),i=c(11),d=c(136),b=c.n(d),j=c(137),m=c(4);t.default=function(e){var t=e.title,c=e.tags,l=e.author,d=e.selfMode,u=e.id,h=e.refetchPosts,p=e.createdAt,f=Object(n.c)((function(e){return e.common})).dark,x=Object(n.b)(),O=Object(r.useMutation)((function(e){return o.a.delete("/post/delete?postId=".concat(e))}),{onSuccess:function(e){var t=e.data;x({type:i.SUCCESS,payload:t.message}),h()},onError:function(e){return console.log(e)}});return Object(m.jsxs)("div",{className:Object(a.a)("border-1  card feed-item mb-4",f?"feed-item-dark":"feed-item-light"),children:[Object(m.jsx)("div",{className:"thumbnail-cont"}),Object(m.jsx)("div",{className:"card-body post-cont",children:Object(m.jsxs)(s.b,{to:"/post/".concat(u),children:[Object(m.jsx)("h3",{className:"card-title post-title",children:t}),Object(m.jsx)("p",{className:"card-text post-body",children:c&&c.map((function(e,t){return Object(m.jsx)("span",{children:"#".concat(e)},t)}))})]})}),Object(m.jsx)("div",{className:"card-body py-1",children:Object(m.jsx)("div",{className:"row  align-items-center g-2 py-2",children:d?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:"col edit-btn btn  me-1 ",children:"Edit"}),Object(m.jsx)("button",{className:"col delete-btn btn btn-danger ms-1",onClick:function(){return e=u,void O.mutate(e);var e},children:"Delete"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"col-2 col-sm-1 p-1 profile-pic-cont ",children:Object(m.jsx)("img",{src:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy",alt:"Profile",className:"profile-pic"})}),Object(m.jsxs)("div",{className:"col-7 col-sm-7 px-1 px-sm-3 px-md-3 d-flex flex-column",children:[Object(m.jsx)("span",{className:"author-name",children:null===l||void 0===l?void 0:l.authorName}),Object(m.jsx)("small",{className:"author-username",children:Object(m.jsxs)(s.b,{to:"/user/abhishek",children:["@",null===l||void 0===l?void 0:l.authorUsername]})})]}),Object(m.jsxs)("small",{className:"createdAt text-right",children:[Object(m.jsx)(j.a,{})," ",Object(m.jsx)("span",{children:p&&"".concat(b()(p).startOf("second").fromNow())})]})]})})})]})}},173:function(e,t,c){}}]);
//# sourceMappingURL=11.2c076ed1.chunk.js.map