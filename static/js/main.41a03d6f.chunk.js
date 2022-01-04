(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{72:function(e,t,a){},73:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(25),s=a.n(n),c=(a(72),a(49)),i=a(5),o=a(7),l=a(103),u=a(52),j=(a(73),a(1)),d=function(e){var t=e.variant,a=e.heading,n=e.message,s=e.deleteAlert,c=e.id,o=Object(r.useState)(!0),l=Object(i.a)(o,2),d=l[0],b=l[1],m=Object(r.useState)(null),h=Object(i.a)(m,2),O=h[0],v=h[1];Object(r.useEffect)((function(){var e=setTimeout(p,5e3);return v(e),function(){clearTimeout(O)}}),[]);var p=function(){return b(!1)};return d||setTimeout((function(){s(c)}),300),Object(j.jsx)(u.a,{dismissible:!0,show:d,variant:t,onClose:p,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u.a.Heading,{children:a}),Object(j.jsx)("p",{className:"alert-body",children:n})]})})},b=a(66),m=a(40),h=a(65),O=a(11),v=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.c,{to:"/movies",className:"nav-link",children:"Movies"}),Object(j.jsx)(O.c,{to:"/movies/create",className:"nav-link",children:"Create A Movie"}),Object(j.jsx)(O.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(j.jsx)(O.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),p=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(j.jsx)(O.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),x=Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O.c,{to:"/",className:"nav-link",children:"Home"})}),g=function(e){var t=e.user;return Object(j.jsx)(m.a,{bg:"primary",variant:"dark",expand:"md",children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(m.a.Brand,{children:Object(j.jsx)(O.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"myMDB"})}),Object(j.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(b.a,{className:"ms-auto",children:[t&&Object(j.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),x,t?v:p]})})]})})},f=a(9),w=a.n(f),S=a(13),y="https://library-express-api.herokuapp.com",k="https://library-express-api.herokuapp.com",C="localhost"===window.location.hostname?k:y,N=a(23),A=a.n(N),P=function(e,t,a){return A.a.post(C+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},F=function(e,t){return A.a.post(C+"/sign-in/",{credentials:{email:e,password:t}})},D=function(e){return A.a.delete(C+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},I=function(e,t,a){return A.a.patch(C+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},E=a(10),L=a(33),M=function(e){var t=e.msgAlert,a=e.setUser,n=Object(r.useState)(""),s=Object(i.a)(n,2),c=s[0],l=s[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(r.useState)(""),O=Object(i.a)(h,2),v=O[0],p=O[1],x=Object(r.useState)(!1),g=Object(i.a)(x,2),f=g[0],y=g[1],k=function(){var e=Object(S.a)(w.a.mark((function e(r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,P(c,b,v);case 4:return e.next=6,F(c,b);case 6:n=e.sent,a(n.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),y(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),l(""),m(""),p(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return f?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(E.a,{onSubmit:k,children:[Object(j.jsxs)(E.a.Group,{controlId:"email",children:[Object(j.jsx)(E.a.Label,{children:"Email address"}),Object(j.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"password",children:[Object(j.jsx)(E.a.Label,{children:"Password"}),Object(j.jsx)(E.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"passwordConfirmation",children:[Object(j.jsx)(E.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(E.a.Control,{required:!0,name:"passwordConfirmation",value:v,type:"password",placeholder:"Confirm Password",onChange:function(e){return p(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},U=function(e){var t=e.msgAlert,a=e.setUser,n=Object(r.useState)(""),s=Object(i.a)(n,2),c=s[0],l=s[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(r.useState)(!1),O=Object(i.a)(h,2),v=O[0],p=O[1],x=function(){var e=Object(S.a)(w.a.mark((function e(r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,F(c,b);case 4:n=e.sent,a(n.data.user),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),p(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),l(""),m(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return v?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(E.a,{onSubmit:x,children:[Object(j.jsxs)(E.a.Group,{controlId:"email",children:[Object(j.jsx)(E.a.Label,{children:"Email address"}),Object(j.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"password",children:[Object(j.jsx)(E.a.Label,{children:"Password"}),Object(j.jsx)(E.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},B=function(e){var t=e.msgAlert,a=e.clearUser,n=e.user,s=Object(r.useState)(!1),c=Object(i.a)(s,2),l=c[0],u=c[1];return Object(r.useEffect)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(n);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),u(!0),a();case 5:case"end":return e.stop()}}),e)}))),[]),!n||l?Object(j.jsx)(o.a,{to:"/"}):""},G=function(e){var t=e.msgAlert,a=e.user,n=Object(r.useState)(""),s=Object(i.a)(n,2),c=s[0],l=s[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(r.useState)(!1),O=Object(i.a)(h,2),v=O[0],p=O[1],x=function(){var e=Object(S.a)(w.a.mark((function e(r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,I(c,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),p(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(""),m(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||v?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(E.a,{onSubmit:x,children:[Object(j.jsxs)(E.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(E.a.Label,{children:"Old password"}),Object(j.jsx)(E.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"newPassword",children:[Object(j.jsx)(E.a.Label,{children:"New Password"}),Object(j.jsx)(E.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},T=function(){return Object(j.jsx)("h1",{children:"The best movie website around."})},q=a(102),z=function(e){return A.a.get(C+"/movies/",{headers:{Authorization:"Bearer ".concat(e.token)}})},_=function(e,t){return A.a.get("".concat(C,"/movies/").concat(e,"/"),{headers:{Authorization:"Bearer ".concat(t.token)}})},W=function(e,t){return A.a.delete("".concat(C,"/movies/").concat(e),{headers:{Authorization:"Bearer ".concat(t.token)}})},H=function(e,t,a,r){return A.a.patch("".concat(C,"/movies/").concat(e),{movie:{title:t,director:a}},{headers:{Authorization:"Bearer ".concat(r.token)}})},J=function(e,t,a){return A.a.post("".concat(C,"/movies"),{movie:{title:e,director:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},R=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(null),s=Object(i.a)(n,2),c=s[0],l=s[1],u=Object(r.useState)(!1),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(o.h)().id;if(!t)return Object(j.jsx)(o.a,{to:"/"});Object(r.useEffect)((function(){(function(){var e=Object(S.a)(w.a.mark((function e(){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(h,t);case 3:r=e.sent,l(r.data.movie),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Movie failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){var e=Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(h,t);case 3:m(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({heading:"Failed to delete movie",message:e.t0.message,variant:"danger"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return c?b?Object(j.jsx)(o.a,{to:"/movies"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:c.title}),Object(j.jsxs)("p",{children:["Director: ",c.director]}),Object(j.jsx)(L.a,{variant:"danger",onClick:v,children:"Delete Movie"}),Object(j.jsx)(O.b,{to:"/movies/".concat(h,"/edit"),children:Object(j.jsx)(L.a,{variant:"primary",type:"submit",children:"Update Movie"})})]})}):Object(j.jsx)(q.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},Y=function(e){var t=e.handleSubmit,a=e.title,r=e.director,n=e.setTitle,s=e.setDirector;return Object(j.jsxs)(E.a,{onSubmit:t,children:[Object(j.jsxs)(E.a.Group,{controlId:"title",children:[Object(j.jsx)(E.a.Label,{children:"Title"}),Object(j.jsx)(E.a.Control,{placeholder:"A Wonderful Film",name:"title",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"director",children:[Object(j.jsx)(E.a.Label,{children:"Director"}),Object(j.jsx)(E.a.Control,{placeholder:"A Director",name:"director",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})},K=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(""),s=Object(i.a)(n,2),c=s[0],l=s[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(r.useState)(null),O=Object(i.a)(h,2),v=O[0],p=O[1],x=function(){var e=Object(S.a)(w.a.mark((function e(r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,J(c,b,t);case 4:n=e.sent,p(n.data.movie._id),a({heading:"Movie Created",message:"Created ".concat(c," successfully."),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a({heading:"Failed to create movie",message:e.t0.message,variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return t?v?Object(j.jsx)(o.a,{to:"/movies/".concat(v)}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Create Movie"}),Object(j.jsx)(Y,{handleSubmit:x,title:c,director:b,setTitle:l,setDirector:m})]})}):Object(j.jsx)(o.a,{to:"/"})},Q=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(""),s=Object(i.a)(n,2),c=s[0],l=s[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(r.useState)(!1),O=Object(i.a)(h,2),v=O[0],p=O[1],x=Object(o.h)().id;if(!t)return Object(j.jsx)(o.a,{to:"/"});Object(r.useEffect)((function(){(function(){var e=Object(S.a)(w.a.mark((function e(){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(x,t);case 3:r=e.sent,l(r.data.movie.title),m(r.data.movie.director),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({heading:"Failed to load movie",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=function(){var e=Object(S.a)(w.a.mark((function e(r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,H(x,c,b,t);case 4:p(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({heading:"Failed to update movie",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return v?Object(j.jsx)(o.a,{to:"/movies/".concat(x)}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Edit Movie"}),Object(j.jsx)(Y,{handleSubmit:g,title:c,director:b,setTitle:l,setDirector:m})]})})},V=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(null),s=Object(i.a)(n,2),c=s[0],l=s[1];if(!t)return Object(j.jsx)(o.a,{to:"/"});if(Object(r.useEffect)((function(){(function(){var e=Object(S.a)(w.a.mark((function e(){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t);case 3:r=e.sent,l(r.data.movies),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Movies List failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c){if(0===c.length)return Object(j.jsx)("h1",{children:"No movies yet, go make some!"});var u=c.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"/movies/".concat(e._id),children:e.title})},e._id)}));return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Movies"}),Object(j.jsx)("ul",{children:u})]})})}return Object(j.jsx)(q.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},X=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)([]),u=Object(i.a)(s,2),b=u[0],m=u[1],h=function(e){var t=e.heading,a=e.message,r=e.variant,n=Object(l.a)();m((function(e){return[].concat(Object(c.a)(e),[{heading:t,message:a,variant:r,id:n}])}))},O=function(e){m((function(t){return t.filter((function(t){return t.id!==e}))}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{user:a}),b.map((function(e){return Object(j.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message,id:e.id,deleteAlert:O},e.id)})),Object(j.jsx)("main",{className:"container",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/sign-up",element:Object(j.jsx)(M,{msgAlert:h,setUser:n})}),Object(j.jsx)(o.b,{path:"/sign-in",element:Object(j.jsx)(U,{msgAlert:h,setUser:n})}),Object(j.jsx)(o.b,{path:"/sign-out",element:Object(j.jsx)(B,{msgAlert:h,clearUser:function(){return n(null)},user:a})}),Object(j.jsx)(o.b,{path:"/change-password",element:Object(j.jsx)(G,{msgAlert:h,user:a})}),Object(j.jsx)(o.b,{path:"/",element:Object(j.jsx)(T,{})}),Object(j.jsx)(o.b,{path:"/movies",element:Object(j.jsx)(V,{msgAlert:h,user:a})}),Object(j.jsx)(o.b,{path:"/movies/:id",element:Object(j.jsx)(R,{msgAlert:h,user:a})}),Object(j.jsx)(o.b,{path:"/movies/create",element:Object(j.jsx)(K,{msgAlert:h,user:a})}),Object(j.jsx)(o.b,{path:"/movies/:id/edit",element:Object(j.jsx)(Q,{msgAlert:h,user:a})})]})})]})},Z=Object(j.jsx)(O.a,{basename:"/react-auth",children:Object(j.jsx)(X,{})});s.a.render(Z,document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.41a03d6f.chunk.js.map