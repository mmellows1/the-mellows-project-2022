"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/grid.js":
/*!****************************!*\
  !*** ./components/grid.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Grid = function(props) {\n    var sm = props.sm, md = props.md, gap = props.gap, children = props.children, item = props.item, container = props.container;\n    var defaultProps = {\n        className: item ? \"md:col-span-\".concat(md, \" sm:col-span-\").concat(sm, \" col-span-2\") : \"grid md:grid-cols-\".concat(md, \" grid-cols-\").concat(sm, \" gap-\").concat(gap),\n        onFocus: function() {\n            return console.log(1);\n        }\n    };\n    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', defaultProps, children));\n};\n_c = Grid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\nvar _c;\n$RefreshReg$(_c, \"Grid\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QjtBQUV6QixHQUFLLENBQUNDLElBQUksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO0lBRXJCLEdBQUssQ0FBRUMsRUFBRSxHQUF3Q0QsS0FBSyxDQUEvQ0MsRUFBRSxFQUFFQyxFQUFFLEdBQW9DRixLQUFLLENBQTNDRSxFQUFFLEVBQUVDLEdBQUcsR0FBK0JILEtBQUssQ0FBdkNHLEdBQUcsRUFBRUMsUUFBUSxHQUFxQkosS0FBSyxDQUFsQ0ksUUFBUSxFQUFFQyxJQUFJLEdBQWVMLEtBQUssQ0FBeEJLLElBQUksRUFBRUMsU0FBUyxHQUFJTixLQUFLLENBQWxCTSxTQUFTO0lBRTdDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUM7UUFDbEJDLFNBQVMsRUFBRUgsSUFBSSxHQUFJLENBQVksY0FBb0JKLE1BQUUsQ0FBcEJDLEVBQUUsRUFBQyxDQUFhLGdCQUFLLE1BQVcsQ0FBZEQsRUFBRSxFQUFDLENBQVcsZ0JBQUssQ0FBa0Isb0JBQWtCQSxNQUFFLENBQWxCQyxFQUFFLEVBQUMsQ0FBVyxjQUFZQyxNQUFHLENBQWJGLEVBQUUsRUFBQyxDQUFLLFFBQU0sT0FBSkUsR0FBRztRQUN2SE0sT0FBTyxFQUFFLFFBQVE7WUFBRkMsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDOztJQUNoQyxDQUFDO0lBRUQsTUFBTSxlQUFDYiwwREFBbUIsQ0FBQyxDQUFLLE1BQUVTLFlBQVksRUFBRUgsUUFBUTtBQUM1RCxDQUFDO0tBVktMLElBQUk7QUFZViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ3JpZC5qcz9lMTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgR3JpZCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3Qge3NtLCBtZCwgZ2FwLCBjaGlsZHJlbiwgaXRlbSwgY29udGFpbmVyfSA9IHByb3BzO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjbGFzc05hbWU6IGl0ZW0gPyBgbWQ6Y29sLXNwYW4tJHttZH0gc206Y29sLXNwYW4tJHtzbX0gY29sLXNwYW4tMmAgOiBgZ3JpZCBtZDpncmlkLWNvbHMtJHttZH0gZ3JpZC1jb2xzLSR7c219IGdhcC0ke2dhcH1gLFxuICAgICAgICBvbkZvY3VzOiAoKSA9PiBjb25zb2xlLmxvZygxKSxcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgZGVmYXVsdFByb3BzLCBjaGlsZHJlbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsInByb3BzIiwic20iLCJtZCIsImdhcCIsImNoaWxkcmVuIiwiaXRlbSIsImNvbnRhaW5lciIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIm9uRm9jdXMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/grid.js\n");

/***/ })

});