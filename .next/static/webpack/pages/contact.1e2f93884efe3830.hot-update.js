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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_matthewmellows_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_matthewmellows_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_matthewmellows_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form */ \"./components/form.js\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.js\");\n/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/grid */ \"./components/grid.js\");\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/heading */ \"./components/heading.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Contact = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), values = ref[0], setValues = ref[1];\n    var handleInputChange = function(e) {\n        setValues(_objectSpread({}, values, _defineProperty({}, e.target.name, e.target.value)));\n    };\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_matthewmellows_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_matthewmellows_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        alert();\n                        _ctx.next = 4;\n                        return fetch('/api/mail', {\n                            method: 'POST',\n                            body: JSON.stringify(values)\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"bg-white p-10 w-20 p-5 mx-auto\",\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"bg-slate-100 rounded-md p-10 block\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_heading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    tag: \"h1\",\n                    className: \"text-5xl mb-5 text-slate-700 font-bold\",\n                    children: \"Get in touch\"\n                }, void 0, false, {\n                    fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    tag: \"h1\",\n                    className: \"font-bold mb-5 text-slate-500\",\n                    children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lacus leo. Nunc ut egestas dui. In hac habitasse platea dictumst. Sed scelerisque neque et mauris fermentum porta.\"\n                }, void 0, false, {\n                    fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    container: true,\n                    sm: 4,\n                    md: 4,\n                    gap: 8,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            item: true,\n                            sm: 2,\n                            md: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                innerProps: {\n                                    placeholder: 'Name',\n                                    name: 'name',\n                                    onChange: function() {\n                                        return handleInputChange;\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            item: true,\n                            sm: 2,\n                            md: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                innerProps: {\n                                    placeholder: 'Email',\n                                    name: 'email',\n                                    onChange: function() {\n                                        return handleInputChange;\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            item: true,\n                            sm: 2,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                innerProps: {\n                                    placeholder: 'Subject',\n                                    name: 'subject',\n                                    onChange: function() {\n                                        return handleInputChange;\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            item: true,\n                            sm: 2,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"textarea\",\n                                innerProps: {\n                                    placeholder: 'Message',\n                                    name: 'message',\n                                    onChange: function() {\n                                        return handleInputChange;\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            item: true,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"w-full border-orange p-3 py-5 text-white font-bold rounded-md\",\n                                type: \"submit\",\n                                children: \"123\"\n                            }, void 0, false, {\n                                fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/matthewmellows/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this));\n};\n_s(Contact, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCx3REFBSTs0QkFBQzJCLElBQUk7NEJBQUNILEVBQUUsRUFBRSxDQUFDOzRCQUFFQyxFQUFFLEVBQUUsQ0FBQztrSEFDbEIxQix5REFBSztnQ0FBQzZCLElBQUksRUFBQyxDQUFVO2dDQUFDQyxVQUFVLEVBQUUsQ0FBQztvQ0FBQ0MsV0FBVyxFQUFFLENBQVM7b0NBQUV0QixJQUFJLEVBQUUsQ0FBUztvQ0FBRXVCLFFBQVEsRUFBRSxRQUFRO3dDQUFGMUIsTUFBTSxDQUFOQSxpQkFBaUI7O2dDQUFDLENBQUM7Ozs7Ozs7Ozs7O29HQUVwSEwsd0RBQUk7NEJBQUMyQixJQUFJOzRCQUFDSCxFQUFFLEVBQUUsQ0FBQzs0QkFBRUMsRUFBRSxFQUFFLENBQUM7a0hBQ2xCTyxDQUFNO2dDQUFDZCxTQUFTLEVBQUMsQ0FBK0Q7Z0NBQUNVLElBQUksRUFBQyxDQUFROzBDQUFDLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0gsQ0FBQztHQTFDSzFCLE9BQU87S0FBUEEsT0FBTztBQTRDYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3QuanM/NGU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dCc7XG5pbXBvcnQgR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL2dyaWQnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkaW5nJztcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWxlcnQoKVxuICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9tYWlsJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMTAgdy0yMCBwLTUgbXgtYXV0b1wiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgcm91bmRlZC1tZCBwLTEwIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgdGFnPVwiaDFcIiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtYi01IHRleHQtc2xhdGUtNzAwIGZvbnQtYm9sZFwiPkdldCBpbiB0b3VjaDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8cCB0YWc9XCJoMVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi01IHRleHQtc2xhdGUtNTAwXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUHJhZXNlbnQgcHVsdmluYXIgbGFjdXMgbGVvLiBOdW5jIHV0IGVnZXN0YXMgZHVpLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gU2VkIHNjZWxlcmlzcXVlIG5lcXVlIGV0IG1hdXJpcyBmZXJtZW50dW0gcG9ydGEuPC9wPlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzbT17NH0gbWQ9ezR9IGdhcD17OH0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezJ9IG1kPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIGlubmVyUHJvcHM9e3sgcGxhY2Vob2xkZXI6ICdOYW1lJywgbmFtZTogJ25hbWUnLCBvbkNoYW5nZTogKCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXsyfSBtZD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBpbm5lclByb3BzPXt7IHBsYWNlaG9sZGVyOiAnRW1haWwnLCBuYW1lOiAnZW1haWwnLCBvbkNoYW5nZTogKCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXsyfSBtZD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBpbm5lclByb3BzPXt7IHBsYWNlaG9sZGVyOiAnU3ViamVjdCcsIG5hbWU6ICdzdWJqZWN0Jywgb25DaGFuZ2U6ICgpID0+IGhhbmRsZUlucHV0Q2hhbmdlIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17Mn0gbWQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIGlubmVyUHJvcHM9e3sgcGxhY2Vob2xkZXI6ICdNZXNzYWdlJywgbmFtZTogJ21lc3NhZ2UnLCBvbkNoYW5nZTogKCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs0fSBtZD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItb3JhbmdlIHAtMyBweS01IHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbWRcIiB0eXBlPVwic3VibWl0XCI+MTIzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybSIsIklucHV0IiwiR3JpZCIsIkhlYWRpbmciLCJDb250YWN0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImRpdiIsInRhZyIsInAiLCJjb250YWluZXIiLCJzbSIsIm1kIiwiZ2FwIiwiaXRlbSIsInR5cGUiLCJpbm5lclByb3BzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

});