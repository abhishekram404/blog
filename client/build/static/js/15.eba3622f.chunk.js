(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[15],{357:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return h}));var s=r(22),n=r(1),a=r.n(n),c=r(14),i=r(49),d=(r(358),r(27)),l=r(23),o=r.n(l),f=r(52),u=r.n(f),j=r(4),b=a.a.lazy((function(){return r.e(14).then(r.bind(null,359))}));function h(){var t=Object(c.c)((function(t){return t.common})).dark,e=u.a.get("userId"),r=Object(d.useQuery)("draftPosts",(function(){return o.a.get("/post/fetchDrafts",{params:{profile:e}})})),a=(r.isLoading,r.data),l=r.isError,f=r.isSuccess,h=r.error,p=r.refetch;return f&&(a=a.data.details),l&&console.log(h),Object(j.jsxs)("div",{className:Object(s.a)("drafts  ",t?"drafts-dark":"drafts-light"),children:[Object(j.jsx)("h3",{children:"Drafts"}),Object(j.jsx)("div",{className:"drafts-list p-2",children:Object(j.jsx)(n.Suspense,{fallback:Object(j.jsx)(i.a,{}),children:f&&a.length>0?a.map((function(t){return Object(j.jsx)(b,{title:t.title,id:t._id,refetchDrafts:p},t._id)})):Object(j.jsx)("h3",{children:"No drafts"})})})]})}},358:function(t,e,r){}}]);
//# sourceMappingURL=15.eba3622f.chunk.js.map