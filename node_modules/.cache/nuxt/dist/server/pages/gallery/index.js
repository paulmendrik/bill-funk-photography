exports.ids = [7];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Sidebar.vue?vue&type=template&id=ae4562f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"sidebar-left\"><ul class=\"uk-nav uk-nav-default\"><li><a href=\"/\">Intro</a></li> <li><a href=\"/gallery\">Gallery</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/feedback\">Feedback</a></li></ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=template&id=ae4562f0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  props: ['slice'],
  name: 'sidebar'
});
// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "466a40d5"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Offcanvas.vue?vue&type=template&id=1a1bcfef&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"offcanvas\" uk-offcanvas=\"mode: push; overlay: true\" class=\"uk-offcanvas\"><div class=\"uk-offcanvas-bar uk-flex uk-flex-column\"><button type=\"button\" uk-close class=\"uk-offcanvas-close\"></button> <ul class=\"uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical\"><li><a href=\"/\">Intro</a></li> <li><a href=\"/gallery\">Gallery</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/feedback\">Feedback</a></li></ul></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Offcanvas.vue?vue&type=template&id=1a1bcfef&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Offcanvas.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Offcanvasvue_type_script_lang_js_ = ({
  props: ['slice'],
  name: 'offcanvas'
});
// CONCATENATED MODULE: ./components/Offcanvas.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Offcanvasvue_type_script_lang_js_ = (Offcanvasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Offcanvas.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Offcanvasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bd18f180"
  
)

/* harmony default export */ var Offcanvas = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/gallery/index.vue?vue&type=template&id=5919f14c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gallery uk-container",attrs:{"uk-filter":"target: .js-filter"}},[_vm._ssrNode("<div data-uk-grid=\"masonry: true\" class=\"gallery uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m  uk-text-center  js-filter\">","</div>",_vm._l((_vm.photos),function(photo){return _vm._ssrNode("<div"+(_vm._ssrClass(null,photo.data.tag))+">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",'/gallery/' + photo.uid))+" uk-scrollspy=\"cls: uk-animation-fade; target: .uk-card; delay: 800; repeat: true\">","</a>",[_vm._ssrNode("<div class=\"uk-card uk-transition-toggle\">","</div>",[_vm._ssrNode("<div class=\"uk-card-media-top\">","</div>",[_c('prismic-image',{attrs:{"field":photo.data.photo.small}})],1),_vm._ssrNode(" <div class=\"uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle\"><span uk-overlay-icon=\"icon: plus; ratio: 2\" class=\"uk-transition-fade\"></span></div>")],2),_vm._ssrNode(" <h3>"+_vm._ssrEscape(_vm._s(_vm.$prismic.asText(photo.data.title)))+"</h3>")],2)])}),0),_vm._ssrNode(" "),_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div>","</div>",[(slice.slice_type === 'tags' )?[_c('sidebar',{attrs:{"slice":slice}}),_vm._ssrNode(" "),_c('offcanvas',{attrs:{"slice":slice}})]:_vm._e()],2)}),_vm._ssrNode(" <ul uk-margin class=\"uk-pagination uk-flex-center\"><li><a href=\"/gallery\" class=\"uk-active\">1</a></li> <li><a href=\"/gallery/2\">2</a></li> <li><a href=\"/gallery/3\">3</a></li> <li><a href=\"/gallery/4\">4</a></li></ul>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/gallery/index.vue?vue&type=template&id=5919f14c&

// EXTERNAL MODULE: ./components/Sidebar.vue + 4 modules
var Sidebar = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Offcanvas.vue + 4 modules
var Offcanvas = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/gallery/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var galleryvue_type_script_lang_js_ = ({
  name: "Gallery",
  transition: "page",
  components: {
    Sidebar: Sidebar["a" /* default */],
    Offcanvas: Offcanvas["a" /* default */]
  },

  head() {
    return {
      title: 'Bill Funk Photo Gallery'
    };
  },

  data() {
    return {
      slices: []
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const document = (await $prismic.api.getSingle('gallery')).data;
      const galleryPhotos = await $prismic.api.query($prismic.predicates.at("document.type", "photo"), {
        orderings: '[document.last_publication_date desc]',
        pageSize: 25,
        page: 1
      });
      return {
        slices: document.body,
        photos: galleryPhotos.results
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/gallery/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/gallery/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d9dbf28"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map