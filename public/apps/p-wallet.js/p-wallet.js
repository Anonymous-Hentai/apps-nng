/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Wallet.tsx":
/*!************************!*\
  !*** ./src/Wallet.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar nng_router_1 = __webpack_require__(/*! @phala/nng-router */ \"@phala/nng-router\");\r\nvar Wallet = function () {\r\n    var matchCurrent = nng_router_1.useRouter([\r\n        {\r\n            id: 'main',\r\n            rule: '/:walletId/user/:userId',\r\n            render: function (match) { return (react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(\"p\", { style: { color: 'red' } },\r\n                    \"Wallet id: \",\r\n                    match.walletId),\r\n                react_1.default.createElement(\"p\", { style: { color: 'red' } },\r\n                    \"User id: \",\r\n                    match.userId))); }\r\n        },\r\n    ], { base: '/apps/p-wallet/wallet' }).matchCurrent;\r\n    var routerMatch = matchCurrent();\r\n    return (react_1.default.createElement(\"div\", null, routerMatch === null || routerMatch === void 0 ? void 0 : routerMatch.rendered));\r\n};\r\nexports.default = Wallet;\r\n\n\n//# sourceURL=webpack://p-wallet/./src/Wallet.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar link_1 = __importDefault(__webpack_require__(/*! next/link */ \"next/link\"));\r\nvar nng_router_1 = __webpack_require__(/*! @phala/nng-router */ \"@phala/nng-router\");\r\nvar Wallet_1 = __importDefault(__webpack_require__(/*! ./Wallet */ \"./src/Wallet.tsx\"));\r\nvar RemoteComponent = function () {\r\n    var matchCurrent = nng_router_1.useRouter([\r\n        {\r\n            id: 'wallet',\r\n            rule: '/wallet/*params',\r\n            render: function () { return (react_1.default.createElement(Wallet_1.default, null)); }\r\n        },\r\n        {\r\n            id: 'parachain',\r\n            rule: '/parachain/:id',\r\n            render: function (match) { return (react_1.default.createElement(\"p\", { style: { color: 'green' } },\r\n                \"Parachain id: \",\r\n                match.id)); }\r\n        },\r\n        {\r\n            id: 'fallback',\r\n            rule: '*',\r\n            render: function () { return (react_1.default.createElement(\"p\", { style: { color: 'orange' } }, \"No match\")); }\r\n        }\r\n    ], { base: '/apps/p-wallet' }).matchCurrent;\r\n    var routerMatch = matchCurrent();\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"p\", null, \"Hello World from pWallet!\"),\r\n        react_1.default.createElement(\"ul\", null,\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(link_1.default, { href: \"/apps/p-wallet/wallet/1/user/abc\" }, \"Wallet 1\")),\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(link_1.default, { href: \"/apps/p-wallet/wallet/2/user/def\" }, \"Wallet 2\")),\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(link_1.default, { href: \"/apps/p-wallet/wallet/3/user/ghi\" }, \"Wallet 3\")),\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(link_1.default, { href: \"/apps/p-wallet/parachain/1\" }, \"Parachain 1\")),\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(link_1.default, { href: \"/apps/p-wallet/parachain/2\" }, \"Parachain 2\")),\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(link_1.default, { href: \"/apps/p-wallet/parachain/3\" }, \"Parachain 3\")),\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(link_1.default, { href: \"/apps/p-wallet/aaabbbccc\" }, \"Void\"))), routerMatch === null || routerMatch === void 0 ? void 0 :\r\n        routerMatch.rendered));\r\n};\r\nexports.default = RemoteComponent;\r\n\n\n//# sourceURL=webpack://p-wallet/./src/index.tsx?");

/***/ }),

/***/ "@phala/nng-router":
/*!************************************!*\
  !*** external "@phala/nng-router" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@phala/nng-router");;

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/link");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;