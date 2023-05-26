/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Home {\n  constructor() {\n    this.home = document.querySelector(\".home\");\n    this.play = document.querySelector(\".play\");\n    this.handleClick = this.handleClick.bind(this);\n    this.play.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.home.classList.add(\"fadeout\");\n    // this.home.classList.add(\"hidden\");\n    this.phono = document.querySelector(\".phono\");\n    this.phono.classList.remove(\"hidden\");\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJO0VBQ05DLFdBQVdBLENBQUEsRUFBRTtJQUNULElBQUksQ0FBQ0MsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDM0MsSUFBSSxDQUFDQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUMzQyxJQUFJLENBQUNFLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNGLElBQUksQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBQ3hEO0VBRUFBLFdBQVdBLENBQUEsRUFBRTtJQUNULElBQUksQ0FBQ0osSUFBSSxDQUFDTyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDbEM7SUFDQSxJQUFJLENBQUNDLEtBQUssR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDLElBQUksQ0FBQ08sS0FBSyxDQUFDRixTQUFTLENBQUNHLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDekM7QUFFSjtBQUlBLCtEQUFlWixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcz9kMWRjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEhvbWV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5ob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpXG4gICAgICAgIHRoaXMucGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheVwiKVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5oYW5kbGVDbGljaylcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpe1xuICAgICAgICB0aGlzLmhvbWUuY2xhc3NMaXN0LmFkZChcImZhZGVvdXRcIik7XG4gICAgICAgIC8vIHRoaXMuaG9tZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLnBob25vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG9ub1wiKVxuICAgICAgICB0aGlzLnBob25vLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJIb21lIiwiY29uc3RydWN0b3IiLCJob21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheSIsImhhbmRsZUNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJwaG9ubyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home.js\n");

/***/ }),

/***/ "./src/components/phono.js":
/*!*********************************!*\
  !*** ./src/components/phono.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Phono {\n  constructor() {\n    this.phono = document.querySelector(\".phono\");\n    this.playphono = document.querySelector(\".playpho\");\n    this.handleClick = this.handleClick.bind(this);\n    this.playphono.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.playAudio();\n  }\n  playAudio() {\n    let audio = new Audio('src/assets/lavieenrose.mp3');\n    audio.play();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Phono);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9waG9uby5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSztFQUNQQyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDLElBQUksQ0FBQ0MsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDbkQsSUFBSSxDQUFDRSxXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDOUMsSUFBSSxDQUFDRixTQUFTLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUNGLFdBQVcsQ0FBQztFQUM3RDtFQUdBQSxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNHLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRUFBLFNBQVNBLENBQUEsRUFBRTtJQUNQLElBQUlDLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7SUFDbkRELEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUM7RUFDaEI7QUFHSjtBQUVBLCtEQUFlWixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcGhvbm8uanM/ZTZjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQaG9ub3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBob25vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG9ub1wiKVxuICAgICAgICB0aGlzLnBsYXlwaG9ubyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheXBob1wiKVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBsYXlwaG9uby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmhhbmRsZUNsaWNrKVxuICAgIH1cblxuXG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy5wbGF5QXVkaW8oKTtcbiAgICB9XG5cbiAgICBwbGF5QXVkaW8oKXtcbiAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCdzcmMvYXNzZXRzL2xhdmllZW5yb3NlLm1wMycpXG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQaG9ubzsiXSwibmFtZXMiOlsiUGhvbm8iLCJjb25zdHJ1Y3RvciIsInBob25vIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheXBob25vIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXlBdWRpbyIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/phono.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_phono__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/phono */ \"./src/components/phono.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const rootEl = document.querySelector(\"root\");\n  new _components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _components_phono__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ0U7QUFDdkNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUMsTUFBSztFQUU5QyxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUM3QyxJQUFJTCx3REFBSSxDQUFDLENBQUM7RUFDVixJQUFJQyx5REFBSyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9tZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVcIjtcbmltcG9ydCBQaG9ubyBmcm9tIFwiLi9jb21wb25lbnRzL3Bob25vXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpID0+e1xuXG4gICAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInJvb3RcIilcbiAgICBuZXcgSG9tZSgpO1xuICAgIG5ldyBQaG9ubygpO1xufSkiXSwibmFtZXMiOlsiSG9tZSIsIlBob25vIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicm9vdEVsIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;