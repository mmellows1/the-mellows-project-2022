"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/become-a-client";
exports.ids = ["pages/become-a-client"];
exports.modules = {

/***/ "./components/heading.js":
/*!*******************************!*\
  !*** ./components/heading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Heading = ({ tag , children , tagProps , className  })=>{\n    const variantsMap = {\n        'h1': 'text-5xl font-bold border-l-4 pl-5 border-green-500 text-slate-800',\n        'h2': 'text-4xl font-bold',\n        'h3': 'text-3xl font-bold',\n        'h4': 'text-2xl font-bold',\n        'h5': 'text-lg font-bold',\n        'h6': 'text-md font-bold'\n    };\n    const defaultProps = {\n        className: !className ? `${variantsMap[tag]}` : className\n    };\n    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(tag, {\n        ...defaultProps,\n        ...tagProps\n    }, children));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFFQyxRQUFRLEdBQUVDLFFBQVEsR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBRXpELEtBQUssQ0FBQ0MsV0FBVyxHQUFHLENBQUM7UUFDakIsQ0FBSSxLQUFFLENBQW9FO1FBQzFFLENBQUksS0FBRSxDQUFvQjtRQUMxQixDQUFJLEtBQUUsQ0FBb0I7UUFDMUIsQ0FBSSxLQUFFLENBQW9CO1FBQzFCLENBQUksS0FBRSxDQUFtQjtRQUN6QixDQUFJLEtBQUUsQ0FBbUI7SUFDN0IsQ0FBQztJQUVELEtBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUM7UUFDbEJGLFNBQVMsR0FBR0EsU0FBUyxNQUFNQyxXQUFXLENBQUNKLEdBQUcsTUFBTUcsU0FBUztJQUM3RCxDQUFDO0lBRUQsTUFBTSxlQUNGTCwwREFBbUIsQ0FBQ0UsR0FBRyxFQUFFLENBQUM7V0FBSUssWUFBWTtXQUFLSCxRQUFRO0lBQUMsQ0FBQyxFQUFFRCxRQUFRO0FBRTNFLENBQUM7QUFFRCxpRUFBZUYsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLW1lbGxvd3MtcHJvamVjdC0yMDIyLy4vY29tcG9uZW50cy9oZWFkaW5nLmpzPzVkNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgdGFnLCBjaGlsZHJlbiwgdGFnUHJvcHMsIGNsYXNzTmFtZSB9KSA9PiB7XG5cbiAgICBjb25zdCB2YXJpYW50c01hcCA9IHtcbiAgICAgICAgJ2gxJzogJ3RleHQtNXhsIGZvbnQtYm9sZCBib3JkZXItbC00IHBsLTUgYm9yZGVyLWdyZWVuLTUwMCB0ZXh0LXNsYXRlLTgwMCcsXG4gICAgICAgICdoMic6ICd0ZXh0LTR4bCBmb250LWJvbGQnLFxuICAgICAgICAnaDMnOiAndGV4dC0zeGwgZm9udC1ib2xkJyxcbiAgICAgICAgJ2g0JzogJ3RleHQtMnhsIGZvbnQtYm9sZCcsXG4gICAgICAgICdoNSc6ICd0ZXh0LWxnIGZvbnQtYm9sZCcsXG4gICAgICAgICdoNic6ICd0ZXh0LW1kIGZvbnQtYm9sZCdcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogIWNsYXNzTmFtZSA/IGAke3ZhcmlhbnRzTWFwW3RhZ119YCA6IGNsYXNzTmFtZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnLCB7IC4uLmRlZmF1bHRQcm9wcywgLi4udGFnUHJvcHMgfSwgY2hpbGRyZW4pXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRpbmciLCJ0YWciLCJjaGlsZHJlbiIsInRhZ1Byb3BzIiwiY2xhc3NOYW1lIiwidmFyaWFudHNNYXAiLCJkZWZhdWx0UHJvcHMiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/heading.js\n");

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Section = ({ children  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-stone-100 h-full\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/components/section.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEtBQUssQ0FBQ0EsT0FBTyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQy9CLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTBCO2tCQUNwQ0YsUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFFRCxpRUFBZUQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLW1lbGxvd3MtcHJvamVjdC0yMDIyLy4vY29tcG9uZW50cy9zZWN0aW9uLmpzPzc2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgYmctc3RvbmUtMTAwIGgtZnVsbFwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247Il0sIm5hbWVzIjpbIlNlY3Rpb24iLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/section.js\n");

/***/ }),

/***/ "./pages/become-a-client.js":
/*!**********************************!*\
  !*** ./pages/become-a-client.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/heading */ \"./components/heading.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n\n\n\n// This function gets called at build time\nconst getServerSideProps = async ()=>{\n    const posts = [\n        {\n            label: 1\n        }\n    ];\n    return {\n        props: {\n            posts\n        }\n    };\n};\nconst BecomeAClient = ({ posts  })=>{\n    console.log(posts);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_heading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            tag: \"h2\",\n            children: \"Become a Client\"\n        }, void 0, false, {\n            fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/become-a-client.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/become-a-client.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BecomeAClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iZWNvbWUtYS1jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNBO0FBRTNDLEVBQTBDO0FBQ25DLEtBQUssQ0FBQ0Usa0JBQWtCLGFBQWUsQ0FBQztJQUMzQyxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBQ1gsQ0FBQztZQUFDQyxLQUFLLEVBQUUsQ0FBQztRQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDO1FBQ0pDLEtBQUssRUFBRSxDQUFDO1lBQ0pGLEtBQUs7UUFDVCxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxLQUFLLENBQUNHLGFBQWEsSUFBSSxDQUFDLENBQUNILEtBQUssRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNsQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUs7SUFDakIsTUFBTSw2RUFDREYsMkRBQU87OEZBQ0hELDJEQUFPO1lBQUNTLEdBQUcsRUFBQyxDQUFJO3NCQUFDLENBQWU7Ozs7Ozs7Ozs7O0FBRzdDLENBQUM7QUFFRCxpRUFBZUgsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLW1lbGxvd3MtcHJvamVjdC0yMDIyLy4vcGFnZXMvYmVjb21lLWEtY2xpZW50LmpzPzdjNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGluZ1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvblwiO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcG9zdHMgPSBbXG4gICAgICAgIHsgbGFiZWw6IDEgfVxuICAgIF1cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdHMsXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5jb25zdCBCZWNvbWVBQ2xpZW50ID0gKHsgcG9zdHMgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvc3RzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICAgIDxIZWFkaW5nIHRhZz1cImgyXCI+QmVjb21lIGEgQ2xpZW50PC9IZWFkaW5nPlxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCZWNvbWVBQ2xpZW50OyJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiU2VjdGlvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsInBvc3RzIiwibGFiZWwiLCJwcm9wcyIsIkJlY29tZUFDbGllbnQiLCJjb25zb2xlIiwibG9nIiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/become-a-client.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/become-a-client.js"));
module.exports = __webpack_exports__;

})();