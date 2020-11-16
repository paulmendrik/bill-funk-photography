exports.ids = [6];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/gallery/_uid.vue?vue&type=template&id=4d3bf1f7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"uk-container"},[_vm._ssrNode("<div uk-grid class=\"uk-container uk-grid-collapse uk-child-width-1-1 uk-flex-middle\">","</div>",[_vm._ssrNode("<div class=\"details\">","</div>",[_vm._ssrNode("<h1 class=\"cat\">"+_vm._ssrEscape(_vm._s(_vm.document.tag))+"</h1> <h1>"+_vm._ssrEscape(_vm._s(_vm.$prismic.asText(_vm.document.title)))+"</h1> "),_c('prismic-rich-text',{attrs:{"field":_vm.document.content}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div uk-lightbox class=\"image uk-margin-large-top\">","</div>",[_c('prismic-link',{attrs:{"field":_vm.document.photo}},[_c('prismic-image',{attrs:{"field":_vm.document.photo}})],1)],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/gallery/_uid.vue?vue&type=template&id=4d3bf1f7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/gallery/_uid.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _uidvue_type_script_lang_js_ = ({
  name: "Photo",
  transition: "page",
  layout: "details",

  head() {
    return {
      title: 'Bill Funk Photo Gallery'
    };
  },

  async asyncData({
    $prismic,
    params,
    error
  }) {
    try {
      const post = (await $prismic.api.getByUID('photo', params.uid)).data;
      return {
        document: post
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/gallery/_uid.vue?vue&type=script&lang=js&
 /* harmony default export */ var gallery_uidvue_type_script_lang_js_ = (_uidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/gallery/_uid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  gallery_uidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c116daa"
  
)

/* harmony default export */ var _uid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_uid.js.map