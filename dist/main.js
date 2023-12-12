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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-template.js */ \"./src/modules/page-template.js\");\n\n\nconst { createHeader, createFooter } = _modules_page_template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n// Page creation\nconst contentContainer = document.querySelector('#content');\ncontentContainer.appendChild(createHeader(\"Catfish Biff's\"))\n\n// Unique page content goes here\n\ncontentContainer.appendChild(createFooter());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/page-template.js":
/*!**************************************!*\
  !*** ./src/modules/page-template.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Creates the top bar of webpage\nfunction createHeader(text) {\n    const header = document.createElement('header');\n    header.setAttribute('class', 'heading');\n    \n    // Restaurant Title\n    const title = document.createElement('h1');\n    title.textContent = text;\n    header.appendChild(title);\n\n    // Nav bar creation\n    const nav = document.createElement('nav');\n    nav.setAttribute('class', 'navbar');\n\n    function createButton(selector, button) {\n        const newButton = document.createElement('button');\n        newButton.setAttribute('class', selector);\n        newButton.textContent = button;\n        return newButton;\n    }\n    \n    nav.appendChild(createButton('home-button', 'Home'));\n    nav.appendChild(createButton('menu-button', 'Menu'));\n    nav.appendChild(createButton('contact-button', 'Contact'));\n\n\n    header.appendChild(nav);\n    return header;\n}\n\n// Footer build\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    const footerText = document.createElement('p');\n    footerText.textContent = 'Created by Claytonm17 on GitHub';\n    footer.appendChild(footerText);\n    return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    createHeader,\n    createFooter\n});\n\n//# sourceURL=webpack://restaurant-page/./src/modules/page-template.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;