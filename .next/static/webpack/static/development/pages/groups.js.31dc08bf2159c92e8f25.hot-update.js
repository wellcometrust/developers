webpackHotUpdate("static/development/pages/groups.js",{

/***/ "./pages/groups.js":
/*!*************************!*\
  !*** ./pages/groups.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/groups */ "./data/groups.js");
/* harmony import */ var _data_groups__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_groups__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "/Users/jamesgorrie/projects/developers/pages/groups.js";



function groupBy(arr, key) {
  return arr.reduce(function (acc, val) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, acc, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, val[key], [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(acc[val[key]] || []), [val])));
  }, {});
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var groupedGroups = groupBy(_data_groups__WEBPACK_IMPORTED_MODULE_5___default.a, 'status');
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(groupedGroups).map(function (status) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: status,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, status), groupedGroups[status].map(function (group) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        key: group.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, group.name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, group.when), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, group.status), group.link && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: group.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\uD83D\uDC40")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, group.who.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
          key: person,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, person);
      })));
    }));
  }));
});

/***/ })

})
//# sourceMappingURL=groups.js.31dc08bf2159c92e8f25.hot-update.js.map