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

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form */ \"./components/form.js\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.js\");\n/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/grid */ \"./components/grid.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Contact = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), values = ref[0], setValues = ref[1];\n    var handleInputChange = function(e) {\n        setValues(_objectSpread({}, values, _defineProperty({}, e.target.name, e.target.value)));\n    };\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        alert();\n                        _ctx.next = 4;\n                        return fetch('/api/mail', {\n                            method: 'POST',\n                            body: JSON.stringify(values)\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"bg-white p-5\",\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            sm: 4,\n            md: 4,\n            gap: 4,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"text\",\n                    placeholder: \"Full Name\",\n                    name: \"name\",\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"text\",\n                    placeholder: \"Email\",\n                    name: \"from\",\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"text\",\n                    placeholder: \"Subject\",\n                    name: \"subject\",\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"textarea\",\n                    placeholder: \"Message\",\n                    name: \"text\",\n                    rows: 4,\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"123\"\n                }, void 0, false, {\n                    fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this));\n};\n_s(Contact, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSztBQUNFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDOztJQUVuQixHQUFLLENBQXVCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWhDSyxNQUFNLEdBQWVMLEdBQVksS0FBekJNLFNBQVMsR0FBSU4sR0FBWTtJQUV4QyxHQUFLLENBQUNPLGlCQUFpQixHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDOUJGLFNBQVMsbUJBQU1ELE1BQU0sc0JBQUdHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEVBQUdGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRSxLQUFLO0lBQzFELENBQUM7SUFFRCxHQUFLLENBQUNDLFlBQVk7c05BQUcsUUFBUSxTQUFESixDQUFDLEVBQUssQ0FBQzs7Ozt3QkFDL0JBLENBQUMsQ0FBQ0ssY0FBYzt3QkFDaEJDLEtBQUs7OytCQUNDQyxLQUFLLENBQUMsQ0FBVyxZQUFFLENBQUM7NEJBQ3RCQyxNQUFNLEVBQUUsQ0FBTTs0QkFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2QsTUFBTTt3QkFDL0IsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQzt3QkFQS08sWUFBWSxDQUFVSixDQUFDOzs7O0lBUzdCLE1BQU0sNkVBQ0RQLHdEQUFJO1FBQUNtQixTQUFTLEVBQUMsQ0FBYztRQUFDQyxRQUFRLEVBQUVULFlBQVk7OEZBQ2hEVCx3REFBSTtZQUFDbUIsRUFBRSxFQUFFLENBQUM7WUFBRUMsRUFBRSxFQUFFLENBQUM7WUFBRUMsR0FBRyxFQUFFLENBQUM7OzRGQUNyQnRCLHlEQUFLO29CQUFDdUIsSUFBSSxFQUFDLENBQU07b0JBQUNDLFdBQVcsRUFBQyxDQUFXO29CQUFDaEIsSUFBSSxFQUFDLENBQU07b0JBQUNpQixRQUFRLEVBQUVwQixpQkFBaUI7Ozs7Ozs0RkFDakZMLHlEQUFLO29CQUFDdUIsSUFBSSxFQUFDLENBQU07b0JBQUNDLFdBQVcsRUFBQyxDQUFPO29CQUFDaEIsSUFBSSxFQUFDLENBQU07b0JBQUNpQixRQUFRLEVBQUVwQixpQkFBaUI7Ozs7Ozs0RkFDN0VMLHlEQUFLO29CQUFDdUIsSUFBSSxFQUFDLENBQU07b0JBQUNDLFdBQVcsRUFBQyxDQUFTO29CQUFDaEIsSUFBSSxFQUFDLENBQVM7b0JBQUNpQixRQUFRLEVBQUVwQixpQkFBaUI7Ozs7Ozs0RkFDbEZMLHlEQUFLO29CQUFDdUIsSUFBSSxFQUFDLENBQVU7b0JBQUNDLFdBQVcsRUFBQyxDQUFTO29CQUFDaEIsSUFBSSxFQUFDLENBQU07b0JBQUNrQixJQUFJLEVBQUUsQ0FBQztvQkFBRUQsUUFBUSxFQUFFcEIsaUJBQWlCOzs7Ozs7NEZBQzVGc0IsQ0FBTTtvQkFBQ0osSUFBSSxFQUFDLENBQVE7OEJBQUMsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekMsQ0FBQztHQTVCS3JCLE9BQU87S0FBUEEsT0FBTztBQThCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3QuanM/NGU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dCc7XG5pbXBvcnQgR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL2dyaWQnO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHt9KVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbGVydCgpXG4gICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL21haWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC01XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8R3JpZCBzbT17NH0gbWQ9ezR9IGdhcD17NH0+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgbmFtZT1cImZyb21cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgbmFtZT1cInN1YmplY3RcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIG5hbWU9XCJ0ZXh0XCIgcm93cz17NH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPjEyMzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm0iLCJJbnB1dCIsIkdyaWQiLCJDb250YWN0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInNtIiwibWQiLCJnYXAiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

});