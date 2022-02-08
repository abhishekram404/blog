(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[6],{11:function(e,t,n){"use strict";n.r(t),n.d(t,"TOGGLE_DARK_MODE",(function(){return r})),n.d(t,"SEND_REGISTER_REQUEST",(function(){return c})),n.d(t,"REGISTER_SUCCESSFUL",(function(){return a})),n.d(t,"REGISTER_FAILED",(function(){return s})),n.d(t,"ERROR",(function(){return o})),n.d(t,"SUCCESS",(function(){return i})),n.d(t,"INFO",(function(){return u})),n.d(t,"CLEAR_ALERT",(function(){return l})),n.d(t,"GET_AUTH_DATA",(function(){return b})),n.d(t,"AUTHENTICATED",(function(){return O})),n.d(t,"NOT_AUTHENTICATED",(function(){return d})),n.d(t,"LOADING_ON",(function(){return j})),n.d(t,"LOADING_OFF",(function(){return E})),n.d(t,"LOGOUT",(function(){return p})),n.d(t,"FETCH_POST_SUCCESS",(function(){return f})),n.d(t,"FETCH_POST_FAILURE",(function(){return m})),n.d(t,"FETCH_USER_INFO_SUCCESS",(function(){return S})),n.d(t,"FETCH_USER_INFO_FAILURE",(function(){return _})),n.d(t,"CLEAR_ALL",(function(){return h})),n.d(t,"FETCH_A_POST_SUCCESS",(function(){return T})),n.d(t,"FETCH_A_POST_FAILURE",(function(){return C}));var r="TOGGLE_DARK_MODE",c="SEND_REGISTER_REQUEST",a="REGISTER_SUCCESSFUL",s="REGISTER_FAILED",o="ERROR",i="SUCCESS",u="INFO",l="CLEAR_ALERT",b="GET_AUTH_DATA",O="AUTHENTICATED",d="NOT_AUTHENTICATED",j="LOADING_ON",E="LOADING_OFF",p="LOGOUT",f="FETCH_POST_SUCCESS",m="FETCH_POST_FAILURE",S="FETCH_USER_INFO_SUCCESS",_="FETCH_USER_INFO_FAILURE",h="CLEAR_ALL",T="FETCH_A_POST_SUCCESS",C="FETCH_A_POST_FAILURE"},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(16),s=n.n(a),o=(n(91),n(21)),i=(n(92),n(23)),u=n(19),l=(n(93),n(47)),b=n(14),O=n(50),d=n(44),j=n.n(d),E=n(24),p=n.n(E),f=n(1),m=f.useState,S=f.useEffect,_=n(11),h=_.TOGGLE_DARK_MODE,T=_.LOGOUT,C=_.SUCCESS,v=_.ERROR,g=_.CLEAR_ALL,A=function(e){return{type:h,payload:e}},R=n(53),x=n(28),L=n(4);function N(){var e=function(){var e=Object(b.b)(),t=m((function(){return"true"===localStorage.getItem("dark")||!1})),n=Object(o.a)(t,2),r=n[0],c=n[1];return S((function(){localStorage.setItem("dark",r),e(A(r))}),[r]),[r,function(){c(!r)}]}(),t=Object(o.a)(e,2),n=(t[0],t[1]),c=Object(b.b)(),a=Object(b.c)((function(e){return e.common})),s=a.dark,d=a.isUserLoggedIn,E=Object(r.useState)(!1),f=Object(o.a)(E,2),_=f[0],h=f[1],N=Object(r.useState)(""),U=Object(o.a)(N,2),I=U[0],y=U[1],F=function(){if(window.innerWidth>576)return h(!0);h(!1)};return Object(r.useEffect)((function(){return window.innerWidth>576&&h(!0),window.addEventListener("resize",F),function(){window.removeEventListener("resize",null)}}),[]),Object(x.useQuery)("userData",(function(){return p.a.get("/user/fetchUserInfo")}),{onSuccess:function(e){var t=e.data;return y(t.details.name)},enabled:Boolean(d)}),Object(L.jsx)("div",{className:Object(i.a)("navbar px-1 px-md-4 py-2",s?"navbar_dark":"navbar_light"),children:Object(L.jsxs)("div",{className:"container",children:[Object(L.jsx)(u.b,{to:"/",className:"navbar-brand",children:"Blog"}),Object(L.jsx)("button",{className:"menu-btn btn d-sm-none",onClick:function(){return h(!_)},children:Object(L.jsx)(R.b,{className:"menu-btn-icon"})}),_&&Object(L.jsxs)("ul",{className:Object(i.a)("navbar-nav  flex-row align-items-center",_&&"expanded"),children:[d?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("li",{className:"nav-item me-3",children:Object(L.jsx)(u.b,{to:"/create-post",className:"cta nav-link btn btn-primary px-2",children:"Create post"})}),Object(L.jsx)("li",{className:"nav-item me-3",children:Object(L.jsxs)(u.b,{to:"/profile",className:"nav-link p-2 profile-link",children:[Object(L.jsx)("img",{src:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy",alt:""}),Object(L.jsx)("span",{children:I?I.split(" ")[0]:"Loading"})]})}),Object(L.jsx)("li",{className:"nav-item me-3",role:"button",onClick:function(){return c(function(){var e=Object(O.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/user/logout");case 3:n=e.sent,r=n.data,e.t0=r.success,e.next=!0===e.t0?8:!1===e.t0?12:15;break;case 8:return t({type:T}),t({type:g}),t({type:C,payload:r.message}),e.abrupt("break",16);case 12:return t({type:v,payload:r.message}),t({type:T}),e.abrupt("break",16);case 15:return e.abrupt("return");case 16:e.next=22;break;case 18:e.prev=18,e.t1=e.catch(0),t({type:v,message:"Something went wrong!"}),t({type:T});case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}())},children:Object(L.jsx)("button",{className:"nav-link btn btn-link  px-2",children:"Logout"})})]}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("li",{className:"nav-item me-3",children:Object(L.jsx)(u.b,{to:"/login",className:"nav-link btn btn-link px-2",children:"Login"})}),Object(L.jsx)("li",{className:"nav-item me-3",children:Object(L.jsx)(u.b,{to:"/register",className:"cta nav-link btn btn-primary  px-2",children:"Register"})})]}),Object(L.jsx)("li",{className:"nav-item  dark-mode-switch",onClick:n,children:s?Object(L.jsx)(l.b,{className:"icon"}):Object(L.jsx)(l.a,{className:"icon"})})]})]})})}var U=n(5),I=n(76),y=n(8),F=["component"];function k(e){var t=e.component,n=Object(I.a)(e,F),r=Object(b.c)((function(e){return e.common})).isUserLoggedIn;return Object(L.jsx)(y.b,Object(U.a)(Object(U.a)({},n),{},{render:function(e){return r?Object(L.jsx)(t,Object(U.a)({},e)):Object(L.jsx)(y.a,{to:"/login"})}}))}n(119);var D=n(27),G=n(11),H=n(52),P=n.n(H),w=n(49),z=n(71),M=c.a.lazy((function(){return n.e(21).then(n.bind(null,393))})),B=c.a.lazy((function(){return Promise.all([n.e(1),n.e(4),n.e(13)]).then(n.bind(null,176))})),Q=c.a.lazy((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,397))})),K=c.a.lazy((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,399))})),W=c.a.lazy((function(){return Promise.all([n.e(2),n.e(0),n.e(3),n.e(9),n.e(10)]).then(n.bind(null,394))})),J=c.a.lazy((function(){return Promise.all([n.e(2),n.e(1),n.e(3),n.e(14)]).then(n.bind(null,395))}));var q=function(){var e=Object(D.d)(),t=Object(b.b)(),n=Object(b.c)((function(e){return e.common})).dark,c=Object(b.c)((function(e){return e.alert})),a=c.type,s=c.message,l=function(){t({type:G.CLEAR_ALERT})},O=Object(r.useState)((function(){return Boolean(Number(P.a.get("isUserLoggedIn")))})),d=Object(o.a)(O,1)[0];return Object(r.useEffect)((function(){return t(d?{type:G.AUTHENTICATED}:{type:G.NOT_AUTHENTICATED})}),[d]),Object(r.useEffect)((function(){switch(a){case G.SUCCESS:e.success(s,{onClose:l});break;case G.ERROR:e.error(s,{onClose:l});break;case G.INFO:e.info(s,{onClose:l})}}),[a,s]),Object(L.jsx)(u.a,{basename:"/",children:Object(L.jsxs)("div",{className:Object(i.a)("app",n?"app_dark":"app_light"),children:[Object(L.jsx)(N,{}),Object(L.jsx)(r.Suspense,{fallback:Object(L.jsx)(w.a,{}),children:Object(L.jsxs)(y.d,{children:[Object(L.jsx)(y.b,{path:"/",exact:!0,component:M}),Object(L.jsx)(y.b,{path:"/post/:id",component:B}),Object(L.jsx)(y.b,{path:"/register",component:Q}),Object(L.jsx)(y.b,{path:"/login",component:K}),Object(L.jsx)(k,{path:"/create-post",component:W}),Object(L.jsx)(k,{path:"/profile",component:J}),Object(L.jsx)(y.b,{path:"*",component:z.default})]})})]})})},V=n(26),X=n(78),Y=n(77),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:null,message:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.ERROR:return Object(U.a)(Object(U.a)({},e),{},{type:G.ERROR,message:t.payload});case G.INFO:return Object(U.a)(Object(U.a)({},e),{},{type:G.INFO,message:t.payload});case G.SUCCESS:return Object(U.a)(Object(U.a)({},e),{},{type:G.SUCCESS,message:t.payload});case G.CLEAR_ALERT:return{type:null,message:null};default:return e}},$=n(11),ee=$.TOGGLE_DARK_MODE,te=$.AUTHENTICATED,ne=$.NOT_AUTHENTICATED,re=$.LOADING_ON,ce=$.LOADING_OFF,ae=$.LOGOUT,se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dark:!1,isUserLoggedIn:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(U.a)(Object(U.a)({},e),{},{dark:t.payload});case re:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case ce:return Object(U.a)(Object(U.a)({},e),{},{loading:!1});case te:return Object(U.a)(Object(U.a)({},e),{},{isUserLoggedIn:!0});case ne:case ae:return Object(U.a)(Object(U.a)({},e),{},{isUserLoggedIn:!1});default:return e}},oe=n(45),ie=n(11),ue=ie.FETCH_POST_SUCCESS,le=ie.FETCH_POST_FAILURE,be=ie.CLEAR_ALL,Oe=ie.FETCH_A_POST_SUCCESS,de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchedPosts:[],userPosts:[],visitedPosts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return{fetchedPosts:[],profilePosts:[],userPosts:[],visitedPosts:[]};case ue:return Object(U.a)(Object(U.a)({},e),{},{fetchedPosts:Object(oe.a)(t.payload)});case le:return e;case Oe:return Object(U.a)(Object(U.a)({},e),{},{visitedPosts:[].concat(Object(oe.a)(e.visitedPosts),[t.payload])});default:return e}},je=n(11),Ee=je.FETCH_USER_INFO_SUCCESS,pe=(je.FETCH_USER_INFO_FAILURE,je.CLEAR_ALL),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return{};case Ee:return Object(U.a)(Object(U.a)({},e),{},{user:t.payload});default:return e}},me=Object(V.combineReducers)({common:se,alert:Z,post:de,user:fe}),Se=[X.a],_e=Object(V.createStore)(me,Object(Y.composeWithDevTools)(V.applyMiddleware.apply(void 0,Se))),he=n(79);p.a.defaults.baseURL="https://abhishekram404-blog-simple.herokuapp.com/api/",p.a.defaults.withCredentials=!0;var Te=new x.QueryClient;s.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(x.QueryClientProvider,{client:Te,children:Object(L.jsx)(b.a,{store:_e,children:Object(L.jsx)(D.a,{transition:D.c.FADE,position:D.b.BOTTOM_LEFT,template:he.a,timeout:5e3,offset:"30px",children:Object(L.jsx)(q,{})})})})}),document.getElementById("root"))},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(23),c=(n(1),n(14)),a=(n(120),n(4));function s(){var e=Object(c.c)((function(e){return e.common})).dark;return Object(a.jsx)("div",{className:Object(r.a)("loader",e?"loader-dark":"loader-light")})}},71:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(1);var r=n(8),c=n(4);function a(){var e=Object(r.g)();return Object(c.jsx)("div",{className:"error-page",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Error 404 !"}),Object(c.jsx)("h4",{children:"The page that you requested was not found. "}),Object(c.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){return e.goBack()},children:"Go to previous page"})]})})}},91:function(e,t,n){},93:function(e,t,n){}},[[121,7,8]]]);
//# sourceMappingURL=main.f77c6d46.chunk.js.map