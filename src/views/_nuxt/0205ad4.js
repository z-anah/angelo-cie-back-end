(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,5],{421:function(t,n,e){"use strict";e.r(n);var r=e(45),component=Object(r.a)({},(function(){var t=this,n=t._self._c;return n("nav",{staticClass:"defaultscroll is-sticky",attrs:{id:"topnav"}},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"logo pl-0",attrs:{to:"/"}},[n("img",{staticClass:"inline-block dark:hidden",attrs:{src:"/images/angelo-coaching-icon-min.png",alt:""}}),t._v(" "),n("img",{staticClass:"hidden dark:inline-block",attrs:{src:"/images/angelo-coaching-icon-min-dark.png",alt:""}})]),t._v(" "),t._m(0),t._v(" "),n("div",{attrs:{id:"navigation"}},[n("ul",{staticClass:"navigation-menu"},[n("li",[n("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/"}},[t._v(" accueil ")])],1)])])],1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"menu-extras"},[n("div",{staticClass:"menu-item"},[n("a",{staticClass:"navbar-toggle",attrs:{id:"isToggle",onclick:"toggleMenu()"}},[n("div",{staticClass:"lines"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Nav:e(421).default})},422:function(t,n,e){"use strict";e.r(n);var r,l=e(11),c=(e(62),{data:function(){return{}},methods:{handleSubmit:(r=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$auth.$storage.removeUniversal("token"),this.$router.push({path:"/bo/login"});case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}}),o=c,d=e(45),component=Object(d.a)(o,(function(){var t=this,n=t._self._c;return n("nav",{staticClass:"defaultscroll is-sticky bg-white dark:bg-slate-900",attrs:{id:"topnav"}},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"logo pl-0",attrs:{to:"/"}},[n("img",{staticClass:"inline-block dark:hidden",attrs:{src:"/images/angelo-coaching-icon-min.png",alt:""}}),t._v(" "),n("img",{staticClass:"hidden dark:inline-block",attrs:{src:"/images/angelo-coaching-icon-min-dark.png",alt:""}})]),t._v(" "),t._m(0),t._v(" "),n("ul",{staticClass:"buy-button list-none mb-0"},[n("li",{staticClass:"inline mb-0"},[n("button",{staticClass:"btn rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white",on:{click:t.handleSubmit}},[t._v("\n          Se déconnecter\n        ")])])]),t._v(" "),n("div",{attrs:{id:"navigation"}},[n("ul",{staticClass:"navigation-menu"},[n("li",[n("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/dashboard"}},[t._v(" Dashboard ")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/blogs"}},[t._v(" Blogs ")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"sub-menu-item",attrs:{to:"/bo/usertracks"}},[t._v(" Tracks ")])],1)])])],1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"menu-extras"},[n("div",{staticClass:"menu-item"},[n("a",{staticClass:"navbar-toggle",attrs:{id:"isToggle",onclick:"toggleMenu()"}},[n("div",{staticClass:"lines"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Nav:e(421).default})},440:function(t,n,e){"use strict";e.r(n);var r=e(11),l=(e(62),{name:"dashboard",components:{BoNav:e(422).default},head:function(){return{title:"Tableau de bord"}},data:function(){return{}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.$auth.$storage.getUniversal("token")||t.$router.push({path:"/bo/login"});case 1:case"end":return n.stop()}}),n)})))()}}),c=e(45),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("main",[n("body",{staticClass:"font-nunito text-base text-black dark:text-white dark:bg-slate-900"},[n("BoNav"),t._v(" "),t._m(0),t._v(" "),n("script",{attrs:{src:"/assets/libs/tobii/js/tobii.min.js"}}),t._v(" "),n("script",{attrs:{src:"/assets/libs/jarallax/jarallax.min.js"}}),t._v(" "),n("script",{attrs:{src:"/assets/libs/tiny-slider/min/tiny-slider.js"}}),t._v(" "),n("script",{attrs:{src:"/assets/libs/shufflejs/shuffle.min.js"}}),t._v(" "),n("script",{attrs:{src:"/assets/libs/swiper/js/swiper.min.js"}}),t._v(" "),n("script",{attrs:{src:"/assets/libs/feather-icons/feather.min.js"}}),t._v(" "),n("script",{attrs:{src:"/assets/js/contact.js"}}),t._v(" "),n("script",{attrs:{src:"/assets/js/plugins.init.js"}}),t._v(" "),n("script",{attrs:{src:"/assets/js/app.js"}})],1)])}),[function(){var t=this._self._c;return t("section",{staticClass:"relative md:py-24 py-16"},[t("div",{staticClass:"container md:mt-24 mt-16"})])}],!1,null,null,null);n.default=component.exports;installComponents(component,{BoNav:e(422).default})}}]);