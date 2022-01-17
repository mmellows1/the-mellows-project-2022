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
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "./pages/api/mail.js":
/*!***************************!*\
  !*** ./pages/api/mail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.SENDGRID_API_KEY);\n// sgMail.setApiKey(`123`);\nfunction handler(req, res) {\n    if (req.method == 'POST') {\n        const reqData = JSON.parse(req.body);\n        _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send({\n            to: 'mmellows1@gmail.com',\n            from: 'matthew.mellows@themellowsproject.com',\n            subject: 'test',\n            html: '<h2>Hello</h2>'\n        });\n    } else {\n        res.status(200).json({\n            name: 'John Doe'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxFQUE2RTtBQUMxQztBQUNuQ0EsK0RBQWdCLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7QUFDN0MsRUFBMkI7QUFFWixRQUFRLENBQUNDLE9BQU8sQ0FBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUV4QyxFQUFFLEVBQUNELEdBQUcsQ0FBQ0UsTUFBTSxJQUFJLENBQU0sT0FBRSxDQUFDO1FBQ3RCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsR0FBRyxDQUFDTSxJQUFJO1FBRW5DWiwwREFBVyxDQUFDLENBQUM7WUFDVGMsRUFBRSxFQUFFLENBQXFCO1lBQ3pCQyxJQUFJLEVBQUUsQ0FBdUM7WUFDN0NDLE9BQU8sRUFBQyxDQUFNO1lBQ2RDLElBQUksRUFBRSxDQUFnQjtRQUMxQixDQUFDO0lBRUwsQ0FBQyxNQUFNLENBQUM7UUFFSlYsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxJQUFJLEVBQUUsQ0FBVTtRQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtbWVsbG93cy1wcm9qZWN0LTIwMjIvLi9wYWdlcy9hcGkvbWFpbC5qcz83ZDE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgc2dNYWlsIGZyb20gJ0BzZW5kZ3JpZC9tYWlsJztcbnNnTWFpbC5zZXRBcGlLZXkocHJvY2Vzcy5lbnYuU0VOREdSSURfQVBJX0tFWSk7XG4vLyBzZ01haWwuc2V0QXBpS2V5KGAxMjNgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlciAocmVxLCByZXMpIHtcblxuICAgIGlmKHJlcS5tZXRob2QgPT0gJ1BPU1QnKSB7XG4gICAgICAgIGNvbnN0IHJlcURhdGEgPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxuXG4gICAgICAgIHNnTWFpbC5zZW5kKHtcbiAgICAgICAgICAgIHRvOiAnbW1lbGxvd3MxQGdtYWlsLmNvbScsIFxuICAgICAgICAgICAgZnJvbTogJ21hdHRoZXcubWVsbG93c0B0aGVtZWxsb3dzcHJvamVjdC5jb20nLCBcbiAgICAgICAgICAgIHN1YmplY3Q6J3Rlc3QnLCBcbiAgICAgICAgICAgIGh0bWw6ICc8aDI+SGVsbG88L2gyPidcbiAgICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInNnTWFpbCIsInNldEFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJTRU5ER1JJRF9BUElfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlcURhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5Iiwic2VuZCIsInRvIiwiZnJvbSIsInN1YmplY3QiLCJodG1sIiwic3RhdHVzIiwianNvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/mail.js"));
module.exports = __webpack_exports__;

})();