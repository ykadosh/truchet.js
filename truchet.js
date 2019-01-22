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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utility/utility.js
const random = (from, to) => (
    Math.floor((Math.random() * Math.abs(to - from)) + Math.min(from, to))
);

const getType = variable => (
    Object.prototype.toString.call(variable).replace(/(\[object |\])/g, '')
);

const isObject = variable => (
    'Object' === getType(variable)
);

const equals = (a, b) => {
    if (![a, b].every(isObject)) {
        return false;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length === bKeys.length) {
        return aKeys.every(key => (
            a[key] === b[key]
        ));
    }
    return false;
};
// CONCATENATED MODULE: ./src/utility/index.js

// CONCATENATED MODULE: ./src/Truchet.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Truchet", function() { return Truchet_Truchet; });


class Truchet_Truchet {

    constructor(target, width, height) {
        this.target = target;
        this.width  = width;
        this.height = height;
        this.tiles  = {};
        this.matrix = []; // Acts as a virtual DOM
    }

    addTile(id, render) {
        this.tiles[id] = render;
    }

    removeTile(id) {
        delete this.tiles[id];
    }

    getTileCount() {
        const {width, height} = this.target.getBoundingClientRect();
        return {
            cols: Math.ceil(width / this.width),
            rows: Math.ceil(height / this.height),
        };
    }

    renderTile(row, column) {
        const {props, element} = this.matrix[row][column];
        if (typeof element !== 'undefined') {
            this.target.removeChild(element);
        }
        this.matrix[row][column].element = this.tiles[props.id](props);
        this.target.appendChild(
            this.matrix[row][column].element
        );
    }

    render(callback) {
        const {cols, rows} = this.getTileCount();
        const {width, height} = this;

        for (let r = 0; r < rows; r++) {
            if (typeof this.matrix[r] === 'undefined') {
                this.matrix[r] = [];
            }
            for (let c = 0; c < cols; c++) {
                if (typeof this.matrix[r][c] === 'undefined') {
                    this.matrix[r][c] = {};
                }

                const oldProps = this.matrix[r][c].props;
                const newProps = callback(r, c, oldProps);
                
                if (!equals(oldProps, newProps)) {
                    this.matrix[r][c].props = newProps;
                    this.renderTile(r, c);
                }
            }
        }
    }
}

/* harmony default export */ var src_Truchet = __webpack_exports__["default"] = (Truchet_Truchet);

/***/ })
/******/ ]);
});