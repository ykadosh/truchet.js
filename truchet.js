(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Tile.js":
/*!*********************!*\
  !*** ./src/Tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tile; });\nclass Tile {\n\n    constructor(width, height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    mount() {}\n\n    render() {\n        console.error('Truchet.js: The render() function of a tile must be implemented in the child class.');\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVGlsZS5qcz83MWVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9UaWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgbW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcnVjaGV0LmpzOiBUaGUgcmVuZGVyKCkgZnVuY3Rpb24gb2YgYSB0aWxlIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gdGhlIGNoaWxkIGNsYXNzLicpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Tile.js\n");

/***/ }),

/***/ "./src/Truchet.js":
/*!************************!*\
  !*** ./src/Truchet.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Truchet; });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility/index.js\");\n\n\nclass Truchet {\n\n    constructor(target, width, height) {\n        this.target = target;\n        this.width  = width;\n        this.height = height;\n        this.tiles  = {};\n        this.matrix = []; // Acts as a virtual DOM\n    }\n\n    addTile(id, cls) {\n        this.tiles[id] = cls;\n    }\n\n    removeTile(id) {\n        delete this.tiles[id];\n    }\n\n    getTileCount() {\n        const {width, height} = this.target.getBoundingClientRect();\n        return {\n            cols: Math.ceil(width / this.width),\n            rows: Math.ceil(height / this.height),\n        };\n    }\n\n    renderTile(row, column) {\n        const {props, tile} = this.matrix[row][column];\n        const {target, width, height} = this;\n        if (typeof tile === 'undefined') {\n            this.matrix[row][column].tile = new this.tiles[props.id](width, height);\n            this.matrix[row][column].tile.mount(target);\n        }\n        this.matrix[row][column].tile.render(props);\n    }\n\n    render(...args) {\n        const {cols, rows} = this.getTileCount();\n\n        // Render a single tile\n        if (args.length === 3) {\n            const [r, c, callback] = args;\n            const oldProps = this.matrix[r][c].props;\n            const newProps = callback(oldProps);\n\n            if (!Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"equals\"])(oldProps, newProps)) {\n                this.matrix[r][c].props = newProps;\n                this.renderTile(r, c);\n            }\n            return;\n        }\n\n        // Render all tiles\n        for (let r = 0; r < rows; r++) {\n            if (typeof this.matrix[r] === 'undefined') {\n                this.matrix[r] = [];\n            }\n            for (let c = 0; c < cols; c++) {\n                if (typeof this.matrix[r][c] === 'undefined') {\n                    this.matrix[r][c] = {};\n                }\n\n                const oldProps = this.matrix[r][c].props;\n                const newProps = args[0](r, c, oldProps);\n                \n                if (!Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"equals\"])(oldProps, newProps)) {\n                    this.matrix[r][c].props = newProps;\n                    this.renderTile(r, c);\n                }\n            }\n        }\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVHJ1Y2hldC5qcz81OGQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFpQzs7QUFFbEI7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxXQUFXOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix1REFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLHVEQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL1RydWNoZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2VxdWFsc30gZnJvbSAnLi91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1Y2hldCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnRpbGVzICA9IHt9O1xuICAgICAgICB0aGlzLm1hdHJpeCA9IFtdOyAvLyBBY3RzIGFzIGEgdmlydHVhbCBET01cbiAgICB9XG5cbiAgICBhZGRUaWxlKGlkLCBjbHMpIHtcbiAgICAgICAgdGhpcy50aWxlc1tpZF0gPSBjbHM7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGlsZShpZCkge1xuICAgICAgICBkZWxldGUgdGhpcy50aWxlc1tpZF07XG4gICAgfVxuXG4gICAgZ2V0VGlsZUNvdW50KCkge1xuICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbHM6IE1hdGguY2VpbCh3aWR0aCAvIHRoaXMud2lkdGgpLFxuICAgICAgICAgICAgcm93czogTWF0aC5jZWlsKGhlaWdodCAvIHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXJUaWxlKHJvdywgY29sdW1uKSB7XG4gICAgICAgIGNvbnN0IHtwcm9wcywgdGlsZX0gPSB0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbl07XG4gICAgICAgIGNvbnN0IHt0YXJnZXQsIHdpZHRoLCBoZWlnaHR9ID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiB0aWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5tYXRyaXhbcm93XVtjb2x1bW5dLnRpbGUgPSBuZXcgdGhpcy50aWxlc1twcm9wcy5pZF0od2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbl0udGlsZS5tb3VudCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0cml4W3Jvd11bY29sdW1uXS50aWxlLnJlbmRlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qge2NvbHMsIHJvd3N9ID0gdGhpcy5nZXRUaWxlQ291bnQoKTtcblxuICAgICAgICAvLyBSZW5kZXIgYSBzaW5nbGUgdGlsZVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IFtyLCBjLCBjYWxsYmFja10gPSBhcmdzO1xuICAgICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSB0aGlzLm1hdHJpeFtyXVtjXS5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gY2FsbGJhY2sob2xkUHJvcHMpO1xuXG4gICAgICAgICAgICBpZiAoIWVxdWFscyhvbGRQcm9wcywgbmV3UHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbcl1bY10ucHJvcHMgPSBuZXdQcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRpbGUociwgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgYWxsIHRpbGVzXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubWF0cml4W3JdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3JdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbHM7IGMrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5tYXRyaXhbcl1bY10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3JdW2NdID0ge307XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSB0aGlzLm1hdHJpeFtyXVtjXS5wcm9wcztcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IGFyZ3NbMF0ociwgYywgb2xkUHJvcHMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghZXF1YWxzKG9sZFByb3BzLCBuZXdQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbcl1bY10ucHJvcHMgPSBuZXdQcm9wcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHIsIGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Truchet.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, Truchet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Truchet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Truchet */ \"./src/Truchet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Truchet\", function() { return _Truchet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ \"./src/Tile.js\");\n\n\n\n_Truchet__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Tile = _Tile__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Truchet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ047O0FBRTFCLGdEQUFPLFFBQVEsNkNBQUk7O0FBRUosK0dBQU8sRUFBQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcnVjaGV0IGZyb20gJy4vVHJ1Y2hldCc7XG5pbXBvcnQgVGlsZSBmcm9tICcuL1RpbGUnO1xuXG5UcnVjaGV0LlRpbGUgPSBUaWxlO1xuXG5leHBvcnQgZGVmYXVsdCBUcnVjaGV0O1xuZXhwb3J0IHtUcnVjaGV0fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: random, getType, isObject, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility/utility.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__[\"random\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getType\", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__[\"getType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"equals\", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__[\"equals\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0eS9pbmRleC5qcz80ZmJiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL3V0aWxpdHkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3V0aWxpdHknOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utility/index.js\n");

