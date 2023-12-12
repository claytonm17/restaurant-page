/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Creates the top bar of webpage\nfunction createHeader(text) {\n    const header = document.createElement('header');\n    header.setAttribute('class', 'heading');\n    \n    // Restaurant Title\n    const title = document.createElement('h1');\n    title.textContent = text;\n    header.appendChild(title);\n\n    // Nav bar creation\n    const nav = document.createElement('nav');\n    nav.setAttribute('class', 'navbar');\n    \n    nav.appendChild(createButton('home-button', 'Home'));\n    nav.appendChild(createButton('menu-button', 'Menu'));\n    nav.appendChild(createButton('contact-button', 'Contact'));\n\n\n    header.appendChild(nav);\n    return header;\n}\n\n// Navbar creation\nfunction createButton(selector, button) {\n    const newButton = document.createElement('button');\n    newButton.setAttribute('class', selector);\n    newButton.textContent = button;\n    return newButton;\n}\n\nconst contentContainer = document.querySelector('#content');\ncontentContainer.appendChild(createHeader('Cat fish'))\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;