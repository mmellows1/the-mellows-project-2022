/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/work"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fwork&absolutePagePath=%2FUsers%2Fmatthewmellowswork%2FDocuments%2Fpersonal%2Fthe-mellows-project-2022%2Fpages%2Fwork%2Findex.js!":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fwork&absolutePagePath=%2FUsers%2Fmatthewmellowswork%2FDocuments%2Fpersonal%2Fthe-mellows-project-2022%2Fpages%2Fwork%2Findex.js! ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/work\",\n      function () {\n        return __webpack_require__(/*! ./pages/work/index.js */ \"./pages/work/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/work\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZ3b3JrJmFic29sdXRlUGFnZVBhdGg9JTJGVXNlcnMlMkZtYXR0aGV3bWVsbG93c3dvcmslMkZEb2N1bWVudHMlMkZwZXJzb25hbCUyRnRoZS1tZWxsb3dzLXByb2plY3QtMjAyMiUyRnBhZ2VzJTJGd29yayUyRmluZGV4LmpzIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLG9EQUF1QjtBQUM5QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MGVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3dvcmtcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL3dvcmsvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL3dvcmtcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fwork&absolutePagePath=%2FUsers%2Fmatthewmellowswork%2FDocuments%2Fpersonal%2Fthe-mellows-project-2022%2Fpages%2Fwork%2Findex.js!\n");

/***/ }),

/***/ "./components/grid.js":
/*!****************************!*\
  !*** ./components/grid.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Grid = function(props) {\n    var sm = props.sm, md = props.md, gap = props.gap, children = props.children, item = props.item, container = props.container, classes = props.classes;\n    var defaultProps = {\n        className: item ? \"md:col-span-\".concat(md, \" sm:col-span-\").concat(sm, \" col-span-2\") : \"grid md:grid-cols-\".concat(md, \" grid-cols-\").concat(sm, \" gap-\").concat(gap) + \" \".concat(classes ? classes : '')\n    };\n    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', defaultProps, children));\n};\n_c = Grid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\nvar _c;\n$RefreshReg$(_c, \"Grid\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QjtBQUV6QixHQUFLLENBQUNDLElBQUksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO0lBRXJCLEdBQUssQ0FBR0MsRUFBRSxHQUFrREQsS0FBSyxDQUF6REMsRUFBRSxFQUFFQyxFQUFFLEdBQThDRixLQUFLLENBQXJERSxFQUFFLEVBQUVDLEdBQUcsR0FBeUNILEtBQUssQ0FBakRHLEdBQUcsRUFBRUMsUUFBUSxHQUErQkosS0FBSyxDQUE1Q0ksUUFBUSxFQUFFQyxJQUFJLEdBQXlCTCxLQUFLLENBQWxDSyxJQUFJLEVBQUVDLFNBQVMsR0FBY04sS0FBSyxDQUE1Qk0sU0FBUyxFQUFFQyxPQUFPLEdBQUtQLEtBQUssQ0FBakJPLE9BQU87SUFFdkQsR0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztRQUNsQkMsU0FBUyxFQUFFSixJQUFJLEdBQUksQ0FBWSxjQUFvQkosTUFBRSxDQUFwQkMsRUFBRSxFQUFDLENBQWEsZ0JBQUssTUFBVyxDQUFkRCxFQUFFLEVBQUMsQ0FBVyxnQkFBSyxDQUFrQixvQkFBa0JBLE1BQUUsQ0FBbEJDLEVBQUUsRUFBQyxDQUFXLGNBQVlDLE1BQUcsQ0FBYkYsRUFBRSxFQUFDLENBQUssUUFBTSxPQUFKRSxHQUFHLElBQU0sQ0FBQyxHQUF5QixPQUF2QkksT0FBTyxHQUFHQSxPQUFPLEdBQUcsQ0FBRTtJQUMxSixDQUFDO0lBRUQsTUFBTSxlQUFDVCwwREFBbUIsQ0FBQyxDQUFLLE1BQUVVLFlBQVksRUFBRUosUUFBUTtBQUM1RCxDQUFDO0tBVEtMLElBQUk7QUFXViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ3JpZC5qcz9lMTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgR3JpZCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgeyBzbSwgbWQsIGdhcCwgY2hpbGRyZW4sIGl0ZW0sIGNvbnRhaW5lciwgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogaXRlbSA/IGBtZDpjb2wtc3Bhbi0ke21kfSBzbTpjb2wtc3Bhbi0ke3NtfSBjb2wtc3Bhbi0yYCA6IGBncmlkIG1kOmdyaWQtY29scy0ke21kfSBncmlkLWNvbHMtJHtzbX0gZ2FwLSR7Z2FwfWAgKyBgICR7Y2xhc3NlcyA/IGNsYXNzZXMgOiAnJ31gLFxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBkZWZhdWx0UHJvcHMsIGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJHcmlkIiwicHJvcHMiLCJzbSIsIm1kIiwiZ2FwIiwiY2hpbGRyZW4iLCJpdGVtIiwiY29udGFpbmVyIiwiY2xhc3NlcyIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/grid.js\n");

/***/ }),

/***/ "./pages/work/index.js":
/*!*****************************!*\
  !*** ./pages/work/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tmp_components_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tmp/components/grid */ \"./components/grid.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-4\"\n    }, void 0, false, {\n        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/work/index.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, _this);\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3JrL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1Qzs7QUFFdkMsNkJBQWUsc0NBQ2Y7a0JBQUksTUFBTSwrREFBTEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yay9pbmRleC5qcz81OGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmlkIGZyb20gJ0B0bXAvY29tcG9uZW50cy9ncmlkJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNFwiPjwvZGl2PlxuKSJdLCJuYW1lcyI6WyJHcmlkIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/work/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fwork&absolutePagePath=%2FUsers%2Fmatthewmellowswork%2FDocuments%2Fpersonal%2Fthe-mellows-project-2022%2Fpages%2Fwork%2Findex.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);