(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,5],{421:function(t,e,n){"use strict";n.r(e);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"defaultscroll is-sticky",attrs:{id:"topnav"}},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo pl-0",attrs:{to:"/"}},[e("img",{staticClass:"inline-block dark:hidden",attrs:{src:"/images/angelo-coaching-icon-min.png",alt:""}}),t._v(" "),e("img",{staticClass:"hidden dark:inline-block",attrs:{src:"/images/angelo-coaching-icon-min-dark.png",alt:""}})]),t._v(" "),t._m(0),t._v(" "),e("div",{attrs:{id:"navigation"}},[e("ul",{staticClass:"navigation-menu"},[e("li",[e("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/"}},[t._v(" accueil ")])],1)])])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-extras"},[e("div",{staticClass:"menu-item"},[e("a",{staticClass:"navbar-toggle",attrs:{id:"isToggle",onclick:"toggleMenu()"}},[e("div",{staticClass:"lines"},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(421).default})},422:function(t,e,n){"use strict";n.r(e);var r,o=n(11),l=(n(62),{data:function(){return{}},methods:{handleSubmit:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$auth.$storage.removeUniversal("token"),this.$router.push({path:"/bo/login"});case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}}),c=l,d=n(45),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"defaultscroll is-sticky bg-white dark:bg-slate-900",attrs:{id:"topnav"}},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo pl-0",attrs:{to:"/"}},[e("img",{staticClass:"inline-block dark:hidden",attrs:{src:"/images/angelo-coaching-icon-min.png",alt:""}}),t._v(" "),e("img",{staticClass:"hidden dark:inline-block",attrs:{src:"/images/angelo-coaching-icon-min-dark.png",alt:""}})]),t._v(" "),t._m(0),t._v(" "),e("ul",{staticClass:"buy-button list-none mb-0"},[e("li",{staticClass:"inline mb-0"},[e("button",{staticClass:"btn rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white",on:{click:t.handleSubmit}},[t._v("\n          Se déconnecter\n        ")])])]),t._v(" "),e("div",{attrs:{id:"navigation"}},[e("ul",{staticClass:"navigation-menu"},[e("li",[e("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/dashboard"}},[t._v(" Dashboard ")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/blogs"}},[t._v(" Blogs ")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/usertracks"}},[t._v(" Tracks ")])],1)])])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-extras"},[e("div",{staticClass:"menu-item"},[e("a",{staticClass:"navbar-toggle",attrs:{id:"isToggle",onclick:"toggleMenu()"}},[e("div",{staticClass:"lines"},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(421).default})},423:function(t,e,n){"use strict";var r=n(11),o=(n(62),n(80),n(81),n(18),n(46),"https://angelo-cie.com/api/"),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,l,c,d,m,v,f,h,C,_,k,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.path.includes("/bo/")){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,n={method:"GET",redirect:"follow"},t.next=8,fetch("https://api.ipregistry.co/?key=5jcwlu4t2skiol7p",n).then((function(t){return t.text()}));case 8:return r=t.sent,l=JSON.parse(r),c=l.ip,d=l.location,m=l.time_zone,v=d.continent,f=d.country,h=d.region,C=m.current_time,_={current_time:C,ip:c,continent:v.name,country:f.name,region:h.name,url:e.fullPath},(k=new Headers).append("Content-Type","application/json"),w=JSON.stringify(_),n={method:"POST",headers:k,body:w,redirect:"follow"},t.next=20,fetch("".concat(o,"usertrack"),n);case 20:t.next=25;break;case 22:return t.prev=22,t.t0=t.catch(4),t.abrupt("return",{status:400});case 25:case"end":return t.stop()}}),t,null,[[4,22]])})));return function(e){return t.apply(this,arguments)}}();e.a={getUserTrack:l,API:o}},441:function(t,e,n){"use strict";n.r(e);var r,o=n(21),l=n(11),c=(n(62),n(191),n(18),n(422)),d=n(423),m={name:"Login",components:{BoNav:c.default},head:function(){return{title:"Login"}},data:function(){return{form:{password:"",email:""},error:""}},methods:{handleSubmit:(r=Object(l.a)(regeneratorRuntime.mark((function t(){var e,body,n,r,l,c,m,v,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for((e=new Headers).append("Content-Type","application/json"),body={},n=0,r=Object.entries(this.form);n<r.length;n++)l=Object(o.a)(r[n],2),c=l[0],m=l[1],body[c]=m;return v={method:"POST",headers:e,body:JSON.stringify(body),redirect:"follow"},t.prev=5,t.next=8,fetch("".concat(d.a.API,"auth/signin"),v).then((function(t){return t.text()}));case 8:f=t.sent,h=JSON.parse(f),this.$auth.$storage.setUniversal("token",h.data.token),this.$router.push({path:"/bo/dashboard"}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),this.error="Email / Mots de passe erroné";case 17:case"end":return t.stop()}}),t,this,[[5,14]])}))),function(){return r.apply(this,arguments)})}},v=m,f=n(45),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("main",[e("body",{staticClass:"font-nunito text-base text-black dark:text-white dark:bg-slate-900"},[e("section",{staticClass:"md:h-screen py-36 flex items-center bg-[url('../../assets/images/auth.html')] bg-no-repeat bg-center"},[e("div",{staticClass:"absolute inset-0 bg-gradient-to-b from-transparent to-black"}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-red-800 rounded-md"},[e("h5",{staticClass:"my-6 text-xl font-semibold"},[t._v("Back Office")]),t._v(" "),e("form",{staticClass:"text-left",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"grid grid-cols-1"},[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"font-semibold",attrs:{for:"LoginEmail"}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-input mt-3",attrs:{id:"LoginEmail",type:"email",placeholder:"Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"font-semibold",attrs:{for:"LoginPassword"}},[t._v("Mots de passe")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-input mt-3",attrs:{id:"LoginPassword",type:"password",placeholder:"Mots de passe"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-4"},[e("p",{attrs:{"v-if":""!==t.error}},[t._v(t._s(t.error))]),t._v(" "),e("input",{staticClass:"btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md w-full",attrs:{type:"submit",value:"Login / Sign in"}})])])])])])])]),t._v(" "),e("script",{attrs:{src:"/assets/libs/feather-icons/feather.min.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/js/plugins.init.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/js/app.js"}})])])}),[],!1,null,null,null);e.default=component.exports}}]);