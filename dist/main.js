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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-template.js */ \"./src/modules/page-template.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\n\nconst { createHeader, createFooter } = _modules_page_template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst { createHomePage }  = _modules_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst { createMenu } = _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nconst { createContactPage } = _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\nfunction buildPage(template, button) {\n    // Page creation\n    const contentContainer = document.querySelector('#content');\n    contentContainer.appendChild(createHeader(\"Catfish Biff's\"))\n\n    // Unique page content goes here\n    contentContainer.appendChild(template);\n    // Set button to active\n    const newButton = document.querySelector(`.${button}-button`);\n    newButton.classList.add('active');\n\n    contentContainer.appendChild(createFooter());\n}\n\n// Arguments (specific page building function, active button for page)\nbuildPage(createContactPage(), 'contact');\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactPage() {\n    const contactPage = document.createElement('main');\n    contactPage.setAttribute('class', 'body');\n\n    const contactLabel = document.createElement('h2');\n    contactLabel.textContent = 'Contact us';\n    contactPage.appendChild(contactLabel);\n\n    const phoneNumber = document.createElement('p');\n    phoneNumber.textContent = '☎️ (123)-456-7890';\n    contactPage.appendChild(phoneNumber);\n\n    const emailAddress = document.createElement('p');\n    emailAddress.textContent = '✉️ catfish@biffs.com';\n    contactPage.appendChild(emailAddress);\n\n    const mapImage = document.createElement('img');\n    mapImage.setAttribute('src', './images/map.jpeg');\n    mapImage.setAttribute('alt', \"A map with the location of Catfish Biff's\")\n    mapImage.setAttribute('class', 'map');\n    contactPage.appendChild(mapImage);\n\n    const disclaimer = document.createElement('p');\n    disclaimer.textContent = 'These contact methods are not real!';\n    contactPage.appendChild(disclaimer);\n\n    return contactPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    createContactPage,\n});\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHomePage() {\n    // Parent element\n    const homePage = document.createElement('main');\n    homePage.setAttribute('class', 'body');\n\n    // h2\n    const secondTitle = document.createElement('h2');\n    secondTitle.textContent = 'A staple at The Ohio State University';\n    homePage.appendChild(secondTitle);\n\n    // p tag 1\n    const subText = document.createElement('p');\n    subText.textContent = 'Serving up delicious homemade pizza and subs!';\n    homePage.appendChild(subText);\n\n    // image\n    const locationImage = document.createElement('img');\n    locationImage.src = './images/location.jpeg';\n    locationImage.setAttribute('class', 'location-photo');\n    locationImage.setAttribute('alt', \"A photo of the location of Catfish Biff's along the south campus border of The Ohio State University\");\n    homePage.appendChild(locationImage);\n\n    // p tag 2\n    const pickupText = document.createElement('p');\n    pickupText.textContent = 'Pickup and delivery available!';\n    homePage.appendChild(pickupText);\n\n    return homePage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    createHomePage,\n});\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    // Parent element\n    const menuPage = document.createElement('main');\n    menuPage.setAttribute('class', 'body');\n\n    // h2\n    const menuTitle = document.createElement('h2');\n    menuTitle.textContent = \"We ain't got no fish!\";\n    menuPage.appendChild(menuTitle);\n\n    // menu grid\n    const menuGrid = document.createElement('div');\n    menuGrid.setAttribute('class', 'menu-grid');\n\n    function createMenuItem(name, price, img) {\n        const menuItem = document.createElement('div');\n        menuItem.setAttribute('class', 'menu-item');\n    \n        const itemName = document.createElement('p');\n        itemName.textContent = name;\n        menuItem.appendChild(itemName);\n        \n        const itemPrice = document.createElement('p');\n        itemPrice.setAttribute('class', 'price');\n        itemPrice.textContent = price;\n        menuItem.appendChild(itemPrice);\n    \n        const image = document.createElement('img');\n        image.setAttribute('class', 'item-photo');\n        image.setAttribute('alt', 'A delicious looking photo of the menu item listed');\n        image.setAttribute('src', `./images/${img}.jpg`);\n        menuItem.appendChild(image);\n    \n        return menuItem\n    }\n\n    menuGrid.appendChild(createMenuItem('Small 10\" 2-Item Pizza', '$7.50', 'pizza-photo'));\n    menuGrid.appendChild(createMenuItem('Italian Hot Sub', '$6.50', 'sub-photo'));\n    menuGrid.appendChild(createMenuItem('Medium 12\" 2-Item Pizza', '$8.50', 'pizza-photo'));\n    menuGrid.appendChild(createMenuItem('Ham & Cheese Sub', '$6.50', 'sub-photo'));\n    menuGrid.appendChild(createMenuItem('Large 14\" 2-Item Pizza', '$9.50', 'pizza-photo'));\n    menuGrid.appendChild(createMenuItem('Pizza Sub', '$7.50', 'sub-photo'));\n\n    menuPage.appendChild(menuGrid);\n\n    return menuPage\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    createMenu,\n});\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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