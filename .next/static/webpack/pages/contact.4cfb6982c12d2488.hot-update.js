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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Grid = function(props) {\n    var sm = props.sm, md = props.md, gap = props.gap, children = props.children, item = props.item, container = props.container;\n    var defaultProps = {\n        className: item ? \"md:col-span-\".concat(md, \" col-span-4\") : \"grid md:grid-cols-\".concat(md, \" grid-cols-\").concat(sm, \" gap-\").concat(gap),\n        onFocus: function() {\n            return console.log(1);\n        }\n    };\n    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', defaultProps, children));\n};\n_c = Grid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\nvar _c;\n$RefreshReg$(_c, \"Grid\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QjtBQUV6QixHQUFLLENBQUNDLElBQUksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO0lBRXJCLEdBQUssQ0FBRUMsRUFBRSxHQUF3Q0QsS0FBSyxDQUEvQ0MsRUFBRSxFQUFFQyxFQUFFLEdBQW9DRixLQUFLLENBQTNDRSxFQUFFLEVBQUVDLEdBQUcsR0FBK0JILEtBQUssQ0FBdkNHLEdBQUcsRUFBRUMsUUFBUSxHQUFxQkosS0FBSyxDQUFsQ0ksUUFBUSxFQUFFQyxJQUFJLEdBQWVMLEtBQUssQ0FBeEJLLElBQUksRUFBRUMsU0FBUyxHQUFJTixLQUFLLENBQWxCTSxTQUFTO0lBRTdDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUM7UUFDbEJDLFNBQVMsRUFBRUgsSUFBSSxHQUFJLENBQVksY0FBSyxNQUFXLENBQWRILEVBQUUsRUFBQyxDQUFXLGdCQUFLLENBQWtCLG9CQUFrQkQsTUFBRSxDQUFsQkMsRUFBRSxFQUFDLENBQVcsY0FBWUMsTUFBRyxDQUFiRixFQUFFLEVBQUMsQ0FBSyxRQUFNLE9BQUpFLEdBQUc7UUFDckdNLE9BQU8sRUFBRSxRQUFRO1lBQUZDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQzs7SUFDaEMsQ0FBQztJQUVELE1BQU0sZUFBQ2IsMERBQW1CLENBQUMsQ0FBSyxNQUFFUyxZQUFZLEVBQUVILFFBQVE7QUFDNUQsQ0FBQztLQVZLTCxJQUFJO0FBWVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dyaWQuanM/ZTE5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEdyaWQgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHtzbSwgbWQsIGdhcCwgY2hpbGRyZW4sIGl0ZW0sIGNvbnRhaW5lcn0gPSBwcm9wcztcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBpdGVtID8gYG1kOmNvbC1zcGFuLSR7bWR9IGNvbC1zcGFuLTRgIDogYGdyaWQgbWQ6Z3JpZC1jb2xzLSR7bWR9IGdyaWQtY29scy0ke3NtfSBnYXAtJHtnYXB9YCxcbiAgICAgICAgb25Gb2N1czogKCkgPT4gY29uc29sZS5sb2coMSksXG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRlZmF1bHRQcm9wcywgY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJwcm9wcyIsInNtIiwibWQiLCJnYXAiLCJjaGlsZHJlbiIsIml0ZW0iLCJjb250YWluZXIiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJvbkZvY3VzIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/grid.js\n");

/***/ })

});