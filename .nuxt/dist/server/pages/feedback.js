exports.ids = [2];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/feedback.vue?vue&type=template&id=66d70311&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"uk-section\">","</div>",[_vm._ssrNode("<div class=\"uk-container  uk-position-relative\">","</div>",[_vm._ssrNode("<h1 class=\"uk-heading-medium uk-width-1-1 uk-text-left\">","</h1>",[_c('prismic-rich-text',{attrs:{"field":_vm.feedback.title}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div uk-grid class=\"uk-flex-middle uk-grid-small\">","</div>",[_vm._ssrNode("<div class=\"uk-width-1-1@m content\">","</div>",[_c('prismic-rich-text',{attrs:{"field":_vm.feedback.text}})],1),_vm._ssrNode(" <div class=\"uk-width-1-1@m uk-flex-first uk-margin-medium-bottom\"><img"+(_vm._ssrAttr("data-src",_vm.feedback.image.url))+" width=\"100%\" height uk-img></div>")],2),_vm._ssrNode(" <div id=\"comments\"></div> <div id=\"graphcomment\"></div>")],2)]),_vm._ssrNode(" <div class=\"sidebar-left\"><ul class=\"uk-nav uk-nav-default\"><li><a href=\"/\">Intro</a></li> <li><a href=\"/gallery\">Gallery</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/feedback\">Feedback</a></li></ul></div> <div id=\"offcanvas\" uk-offcanvas=\"mode: push; overlay: true\" class=\"uk-offcanvas\"><div class=\"uk-offcanvas-bar\"><button type=\"button\" uk-close class=\"uk-offcanvas-close\"></button> <div class=\"uk-panel\"><ul class=\"uk-nav uk-nav-default\"><li><a href=\"/\">Intro</a></li> <li><a href=\"/gallery\">Gallery</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/feedback\">Feedback</a></li></ul></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/feedback.vue?vue&type=template&id=66d70311&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/feedback.vue?vue&type=script&lang=js&
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
//
//
//
//
//
/* harmony default export */ var feedbackvue_type_script_lang_js_ = ({
  name: "Feedback",
  transition: "page",
  head: {
    title: 'Bill Funk - Feedback'
  },

  mounted() {
    window.gc_params = {
      graphcomment_id: 'Bill-Funk',
      fixed_header_height: 100
    };

    (function () {
      var gc = document.createElement('script');
      gc.type = 'text/javascript';
      gc.async = true;
      gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
    })();
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const feedback = (await $prismic.api.getSingle('feedback')).data;
      return {
        feedback
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/feedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_feedbackvue_type_script_lang_js_ = (feedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/feedback.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_feedbackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2658e8b1"
  
)

/* harmony default export */ var feedback = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=feedback.js.map