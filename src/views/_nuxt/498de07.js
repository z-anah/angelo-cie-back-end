(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,5],{419:function(t,e,r){"use strict";r.r(e);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"defaultscroll is-sticky",attrs:{id:"topnav"}},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo pl-0",attrs:{to:"/"}},[e("img",{staticClass:"inline-block dark:hidden",attrs:{src:"/images/angelo-coaching-icon-min.png",alt:""}}),t._v(" "),e("img",{staticClass:"hidden dark:inline-block",attrs:{src:"/images/angelo-coaching-icon-min-dark.png",alt:""}})]),t._v(" "),t._m(0),t._v(" "),e("div",{attrs:{id:"navigation"}},[e("ul",{staticClass:"navigation-menu"},[e("li",[e("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/"}},[t._v(" accueil ")])],1)])])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-extras"},[e("div",{staticClass:"menu-item"},[e("a",{staticClass:"navbar-toggle",attrs:{id:"isToggle",onclick:"toggleMenu()"}},[e("div",{staticClass:"lines"},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(419).default})},420:function(t,e,r){"use strict";r.r(e);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"defaultscroll is-sticky bg-white dark:bg-slate-900",attrs:{id:"topnav"}},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo pl-0",attrs:{to:"/"}},[e("img",{staticClass:"inline-block dark:hidden",attrs:{src:"/images/angelo-coaching-icon-min.png",alt:""}}),t._v(" "),e("img",{staticClass:"hidden dark:inline-block",attrs:{src:"/images/angelo-coaching-icon-min-dark.png",alt:""}})]),t._v(" "),t._m(0),t._v(" "),e("div",{attrs:{id:"navigation"}},[e("ul",{staticClass:"navigation-menu"},[e("li",[e("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/dashboard"}},[t._v(" Dashboard ")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/blogs"}},[t._v(" Blogs ")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/usertracks"}},[t._v(" Tracks ")])],1)])])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-extras"},[e("div",{staticClass:"menu-item"},[e("a",{staticClass:"navbar-toggle",attrs:{id:"isToggle",onclick:"toggleMenu()"}},[e("div",{staticClass:"lines"},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(419).default})},421:function(t,e,r){"use strict";var n=r(12),l=(r(62),r(79),r(80),r(18),r(46),"https://angelo-cie.com/api/"),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,c,o,d,v,m,f,h,_,C,k,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.path.includes("/bo/")){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,r={method:"GET",redirect:"follow"},t.next=8,fetch("https://api.ipregistry.co/?key=5jcwlu4t2skiol7p",r).then((function(t){return t.text()}));case 8:return n=t.sent,c=JSON.parse(n),o=c.ip,d=c.location,v=c.time_zone,m=d.continent,f=d.country,h=d.region,_=v.current_time,C={current_time:_,ip:o,continent:m.name,country:f.name,region:h.name,url:e.fullPath},(k=new Headers).append("Content-Type","application/json"),x=JSON.stringify(C),r={method:"POST",headers:k,body:x,redirect:"follow"},t.next=20,fetch("".concat(l,"usertrack"),r);case 20:t.next=25;break;case 22:return t.prev=22,t.t0=t.catch(4),t.abrupt("return",{status:400});case 25:case"end":return t.stop()}}),t,null,[[4,22]])})));return function(e){return t.apply(this,arguments)}}();e.a={getUserTrack:c,API:l}},437:function(t,e,r){"use strict";r.r(e);var n=r(12),l=(r(62),r(18),r(420)),c=r(421),o={name:"Blogs",components:{BoNav:l.default},head:function(){return{title:"Blogs"}},data:function(){return{list:[]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"GET",redirect:"follow"},e.next=4,fetch("".concat(c.a.API,"blogs"),r).then((function(t){return t.text()}));case 4:n=e.sent,l=JSON.parse(n),t.list=l.data,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},d=r(45),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("main",[e("body",{staticClass:"font-nunito text-base text-black dark:text-white dark:bg-slate-900"},[e("BoNav"),t._v(" "),e("section",{staticClass:"relative md:py-24 py-16"},[t._m(0),t._v(" "),e("div",{staticClass:"container md:mt-6 mt-4"},[e("table",{staticClass:"w-full text-left"},[t._m(1),t._v(" "),e("tbody",t._l(t.list,(function(r){return e("tr",{staticClass:"border-t border-gray-100 dark:border-gray-700"},[e("td",{staticClass:"p-4"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"uil uil-clipboard-alt"}),t._v(t._s(r.title))])]),t._v(" "),e("td",{staticClass:"p-4 text-right"},[e("a",{staticClass:"btn bg-yellow-600 hover:bg-yellow-700 border-yellow-600 hover:border-yellow-700 text-white rounded-md",attrs:{href:"/bo/blog?id=".concat(r.id)}},[e("i",{staticClass:"uil uil-clipboard-alt"}),t._v(" Modifier")]),t._v(" "),t._m(2,!0)])])})),0)])])]),t._v(" "),e("script",{attrs:{src:"/assets/libs/tobii/js/tobii.min.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/libs/jarallax/jarallax.min.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/libs/tiny-slider/min/tiny-slider.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/libs/shufflejs/shuffle.min.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/libs/swiper/js/swiper.min.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/libs/feather-icons/feather.min.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/js/contact.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/js/plugins.init.js"}}),t._v(" "),e("script",{attrs:{src:"/assets/js/app.js"}})],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"grid grid-cols-1 pb-8 text-center"},[t("h3",{staticClass:"mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"},[this._v("Blogs")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-5"},[t._v("Blogs")]),t._v(" "),e("th",{staticClass:"px-4 py-5 text-right"},[t._v("Actions")])])])},function(){var t=this._self._c;return t("a",{staticClass:"btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md",attrs:{href:"#"}},[t("i",{staticClass:"uil uil-clipboard-alt"}),this._v(" Effacer")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BoNav:r(420).default})}}]);