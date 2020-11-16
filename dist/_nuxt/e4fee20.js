(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{216:function(t,e,r){"use strict";var l={props:["slice"],name:"sidebar"},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"sidebar-left"},[r("ul",{staticClass:"uk-nav uk-nav-default"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("li",{staticClass:"uk-nav-header"},[t._v("Categories")]),t._v(" "),t._m(4),t._v(" "),t._l(t.slice.items,(function(t,i){return r("li",{key:i,attrs:{"uk-filter-control":t.tag}},[r("a",{attrs:{href:"#"}},[r("prismic-rich-text",{attrs:{field:t.name}})],1)])}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("Intro")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/gallery"}},[this._v("Gallery")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/about"}},[this._v("About")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/feedback"}},[this._v("Feedback")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"uk-active",attrs:{"uk-filter-control":""}},[e("a",{attrs:{href:"#"}},[this._v("All")])])}],!1,null,null,null);e.a=component.exports},217:function(t,e,r){"use strict";var l={props:["slice"],name:"offcanvas"},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"uk-offcanvas",attrs:{id:"offcanvas","uk-offcanvas":"mode: push; overlay: true"}},[r("div",{staticClass:"uk-offcanvas-bar uk-flex uk-flex-column"},[r("button",{staticClass:"uk-offcanvas-close",attrs:{type:"button","uk-close":""}}),t._v(" "),r("ul",{staticClass:"uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("li",{staticClass:"uk-nav-header"},[t._v("Categories")]),t._v(" "),t._m(4),t._v(" "),t._l(t.slice.items,(function(t,i){return r("li",{key:i,attrs:{"uk-filter-control":t.tag}},[r("a",{attrs:{href:"#"}},[r("prismic-rich-text",{attrs:{field:t.name}})],1)])}))],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("Intro")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/gallery"}},[this._v("Gallery")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/about"}},[this._v("About")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/feedback"}},[this._v("Feedback")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"uk-active",attrs:{"uk-filter-control":""}},[e("a",{staticClass:"uk-link-toggle",attrs:{href:""}},[this._v("All")])])}],!1,null,null,null);e.a=component.exports},224:function(t,e,r){"use strict";r.r(e);r(19);var l=r(3),n=r(216),c=r(217),o={name:"Gallery",transition:"page",components:{Sidebar:n.a,Offcanvas:c.a},head:function(){return{title:"Bill Funk Photo Gallery"}},data:function(){return{slices:[]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,l=t.error,e.prev=1,e.next=4,r.api.getSingle("gallery");case 4:return n=e.sent.data,e.next=7,r.api.query(r.predicates.at("document.type","photo"),{orderings:"[my.photo.date desc]",pageSize:25,page:1});case 7:return c=e.sent,e.abrupt("return",{slices:n.body,photos:c.results});case 11:e.prev=11,e.t0=e.catch(1),l({statusCode:404,message:"Page not found"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()}},f=r(9),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gallery uk-container",attrs:{"uk-filter":"target: .js-filter"}},[r("div",{staticClass:"gallery uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m  uk-text-center  js-filter",attrs:{"data-uk-grid":"masonry: true"}},t._l(t.photos,(function(e){return r("div",{key:e.id,class:e.data.tag},[r("a",{attrs:{href:"/gallery/"+e.uid,"uk-scrollspy":"cls: uk-animation-fade; target: .uk-card; delay: 800; repeat: true"}},[r("div",{staticClass:"uk-card uk-transition-toggle"},[r("div",{staticClass:"uk-card-media-top"},[r("prismic-image",{attrs:{field:e.data.photo.small}})],1),t._v(" "),t._m(0,!0)]),t._v(" "),r("h3",[t._v(t._s(t.$prismic.asText(e.data.title)))])])])})),0),t._v(" "),t._l(t.slices,(function(e,l){return r("div",{key:"slice-"+l},["tags"===e.slice_type?[r("sidebar",{attrs:{slice:e}}),t._v(" "),r("offcanvas",{attrs:{slice:e}})]:t._e()],2)})),t._v(" "),t._m(1)],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle"},[e("span",{staticClass:"uk-transition-fade",attrs:{"uk-overlay-icon":"icon: plus; ratio: 2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"uk-pagination uk-flex-center",attrs:{"uk-margin":""}},[e("li",[e("a",{staticClass:"uk-active",attrs:{href:"/gallery"}},[this._v("1")])]),this._v(" "),e("li",[e("a",{attrs:{href:"/gallery/2"}},[this._v("2")])]),this._v(" "),e("li",[e("a",{attrs:{href:"/gallery/3"}},[this._v("3")])]),this._v(" "),e("li",[e("a",{attrs:{href:"/gallery/4"}},[this._v("4")])])])}],!1,null,null,null);e.default=component.exports}}]);