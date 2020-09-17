(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/api */ "./resources/js/Services/api.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      videos: []
    };
  },
  methods: {
    // Gets all videos from database
    getVideos: function getVideos() {
      var _this = this;

      _Services_api__WEBPACK_IMPORTED_MODULE_0__["default"].getVideos().then(function (response) {
        _this.videos = response.data.response;
      });
    },
    DisplayText: function DisplayText(e) {
      var image = document.getElementsByClassName('thumbnail')[e - 1];
      var thumbnailText = document.getElementsByClassName('thumbNailText')[e - 1];
      image.style.filter = "grayscale(100%)";
      thumbnailText.style.opacity = "1";
    },
    HiddeText: function HiddeText(e) {
      var image = document.getElementsByClassName('thumbnail')[e - 1];
      var thumbnailText = document.getElementsByClassName('thumbNailText')[e - 1];
      image.style.filter = "grayscale(0%)";
      thumbnailText.style.opacity = "0";
    },
    redirect: function redirect(e) {
      window.location.href = "/work/" + e;
    }
  },
  mounted: function mounted() {
    this.getVideos();
  }
});

window.onload = function () {
  var image = document.getElementsByClassName('thumbnail');
  var thumbnailText = document.getElementsByClassName('thumbNailText');

  for (var i = 0; i < image.length; i++) {
    image[i].classList.remove('fade');
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-62dba1d4] {\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Open Sans', sans-serif;\n}\n.Projekt[data-v-62dba1d4] {\n    height: 400px;\n    padding-top: 10px;\n}\n.Projekt[data-v-62dba1d4]:hover {\n    cursor: pointer;\n}\n#Projects[data-v-62dba1d4] {\n    width: 100%;\n    position: relative;\n    overflow: auto;\n    margin-top: 10px;\n    padding-bottom: 50px;\n}\n.projectVideo[data-v-62dba1d4] {\n    width: 97.5%;\n    height: 100%;\n    margin: 0 auto;\n    position: relative;\n}\n.thumbNailText[data-v-62dba1d4] {\n    height: 100%;\n    width: 80%;\n    position: absolute;\n    font-family: 'Open Sans', sans-serif;\n    text-align: center;\n    bottom: 0%;\n    left: 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    transition: 0.1s;\n    opacity: 0;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    text-shadow: 0px 8px 9px black;\n}\n.thumbnail[data-v-62dba1d4] {\n    height: 100%;\n    width: 100%;\n    -webkit-animation: 0.7s ease-out fadeOut-data-v-62dba1d4;\n            animation: 0.7s ease-out fadeOut-data-v-62dba1d4;\n    margin: 0 auto;\n}\n@-webkit-keyframes fadeOut-data-v-62dba1d4 {\n0% {\n        opacity: 0;\n}\n100% {\n        opacity: 1;\n}\n}\n@keyframes fadeOut-data-v-62dba1d4 {\n0% {\n        opacity: 0;\n}\n100% {\n        opacity: 1;\n}\n}\n@media only screen and (min-width: 1200px) {\n.thumbnail[data-v-62dba1d4] {\n        min-height: 360px;\n}\n.Projekt[data-v-62dba1d4] {\n        height: auto;\n}\n}\n@media only screen and (max-width: 1140px) {\n.Projekt[data-v-62dba1d4] {\n        height: auto;\n}\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n.thumbnail[data-v-62dba1d4] {\n        height: 30vw;\n        min-height: 453px;\n}\n.Projekt[data-v-62dba1d4] {\n        height: auto;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n.thumbnail[data-v-62dba1d4] {\n        height: 30vw;\n        min-height: 336px\n}\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n.thumbnail[data-v-62dba1d4] {\n        min-height: 450px;\n        height: 55vw;\n}\n}\n@media only screen and (max-width: 575px) {\n.thumbnail[data-v-62dba1d4] {\n        min-height: 250px;\n        height: 85vw;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/home.vue?vue&type=template&id=62dba1d4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/home.vue?vue&type=template&id=62dba1d4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row", attrs: { id: "Projects" } },
    _vm._l(_vm.videos, function(video) {
      return _c(
        "div",
        { key: video.id, staticClass: "col-xl-4 col-md-6 Projekt" },
        [
          _c("div", { staticClass: "projectVideo" }, [
            _c("img", {
              staticClass: "thumbnail",
              attrs: { src: "/storage/" + video.videoThumbnail },
              on: {
                mouseover: function($event) {
                  return _vm.DisplayText(video.id)
                },
                mouseleave: function($event) {
                  return _vm.HiddeText(video.id)
                },
                click: function($event) {
                  return _vm.redirect(video.videoApiTitle)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "h3",
              {
                staticClass: "thumbNailText",
                on: {
                  click: function($event) {
                    return _vm.redirect(video.videoApiTitle)
                  },
                  mouseover: function($event) {
                    return _vm.DisplayText(video.id)
                  },
                  mouseleave: function($event) {
                    return _vm.HiddeText(video.id)
                  }
                }
              },
              [
                _vm._v(
                  "\n                " + _vm._s(video.videoTitle.toUpperCase())
                )
              ]
            )
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/App/pages/home.vue":
/*!*****************************************!*\
  !*** ./resources/js/App/pages/home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_62dba1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=62dba1d4&scoped=true& */ "./resources/js/App/pages/home.vue?vue&type=template&id=62dba1d4&scoped=true&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/App/pages/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_id_62dba1d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css& */ "./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_62dba1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_62dba1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "62dba1d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App/pages/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App/pages/home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/App/pages/home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_62dba1d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/home.vue?vue&type=style&index=0&id=62dba1d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_62dba1d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_62dba1d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_62dba1d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_62dba1d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_62dba1d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/App/pages/home.vue?vue&type=template&id=62dba1d4&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/App/pages/home.vue?vue&type=template&id=62dba1d4&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_62dba1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=62dba1d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/home.vue?vue&type=template&id=62dba1d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_62dba1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_62dba1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Services/api.js":
/*!**************************************!*\
  !*** ./resources/js/Services/api.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl: '/'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Get all videos
   * @returns {AxiosInstance}
   */
  getVideos: function getVideos() {
    return instance.get('/api/videos');
  },

  /**
   * Get video data
   * @param {string} id
   * @returns {Promise<AxiosResponse<any>>}
   */
  getVideo: function getVideo(id) {
    return instance.get('/api/videos/' + id);
  },

  /**
   * Deletes video from database
   * @param {number} id
   * @returns {AxiosInstance}
   */
  deleteVideo: function deleteVideo(id) {
    return instance["delete"]('/api/videos/' + id);
  },

  /**
   * Modifys video data
   * @param {number} id
   */
  modifyVideo: function modifyVideo(id) {
    return instance.patch('/api/videos/' + id);
  },

  /**
   * Attempts to login user
   * @param {string} username
   * @param {string} password
   * @returns {Promise<AxiosResponse<any>>}
   */
  login: function login(username, password) {
    return instance.post('/api/login', {
      username: username,
      password: password
    });
  }
});

/***/ })

}]);