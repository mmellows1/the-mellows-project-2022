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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form */ \"./components/form.js\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.js\");\n/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/grid */ \"./components/grid.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Contact = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), values = ref[0], setValues = ref[1];\n    var handleInputChange = function(e) {\n        setValues(_objectSpread({}, values, _defineProperty({}, e.target.name, e.target.value)));\n    };\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_matthewmellowswork_Documents_personal_the_mellows_project_2022_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        console.log(values);\n                        _ctx.next = 4;\n                        return fetch('/api/mail', {\n                            method: 'POST',\n                            body: JSON.stringify(values)\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"bg-white p-5\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sm: 4,\n                md: 4,\n                gap: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"text\",\n                        placeholder: \"name\",\n                        name: \"name\",\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"text\",\n                        placeholder: \"from\",\n                        name: \"from\",\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"text\",\n                        placeholder: \"subject\",\n                        name: \"subject\",\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"textarea\",\n                        name: \"text\",\n                        rows: 4,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"123\"\n            }, void 0, false, {\n                fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matthewmellowswork/Documents/personal/the-mellows-project-2022/pages/contact.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this));\n};\n_s(Contact, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSztBQUNFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDOztJQUVuQixHQUFLLENBQXVCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWhDSyxNQUFNLEdBQWVMLEdBQVksS0FBekJNLFNBQVMsR0FBSU4sR0FBWTtJQUV4QyxHQUFLLENBQUNPLGlCQUFpQixHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDOUJGLFNBQVMsbUJBQU1ELE1BQU0sc0JBQUdHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEVBQUdGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRSxLQUFLO0lBQzFELENBQUM7SUFFRCxHQUFLLENBQUNDLFlBQVk7c05BQUcsUUFBUSxTQUFESixDQUFDLEVBQUssQ0FBQzs7Ozt3QkFDL0JBLENBQUMsQ0FBQ0ssY0FBYzt3QkFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixNQUFNOzsrQkFDWlcsS0FBSyxDQUFDLENBQVcsWUFBRSxDQUFDOzRCQUN0QkMsTUFBTSxFQUFFLENBQU07NEJBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNmLE1BQU07d0JBQy9CLENBQUM7Ozs7OztRQUNMLENBQUM7d0JBUEtPLFlBQVksQ0FBVUosQ0FBQzs7OztJQVM3QixNQUFNLDZFQUNEUCx3REFBSTtRQUFDb0IsU0FBUyxFQUFDLENBQWM7UUFBQ0MsUUFBUSxFQUFFVixZQUFZOzt3RkFDaERULHdEQUFJO2dCQUFDb0IsRUFBRSxFQUFFLENBQUM7Z0JBQUVDLEVBQUUsRUFBRSxDQUFDO2dCQUFFQyxHQUFHLEVBQUUsQ0FBQzs7Z0dBQ3JCdkIseURBQUs7d0JBQUN3QixJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQU07d0JBQUNqQixJQUFJLEVBQUMsQ0FBTTt3QkFBQ2tCLFFBQVEsRUFBRXJCLGlCQUFpQjs7Ozs7O2dHQUM1RUwseURBQUs7d0JBQUN3QixJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQU07d0JBQUNqQixJQUFJLEVBQUMsQ0FBTTt3QkFBQ2tCLFFBQVEsRUFBRXJCLGlCQUFpQjs7Ozs7O2dHQUM1RUwseURBQUs7d0JBQUN3QixJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQVM7d0JBQUNqQixJQUFJLEVBQUMsQ0FBUzt3QkFBQ2tCLFFBQVEsRUFBRXJCLGlCQUFpQjs7Ozs7O2dHQUNsRkwseURBQUs7d0JBQUN3QixJQUFJLEVBQUMsQ0FBVTt3QkFBQ2hCLElBQUksRUFBQyxDQUFNO3dCQUFDbUIsSUFBSSxFQUFFLENBQUM7d0JBQUVELFFBQVEsRUFBRXJCLGlCQUFpQjs7Ozs7Ozs7Ozs7O3dGQUUxRXVCLENBQU07Z0JBQUNKLElBQUksRUFBQyxDQUFROzBCQUFDLENBQUc7Ozs7Ozs7Ozs7OztBQUdyQyxDQUFDO0dBNUJLdEIsT0FBTztLQUFQQSxPQUFPO0FBOEJiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcz80ZTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JpZCc7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe30pXG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL21haWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC01XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8R3JpZCBzbT17NH0gbWQ9ezR9IGdhcD17NH0+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJmcm9tXCIgbmFtZT1cImZyb21cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzdWJqZWN0XCIgbmFtZT1cInN1YmplY3RcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJ0ZXh0XCIgcm93cz17NH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+MTIzPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybSIsIklucHV0IiwiR3JpZCIsIkNvbnRhY3QiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJzbSIsIm1kIiwiZ2FwIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

});