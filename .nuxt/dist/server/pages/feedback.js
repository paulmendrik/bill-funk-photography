exports.ids = [2];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/feedback.vue?vue&type=template&id=33d35922&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"uk-section\">","</div>",[_vm._ssrNode("<div class=\"uk-container  uk-position-relative\">","</div>",[_vm._ssrNode("<h1 class=\"uk-heading-medium uk-width-1-1 uk-text-left\">","</h1>",[_c('prismic-rich-text',{attrs:{"field":_vm.feedback.title}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div uk-grid class=\"uk-flex-middle uk-grid-small\">","</div>",[_vm._ssrNode("<div class=\"uk-width-1-1@m content\">","</div>",[_c('prismic-rich-text',{attrs:{"field":_vm.feedback.text}})],1),_vm._ssrNode(" <div class=\"uk-width-1-1@m uk-flex-first uk-margin-medium-bottom\"><img"+(_vm._ssrAttr("data-src",_vm.feedback.image.url))+" width=\"100%\" height uk-img></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"comments\">","</div>",[_vm._ssrNode("<button type=\"button\" class=\"uk-button uk-margin\">Send Feedback</button> "+((!_vm.isHidden)?("<div class=\"form uk-margin\"><form method=\"POST\" action=\"https://formspree.io/f/xwkwqlge\" uk-grid class=\"uk-grid-small uk-child-width-1-2@m uk-form-stacked\"><fieldset class=\"uk-fieldset\"><legend class=\"uk-legend\">Add Comment</legend> <div class=\"uk-margin\"><label class=\"uk-form-label\">Name</label> <div class=\"uk-form-controls\"><input type=\"text\" name=\"name\" id=\"full-name\" placeholder=\"Name\" required=\"required\" class=\"uk-input\"></div></div> <div class=\"uk-margin\"><label for=\"form-stacked-select\" class=\"uk-form-label\">Email</label> <div class=\"uk-form-controls\"><input type=\"email\" name=\"_replyto\" id=\"email-address\" placeholder=\"Email Address\" required=\"required\" class=\"uk-input\"></div></div> <div class=\"uk-margin\"><label class=\"uk-form-label\">Comment</label> <div class=\"uk-form-controls\"><textarea uk-textarea rows=\"5\" name=\"message\" id=\"message\" placeholder=\"Comment\" required=\"required\"></textarea></div></div> <input type=\"hidden\" name=\"_subject\" id=\"email-subject\" value=\"Feedback Submission\"> <div class=\"uk-margin\"><div class=\"uk-form-controls\"><input type=\"submit\" value=\"Send\" class=\"uk-button\"></div></div></fieldset></form></div>"):"<!---->")+" "),_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div>","</div>",[(slice.slice_type === 'comments' )?[_c('comments',{attrs:{"slice":slice}})]:_vm._e()],2)})],2)],2)]),_vm._ssrNode(" <div class=\"sidebar-left\"><ul class=\"uk-nav uk-nav-default\"><li><a href=\"/\">Intro</a></li> <li><a href=\"/gallery\">Gallery</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/feedback\">Feedback</a></li></ul></div> <div id=\"offcanvas\" uk-offcanvas=\"mode: push; overlay: true\" class=\"uk-offcanvas\"><div class=\"uk-offcanvas-bar\"><button type=\"button\" uk-close class=\"uk-offcanvas-close\"></button> <div class=\"uk-panel\"><ul class=\"uk-nav uk-nav-default\"><li><a href=\"/\">Intro</a></li> <li><a href=\"/gallery\">Gallery</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/feedback\">Feedback</a></li></ul></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/feedback.vue?vue&type=template&id=33d35922&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Comments.vue?vue&type=template&id=2d40506c&
var Commentsvue_type_template_id_2d40506c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul class=\"uk-comment-list\">","</ul>",[_vm._ssrNode("<h3>Comments</h3> "),_vm._l((_vm.slice.items),function(item,i){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<article tabindex=\"-1\" class=\"uk-comment uk-visible-toggle\">","</article>",[_vm._ssrNode("<header class=\"uk-comment-header uk-position-relative\">","</header>",[_vm._ssrNode("<div uk-grid class=\"uk-grid-medium uk-flex-middle\">","</div>",[_vm._ssrNode("<div class=\"uk-width-auto\">","</div>",[_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"uk-comment-avatar",attrs:{"data-src":"/icon.png","width":"80","height":"80","alt":"icon"}},[])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"uk-width-expand\">","</div>",[_vm._ssrNode("<h4 class=\"uk-comment-title uk-margin-remove\">","</h4>",[_vm._ssrNode("<a href=\"#\" class=\"uk-link-reset\">","</a>",[_c('prismic-rich-text',{attrs:{"field":item.name}})],1)]),_vm._ssrNode(" <p class=\"uk-comment-meta uk-margin-remove-top\"><a href=\"#\" class=\"uk-link-reset\">"+_vm._ssrEscape(_vm._s(Intl.DateTimeFormat('en-GB', _vm.dateOptions).format(new Date(item.date))))+"</a></p>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"uk-comment-body\">","</div>",[_vm._ssrNode("<p class=\"uk-heading-medium\">Comment</p> "),_c('prismic-rich-text',{attrs:{"field":item.comment}}),_vm._ssrNode(" <p class=\"uk-heading-medium\">Response</p> "),_c('prismic-rich-text',{attrs:{"field":item.reply}})],2)],2)])])})],2)])}
var Commentsvue_type_template_id_2d40506c_staticRenderFns = []


// CONCATENATED MODULE: ./components/Comments.vue?vue&type=template&id=2d40506c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Comments.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Commentsvue_type_script_lang_js_ = ({
  props: ['slice'],
  name: 'comments',

  data() {
    return {
      dateOptions: {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }
    };
  }

});
// CONCATENATED MODULE: ./components/Comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Commentsvue_type_script_lang_js_ = (Commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Comments.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Commentsvue_type_script_lang_js_,
  Commentsvue_type_template_id_2d40506c_render,
  Commentsvue_type_template_id_2d40506c_staticRenderFns,
  false,
  null,
  null,
  "9f7bfc6a"
  
)

/* harmony default export */ var Comments = (component.exports);
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
  components: {
    Comments: Comments
  },
  head: {
    title: 'Bill Funk - Feedback'
  },

  data() {
    return {
      isHidden: true,
      slices: []
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const feedback = (await $prismic.api.getSingle('feedback')).data;
      const document = (await $prismic.api.getSingle('comments')).data;
      return {
        feedback,
        slices: document.body
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
// CONCATENATED MODULE: ./pages/feedback.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var feedback_component = Object(componentNormalizer["a" /* default */])(
  pages_feedbackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7b7b9b82"
  
)

/* harmony default export */ var feedback = __webpack_exports__["default"] = (feedback_component.exports);

/***/ })

};;
//# sourceMappingURL=feedback.js.map