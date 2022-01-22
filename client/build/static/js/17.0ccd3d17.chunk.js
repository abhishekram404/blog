(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[17],{124:function(e,a,t){},348:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var r=t(33),s=t(21),n=t(29),c=t.n(n),i=t(15),o=t(1),l=t(11),m=(t(124),t(120)),u=t(121),d=t(18),b=t.n(d),j=t(8),p=t(5),f=t(103),x=t(96),h=function(){return x.a.Date.now()},O=/\s/;var g=function(e){for(var a=e.length;a--&&O.test(e.charAt(a)););return a},v=/^\s+/;var N=function(e){return e?e.slice(0,g(e)+1).replace(v,""):e},w=t(111),y=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,q=/^0o[0-7]+$/i,R=parseInt;var P=function(e){if("number"==typeof e)return e;if(Object(w.a)(e))return NaN;if(Object(f.a)(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=Object(f.a)(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=N(e);var t=k.test(e);return t||q.test(e)?R(e.slice(2),t?2:8):y.test(e)?NaN:+e},S=Math.max,U=Math.min;var E=function(e,a,t){var r,s,n,c,i,o,l=0,m=!1,u=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(a){var t=r,n=s;return r=s=void 0,l=a,c=e.apply(n,t)}function j(e){return l=e,i=setTimeout(x,a),m?b(e):c}function p(e){var t=e-o;return void 0===o||t>=a||t<0||u&&e-l>=n}function x(){var e=h();if(p(e))return O(e);i=setTimeout(x,function(e){var t=a-(e-o);return u?U(t,n-(e-l)):t}(e))}function O(e){return i=void 0,d&&r?b(e):(r=s=void 0,c)}function g(){var e=h(),t=p(e);if(r=arguments,s=this,o=e,t){if(void 0===i)return j(o);if(u)return clearTimeout(i),i=setTimeout(x,a),b(o)}return void 0===i&&(i=setTimeout(x,a)),c}return a=P(a)||0,Object(f.a)(t)&&(m=!!t.leading,n=(u="maxWait"in t)?S(P(t.maxWait)||0,a):n,d="trailing"in t?!!t.trailing:d),g.cancel=function(){void 0!==i&&clearTimeout(i),l=0,r=o=s=i=void 0},g.flush=function(){return void 0===i?c:O(h())},g},T=t(2);function _(){var e=Object(l.b)(),a=Object(o.useState)(!1),t=Object(s.a)(a,2),n=t[0],d=t[1],f=Object(l.c)((function(e){return e.common})),x=f.dark,h=f.isUserLoggedIn,O=Object(o.useState)(void 0),g=Object(s.a)(O,2),v=g[0],N=g[1],w=u.c({name:u.e().min(3,"Name must be at least 3 characters long.").max(60,"Name too long!").required("Name is required."),username:u.e().min(3,"Username too short.").max(32,"Username too long.").matches(/^(?=[a-z0-9_]{3,20}$)(?!.*[_]{2})[^_].*[^_]$/,"Username must only contain lowercase letters(a-z), numbers(0-9), and underscore, and must not contain more than one trailing underscore or underscore  at the end.  ").required("Username is required."),email:u.e().email("Invalid email").required("Email is required."),password:u.e().min(6,"Password too short.").max(256,"Password too long.").required("Password is required."),password2:u.e().oneOf([u.d("password")],"Both passwords must match.")}),y=function(){var a=Object(r.a)(c.a.mark((function a(t){var r,s;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,d(!0),a.next=4,b.a.post("/user/register",t);case 4:r=a.sent,s=r.data,d(!1),a.t0=s.success,a.next=!0===a.t0?10:!1===a.t0?11:12;break;case 10:return a.abrupt("return",e({type:j.SUCCESS,payload:s.message}));case 11:return a.abrupt("return",e({type:j.ERROR,payload:s.message}));case 12:return a.abrupt("return",e({type:j.ERROR,payload:"Something went wrong!"}));case 13:a.next=19;break;case 15:a.prev=15,a.t1=a.catch(0),d(!1),e({type:j.ERROR,payload:a.t1.response.data.message});case 19:case"end":return a.stop()}}),a,null,[[0,15]])})));return function(e){return a.apply(this,arguments)}}(),k=E(function(){var e=Object(r.a)(c.a.mark((function e(a,t){var r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/user/checkUsernameAvailability?username="+a.target.value);case 3:r=e.sent,s=r.data,t({username:s.message}),N(s.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t({username:e.t0.response.data.message}),N(e.t0.response.data.success);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a,t){return e.apply(this,arguments)}}(),800);return h?Object(T.jsx)(p.a,{to:"/"}):Object(T.jsx)("div",{className:Object(i.a)("register py-4 px-1 p-md-4",x?"register_dark":"register_light"),children:Object(T.jsx)("div",{className:"container",children:Object(T.jsx)(m.d,{initialValues:{name:"",username:"",email:"",password:"",password2:""},validationSchema:w,onSubmit:y,children:function(e,a){var t;return Object(T.jsxs)(m.c,{className:Object(i.a)("card p-4",n&&"disabled"),children:[Object(T.jsx)("h2",{className:"text-center",children:"Register"}),Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsxs)("label",{htmlFor:"name",className:"form-label",children:["Name ",Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(m.b,{type:"text",className:"form-control shadow-none",required:!0,name:"name"}),Object(T.jsx)("small",{className:"error-message text-danger",children:Object(T.jsx)(m.a,{name:"name"})})]}),Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsxs)("label",{htmlFor:"name",className:"form-label",children:["Username ",Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(m.b,{type:"text",className:"form-control shadow-none",required:!0,name:"username",onKeyUp:function(a){k(a,e.setStatus)}}),Object(T.jsx)("small",{className:"error-message text-danger d-block",children:Object(T.jsx)(m.a,{name:"username"})}),Object(T.jsx)("small",{className:Object(i.a)("error-message d-block",v?"text-success":"text-danger"),children:(null===(t=e.status)||void 0===t?void 0:t.username)&&e.status.username})]}),Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsxs)("label",{htmlFor:"email",className:"form-label",children:["Email ",Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(m.b,{type:"email",className:"form-control shadow-none",required:!0,name:"email"}),Object(T.jsx)("small",{className:"error-message text-danger",children:Object(T.jsx)(m.a,{name:"email"})})]}),Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsxs)("label",{htmlFor:"password",className:"form-label",children:["Password ",Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(m.b,{type:"password",name:"password",className:"form-control shadow-none",required:!0}),Object(T.jsx)("small",{className:"error-message text-danger",children:Object(T.jsx)(m.a,{name:"password"})})]}),Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsxs)("label",{htmlFor:"password2",className:"form-label",children:["Confirm Password ",Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(m.b,{type:"password",name:"password2",className:"form-control shadow-none",required:!0}),Object(T.jsx)("small",{className:"error-message text-danger",children:Object(T.jsx)(m.a,{name:"password2"})})]}),Object(T.jsx)("button",{type:"submit",className:"submit-btn btn btn-primary",children:n?"Registering":"Register"})]})}})})})}},98:function(e,a){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);
//# sourceMappingURL=17.0ccd3d17.chunk.js.map