/***/ }),

/***/ "./src/utility/utility.js":
/*!********************************!*\
  !*** ./src/utility/utility.js ***!
  \********************************/
/*! exports provided: random, getType, isObject, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getType\", function() { return getType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"equals\", function() { return equals; });\nconst random = (from, to) => (\n    Math.floor((Math.random() * Math.abs(to - from)) + Math.min(from, to))\n);\n\nconst getType = variable => (\n    Object.prototype.toString.call(variable).replace(/(\\[object |\\])/g, '')\n);\n\nconst isObject = variable => (\n    'Object' === getType(variable)\n);\n\nconst equals = (a, b) => {\n    if (![a, b].every(isObject)) {\n        return false;\n    }\n    const aKeys = Object.keys(a);\n    const bKeys = Object.keys(b);\n    if (aKeys.length === bKeys.length) {\n        return aKeys.every(key => (\n            a[key] === b[key]\n        ));\n    }\n    return false;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0eS91dGlsaXR5LmpzP2MxMmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3V0aWxpdHkvdXRpbGl0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByYW5kb20gPSAoZnJvbSwgdG8pID0+IChcbiAgICBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogTWF0aC5hYnModG8gLSBmcm9tKSkgKyBNYXRoLm1pbihmcm9tLCB0bykpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9IHZhcmlhYmxlID0+IChcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnJlcGxhY2UoLyhcXFtvYmplY3QgfFxcXSkvZywgJycpXG4pO1xuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSB2YXJpYWJsZSA9PiAoXG4gICAgJ09iamVjdCcgPT09IGdldFR5cGUodmFyaWFibGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZXF1YWxzID0gKGEsIGIpID0+IHtcbiAgICBpZiAoIVthLCBiXS5ldmVyeShpc09iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgaWYgKGFLZXlzLmxlbmd0aCA9PT0gYktleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBhS2V5cy5ldmVyeShrZXkgPT4gKFxuICAgICAgICAgICAgYVtrZXldID09PSBiW2tleV1cbiAgICAgICAgKSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utility/utility.js\n");

/***/ })

/******/ });
});