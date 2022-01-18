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
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./components/heading.js":
/*!*******************************!*\
  !*** ./components/heading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Heading = ({ tag , children , tagProps , className  })=>{\n    const variantsMap = {\n        'h1': 'text-5xl font-bold border-l-4 pl-5 border-green-500 text-slate-800 mb-5',\n        'h2': 'text-4xl font-bold',\n        'h3': 'text-3xl font-bold',\n        'h4': 'text-2xl font-bold',\n        'h5': 'text-lg font-bold',\n        'h6': 'text-md font-bold'\n    };\n    const defaultProps = {\n        className: !className ? `${variantsMap[tag]}` : className\n    };\n    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(tag, {\n        ...defaultProps,\n        ...tagProps\n    }, children));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFFQyxRQUFRLEdBQUVDLFFBQVEsR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBRXpELEtBQUssQ0FBQ0MsV0FBVyxHQUFHLENBQUM7UUFDakIsQ0FBSSxLQUFFLENBQXlFO1FBQy9FLENBQUksS0FBRSxDQUFvQjtRQUMxQixDQUFJLEtBQUUsQ0FBb0I7UUFDMUIsQ0FBSSxLQUFFLENBQW9CO1FBQzFCLENBQUksS0FBRSxDQUFtQjtRQUN6QixDQUFJLEtBQUUsQ0FBbUI7SUFDN0IsQ0FBQztJQUVELEtBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUM7UUFDbEJGLFNBQVMsR0FBR0EsU0FBUyxNQUFNQyxXQUFXLENBQUNKLEdBQUcsTUFBTUcsU0FBUztJQUM3RCxDQUFDO0lBRUQsTUFBTSxlQUNGTCwwREFBbUIsQ0FBQ0UsR0FBRyxFQUFFLENBQUM7V0FBSUssWUFBWTtXQUFLSCxRQUFRO0lBQUMsQ0FBQyxFQUFFRCxRQUFRO0FBRTNFLENBQUM7QUFFRCxpRUFBZUYsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLW1lbGxvd3MtcHJvamVjdC0yMDIyLy4vY29tcG9uZW50cy9oZWFkaW5nLmpzPzVkNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgdGFnLCBjaGlsZHJlbiwgdGFnUHJvcHMsIGNsYXNzTmFtZSB9KSA9PiB7XG5cbiAgICBjb25zdCB2YXJpYW50c01hcCA9IHtcbiAgICAgICAgJ2gxJzogJ3RleHQtNXhsIGZvbnQtYm9sZCBib3JkZXItbC00IHBsLTUgYm9yZGVyLWdyZWVuLTUwMCB0ZXh0LXNsYXRlLTgwMCBtYi01JyxcbiAgICAgICAgJ2gyJzogJ3RleHQtNHhsIGZvbnQtYm9sZCcsXG4gICAgICAgICdoMyc6ICd0ZXh0LTN4bCBmb250LWJvbGQnLFxuICAgICAgICAnaDQnOiAndGV4dC0yeGwgZm9udC1ib2xkJyxcbiAgICAgICAgJ2g1JzogJ3RleHQtbGcgZm9udC1ib2xkJyxcbiAgICAgICAgJ2g2JzogJ3RleHQtbWQgZm9udC1ib2xkJ1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAhY2xhc3NOYW1lID8gYCR7dmFyaWFudHNNYXBbdGFnXX1gIDogY2xhc3NOYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIHsgLi4uZGVmYXVsdFByb3BzLCAuLi50YWdQcm9wcyB9LCBjaGlsZHJlbilcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGluZyIsInRhZyIsImNoaWxkcmVuIiwidGFnUHJvcHMiLCJjbGFzc05hbWUiLCJ2YXJpYW50c01hcCIsImRlZmF1bHRQcm9wcyIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/heading.js\n");

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Section = ({ children  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-stone-100 h-full\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/components/section.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEtBQUssQ0FBQ0EsT0FBTyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQy9CLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTBCO2tCQUNwQ0YsUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFFRCxpRUFBZUQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLW1lbGxvd3MtcHJvamVjdC0yMDIyLy4vY29tcG9uZW50cy9zZWN0aW9uLmpzPzc2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgYmctc3RvbmUtMTAwIGgtZnVsbFwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247Il0sIm5hbWVzIjpbIlNlY3Rpb24iLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/section.js\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tmp_components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tmp/components/section */ \"./components/section.js\");\n/* harmony import */ var _tmp_components_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tmp/components/heading */ \"./components/heading.js\");\n\n\n\n\nconst Contact = ()=>{\n    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleInputChange = (e)=>{\n        setValues({\n            ...values,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        alert();\n        await fetch('/api/mail', {\n            method: 'POST',\n            body: JSON.stringify(values)\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tmp_components_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tmp_components_heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                tag: \"h1\",\n                children: \"Get in touch\"\n            }, void 0, false, {\n                fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"If you are interested in getting in touch\"\n            }, void 0, false, {\n                fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2E7QUFDQTtBQUU3QyxLQUFLLENBQUNHLE9BQU8sT0FBUyxDQUFDO0lBRW5CLEtBQUssTUFBRUMsTUFBTSxNQUFFQyxTQUFTLE1BQUlMLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXZDLEtBQUssQ0FBQ00saUJBQWlCLElBQUlDLENBQUMsR0FBSyxDQUFDO1FBQzlCRixTQUFTLENBQUMsQ0FBQztlQUFJRCxNQUFNO2FBQUdHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEdBQUdGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRSxLQUFLO1FBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsS0FBSyxDQUFDQyxZQUFZLFVBQVVKLENBQUMsR0FBSyxDQUFDO1FBQy9CQSxDQUFDLENBQUNLLGNBQWM7UUFDaEJDLEtBQUs7UUFDTCxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFXLFlBQUUsQ0FBQztZQUN0QkMsTUFBTSxFQUFFLENBQU07WUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2QsTUFBTTtRQUMvQixDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sNkVBQ0RILCtEQUFPOzt3RkFDSEMsK0RBQU87Z0JBQUNpQixHQUFHLEVBQUMsQ0FBSTswQkFBQyxDQUFZOzs7Ozs7d0ZBQzdCQyxDQUFDOzBCQUFDLENBQXlDOzs7Ozs7d0ZBQzNDQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBRTs7Ozs7Ozs7Ozs7O0FBRzdCLENBQUM7QUFFRCxpRUFBZW5CLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1tZWxsb3dzLXByb2plY3QtMjAyMi8uL3BhZ2VzL2NvbnRhY3QuanM/NGU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJ0B0bXAvY29tcG9uZW50cy9zZWN0aW9uJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJ0B0bXAvY29tcG9uZW50cy9oZWFkaW5nJztcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWxlcnQoKVxuICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9tYWlsJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPEhlYWRpbmcgdGFnPVwiaDFcIj5HZXQgaW4gdG91Y2g8L0hlYWRpbmc+XG4gICAgICAgICAgICA8cD5JZiB5b3UgYXJlIGludGVyZXN0ZWQgaW4gZ2V0dGluZyBpbiB0b3VjaDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+PC9kaXY+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2VjdGlvbiIsIkhlYWRpbmciLCJDb250YWN0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YWciLCJwIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/contact.js"));
module.exports = __webpack_exports__;

})();