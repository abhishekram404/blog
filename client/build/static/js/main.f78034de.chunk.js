(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[8],{34:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(15),r=(n(1),n(11)),a=(n(90),n(2));function s(){var e=Object(r.c)((function(e){return e.common})).dark;return Object(a.jsx)("div",{className:Object(c.a)("loader",e?"loader-dark":"loader-light")})}},47:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(1);var c=n(5),r=n(2);function a(){var e=Object(c.g)();return Object(r.jsx)("div",{className:"error-page",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Error 404 !"}),Object(r.jsx)("h4",{children:"The page that you requested was not found. "}),Object(r.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){return e.goBack()},children:"Go to previous page"})]})})}},60:function(e,t,n){},62:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t),n.d(t,"TOGGLE_DARK_MODE",(function(){return c})),n.d(t,"SEND_REGISTER_REQUEST",(function(){return r})),n.d(t,"REGISTER_SUCCESSFUL",(function(){return a})),n.d(t,"REGISTER_FAILED",(function(){return s})),n.d(t,"ERROR",(function(){return o})),n.d(t,"SUCCESS",(function(){return i})),n.d(t,"INFO",(function(){return u})),n.d(t,"CLEAR_ALERT",(function(){return l})),n.d(t,"GET_AUTH_DATA",(function(){return O})),n.d(t,"AUTHENTICATED",(function(){return b})),n.d(t,"NOT_AUTHENTICATED",(function(){return d})),n.d(t,"LOADING_ON",(function(){return j})),n.d(t,"LOADING_OFF",(function(){return E})),n.d(t,"LOGOUT",(function(){return p})),n.d(t,"FETCH_POST_SUCCESS",(function(){return _})),n.d(t,"FETCH_POST_FAILURE",(function(){return f})),n.d(t,"FETCH_USER_INFO_SUCCESS",(function(){return T})),n.d(t,"FETCH_USER_INFO_FAILURE",(function(){return S})),n.d(t,"FETCH_PROFILE_POST_SUCCESS",(function(){return m})),n.d(t,"FETCH_PROFILE_POST_FAILURE",(function(){return C})),n.d(t,"CLEAR_ALL",(function(){return h})),n.d(t,"FETCH_A_POST_SUCCESS",(function(){return R})),n.d(t,"FETCH_A_POST_FAILURE",(function(){return A}));var c="TOGGLE_DARK_MODE",r="SEND_REGISTER_REQUEST",a="REGISTER_SUCCESSFUL",s="REGISTER_FAILED",o="ERROR",i="SUCCESS",u="INFO",l="CLEAR_ALERT",O="GET_AUTH_DATA",b="AUTHENTICATED",d="NOT_AUTHENTICATED",j="LOADING_ON",E="LOADING_OFF",p="LOGOUT",_="FETCH_POST_SUCCESS",f="FETCH_POST_FAILURE",T="FETCH_USER_INFO_SUCCESS",S="FETCH_USER_INFO_FAILURE",m="FETCH_PROFILE_POST_SUCCESS",C="FETCH_PROFILE_POST_FAILURE",h="CLEAR_ALL",R="FETCH_A_POST_SUCCESS",A="FETCH_A_POST_FAILURE"},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(13),s=n.n(a),o=(n(60),n(21)),i=(n(61),n(15)),u=n(14),l=(n(62),n(30)),O=n(11),b=n(33),d=n(29),j=n.n(d),E=n(18),p=n.n(E),_=n(8),f=_.TOGGLE_DARK_MODE,T=_.LOGOUT,S=_.SUCCESS,m=_.ERROR,C=_.CLEAR_ALL,h=n(35),R=(n(86),n(2));function A(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.common})),n=t.dark,r=t.isUserLoggedIn,a=Object(O.c)((function(e){return e.user})).user,s=Object(c.useState)(!1),d=Object(o.a)(s,2),E=d[0],_=d[1],A=function(){if(window.innerWidth>576)return _(!0);_(!1)};return Object(c.useEffect)((function(){return window.innerWidth>576&&_(!0),window.addEventListener("resize",A),function(){window.removeEventListener("resize",null)}}),[]),Object(R.jsx)("div",{className:Object(i.a)("navbar px-1 px-md-4 py-2",n?"navbar_dark":"navbar_light"),children:Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)(u.b,{to:"/",className:"navbar-brand",children:"Blog"}),Object(R.jsx)("button",{className:"menu-btn btn d-sm-none",onClick:function(){return _(!E)},children:Object(R.jsx)(h.c,{className:"menu-btn-icon"})}),E&&Object(R.jsxs)("ul",{className:Object(i.a)("navbar-nav  flex-row align-items-center",E&&"expanded"),children:[r?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("li",{className:"nav-item me-3",children:Object(R.jsx)(u.b,{to:"/create-post",className:"cta nav-link btn btn-primary px-2",children:"Create post"})}),Object(R.jsx)("li",{className:"nav-item me-3",children:Object(R.jsxs)(u.b,{to:"/profile",className:"nav-link p-2 profile-link",children:[Object(R.jsx)("img",{src:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy",alt:""}),Object(R.jsx)("span",{children:null!==a&&void 0!==a&&a.name?a.name.split(" ")[0]:null})]})}),Object(R.jsx)("li",{className:"nav-item me-3",role:"button",onClick:function(){return e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/user/logout");case 3:n=e.sent,c=n.data,e.t0=c.success,e.next=!0===e.t0?8:!1===e.t0?12:15;break;case 8:return t({type:T}),t({type:C}),t({type:S,payload:c.message}),e.abrupt("break",16);case 12:return t({type:m,payload:c.message}),t({type:T}),e.abrupt("break",16);case 15:return e.abrupt("return");case 16:e.next=22;break;case 18:e.prev=18,e.t1=e.catch(0),t({type:m,message:"Something went wrong!"}),t({type:T});case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}())},children:Object(R.jsx)("button",{className:"nav-link btn btn-link  px-2",children:"Logout"})})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("li",{className:"nav-item me-3",children:Object(R.jsx)(u.b,{to:"/login",className:"nav-link btn btn-link px-2",children:"Login"})}),Object(R.jsx)("li",{className:"nav-item me-3",children:Object(R.jsx)(u.b,{to:"/register",className:"cta nav-link btn btn-primary  px-2",children:"Register"})})]}),Object(R.jsx)("li",{className:"nav-item  dark-mode-switch",onClick:function(){return e({type:f})},children:n?Object(R.jsx)(l.b,{className:"icon"}):Object(R.jsx)(l.a,{className:"icon"})})]})]})})}var L=n(3),v=n(50),F=n(5),x=["component"];function g(e){var t=e.component,n=Object(v.a)(e,x),c=Object(O.c)((function(e){return e.common})).isUserLoggedIn;return Object(R.jsx)(F.b,Object(L.a)(Object(L.a)({},n),{},{render:function(e){return c?Object(R.jsx)(t,Object(L.a)({},e)):Object(R.jsx)(F.a,{to:"/login"})}}))}n(89);var U=n(17),N=n(8),I=n(51),y=n.n(I),P=n(34),k=n(47),H=r.a.lazy((function(){return n.e(13).then(n.bind(null,350))})),D=r.a.lazy((function(){return Promise.all([n.e(3),n.e(5),n.e(12)]).then(n.bind(null,184))})),G=r.a.lazy((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,348))})),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,343))})),z=r.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(4),n.e(11),n.e(18)]).then(n.bind(null,344))})),M=r.a.lazy((function(){return Promise.all([n.e(1),n.e(4),n.e(3),n.e(27),n.e(16)]).then(n.bind(null,345))}));var B=function(){var e=Object(U.d)(),t=Object(O.b)(),n=Object(O.c)((function(e){return e.common})).dark,r=Object(O.c)((function(e){return e.alert})),a=r.type,s=r.message,l=function(){t({type:N.CLEAR_ALERT})},b=Object(c.useState)((function(){return Boolean(Number(y.a.get("isUserLoggedIn")))})),d=Object(o.a)(b,2),j=d[0];return d[1],Object(c.useEffect)((function(){return t(j?{type:N.AUTHENTICATED}:{type:N.NOT_AUTHENTICATED})}),[j]),Object(c.useEffect)((function(){switch(a){case N.SUCCESS:e.success(s,{onClose:l});break;case N.ERROR:e.error(s,{onClose:l});break;case N.INFO:e.info(s,{onClose:l})}}),[a,s]),Object(R.jsx)(u.a,{children:Object(R.jsxs)("div",{className:Object(i.a)("app",n?"app_dark":"app_light"),children:[Object(R.jsx)(A,{}),Object(R.jsx)(c.Suspense,{fallback:Object(R.jsx)(P.a,{}),children:Object(R.jsxs)(F.d,{children:[Object(R.jsx)(F.b,{path:"/",exact:!0,component:H}),Object(R.jsx)(F.b,{path:"/post/:id",component:D}),Object(R.jsx)(F.b,{path:"/register",component:G}),Object(R.jsx)(F.b,{path:"/login",component:w}),Object(R.jsx)(g,{path:"/create-post",component:z}),Object(R.jsx)(g,{path:"/profile",component:M}),Object(R.jsx)(F.b,{path:"*",component:k.default})]})})]})})},K=n(16),W=n(53),J=n(52),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:null,message:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.ERROR:return Object(L.a)(Object(L.a)({},e),{},{type:N.ERROR,message:t.payload});case N.INFO:return Object(L.a)(Object(L.a)({},e),{},{type:N.INFO,message:t.payload});case N.SUCCESS:return Object(L.a)(Object(L.a)({},e),{},{type:N.SUCCESS,message:t.payload});case N.CLEAR_ALERT:return{type:null,message:null};default:return e}},q=n(8),V=q.TOGGLE_DARK_MODE,X=q.AUTHENTICATED,Y=q.NOT_AUTHENTICATED,Z=q.LOADING_ON,$=q.LOADING_OFF,ee=q.LOGOUT,te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dark:!1,isUserLoggedIn:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(L.a)(Object(L.a)({},e),{},{dark:!e.dark});case Z:return Object(L.a)(Object(L.a)({},e),{},{loading:!0});case $:return Object(L.a)(Object(L.a)({},e),{},{loading:!1});case X:return Object(L.a)(Object(L.a)({},e),{},{isUserLoggedIn:!0});case Y:case ee:return Object(L.a)(Object(L.a)({},e),{},{isUserLoggedIn:!1});default:return e}},ne=n(23),ce=n(8),re=ce.FETCH_POST_SUCCESS,ae=ce.FETCH_POST_FAILURE,se=ce.FETCH_PROFILE_POST_SUCCESS,oe=ce.FETCH_PROFILE_POST_FAILURE,ie=ce.CLEAR_ALL,ue=ce.FETCH_A_POST_SUCCESS,le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchedPosts:[],profilePosts:[],userPosts:[],visitedPosts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return{fetchedPosts:[],profilePosts:[],userPosts:[],visitedPosts:[]};case re:return Object(L.a)(Object(L.a)({},e),{},{fetchedPosts:Object(ne.a)(t.payload)});case ae:return e;case se:return Object(L.a)(Object(L.a)({},e),{},{profilePosts:Object(ne.a)(t.payload)});case oe:return e;case ue:return Object(L.a)(Object(L.a)({},e),{},{visitedPosts:[].concat(Object(ne.a)(e.visitedPosts),[t.payload])});default:return e}},Oe=n(8),be=Oe.FETCH_USER_INFO_SUCCESS,de=(Oe.FETCH_USER_INFO_FAILURE,Oe.CLEAR_ALL),je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return{};case be:return Object(L.a)(Object(L.a)({},e),{},{user:t.payload});default:return e}},Ee=Object(K.combineReducers)({common:te,alert:Q,post:le,user:je}),pe=[W.a],_e=Object(K.createStore)(Ee,Object(J.composeWithDevTools)(K.applyMiddleware.apply(void 0,pe))),fe=n(54);console.log("REACT_APP_NODE_ENV","production"),p.a.defaults.baseURL="https://abhishekram404-blog.herokuapp.com/api/",p.a.defaults.withCredentials=!0,s.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(O.a,{store:_e,children:Object(R.jsx)(U.a,{transition:U.c.FADE,position:U.b.BOTTOM_LEFT,template:fe.a,timeout:5e3,offset:"30px",children:Object(R.jsx)(B,{})})})}),document.getElementById("root"))}},[[91,9,10]]]);
//# sourceMappingURL=main.f78034de.chunk.js.map