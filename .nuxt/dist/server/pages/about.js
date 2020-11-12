exports.ids = [1];
exports.modules = {

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/about.vue?vue&type=template&id=8f4112c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"uk-section\">","</div>",[_vm._ssrNode("<div class=\"uk-container  uk-position-relative\">","</div>",[_vm._ssrNode("<div uk-grid class=\"uk-flex-middle\">","</div>",[_vm._ssrNode("<div class=\"uk-width-1-2@m text\">","</div>",[_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('prismic-rich-text',{attrs:{"field":_vm.about.title}})],1),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.about.text}})],2),_vm._ssrNode(" <div class=\"uk-width-1-2@m uk-flex-first\"><img"+(_vm._ssrAttr("data-src",_vm.about.image.url))+" width height uk-img></div>")],2)])]),_vm._ssrNode(" <div class=\"sidebar-left\"><ul class=\"uk-nav uk-nav-default\"><li><a href=\"/\">Intro</a></li> <li><a href=\"/gallery\">Gallery</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/feedback\">Feedback</a></li></ul></div> <div id=\"offcanvas\" uk-offcanvas=\"mode: push; overlay: true\" class=\"uk-offcanvas\"><div class=\"uk-offcanvas-bar\"><button type=\"button\" uk-close class=\"uk-offcanvas-close\"></button> <div class=\"uk-panel\"><ul class=\"uk-nav uk-nav-default\"><li><a href=\"/\">Intro</a></li> <li><a href=\"/gallery\">Gallery</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/feedback\">Feedback</a></li></ul></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=8f4112c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/about.vue?vue&type=script&lang=js&
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
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: "About",
  transition: "page",

  head() {
    return {
      title: 'Bill Funk - About Me'
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
      const about = (await $prismic.api.getSingle('about')).data;
      return {
        about
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7dd7eb11"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map