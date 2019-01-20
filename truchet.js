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

// CONCATENATED MODULE: ./src/Target.js
class Target {
    
    constructor(element, width, height, callback) {
        this.element = element;
        this.tiles = [];
        this.pool = {};
        this.width = width; // Tile width
        this.height = height; // Tile height
        this.callback = callback;
    }

    registerTile(id, render) {
        this.pool[id] = render;
    }

    deregisterTile(id) {
        delete this.pool[id];
    }

    getTile(row, col) {
        const props = this.callback(col * this.width, row * this.height);
        return this.pool[props.id](props);
    }

    drawTile(row, col) {
        const tile = this.getTile(row, col);
        this.tiles[row][col] = tile;
        this.element.appendChild(this.tiles[row][col]);
    }

    eraseTile(row, col) {
        this.element.removeChild(this.tiles[row][col]);
        this.tiles[row].splice(col, 1);
    }

    addRow() {
        const {rows, cols} = this.getCurrentTileCount();
        this.tiles.push([]);
        for (let col = 0; col < cols; col++) {
            this.drawTile(rows, col);
        }
    }

    removeRow() {
        const {rows, cols} = this.getCurrentTileCount();
        for (let col = cols - 1; col >= 0; col--) {
            this.eraseTile(rows - 1, col);
        }
        this.tiles.splice(rows - 1, 1);
    }

    addColumn() {
        const {rows, cols} = this.getCurrentTileCount();
        for (let row = 0; row < rows; row++) {
            this.drawTile(row, cols);
        }
    }

    removeColumn() {
        const {rows, cols} = this.getCurrentTileCount();
        for (let row = rows - 1; row >= 0; row--) {
            this.eraseTile(row, cols - 1);
        }
    }

    getTargetTileCount() {
        const {width, height} = this.element.getBoundingClientRect();
        return {
            cols: Math.ceil(width / this.width), // Horizontal
            rows: Math.ceil(height / this.height), // Vertical
        };
    }

    getCurrentTileCount() {
        const rows = this.tiles.length;

        return {
            cols: rows > 0 ? this.tiles[0].length : 0,
            rows,
        }
    }
}
// CONCATENATED MODULE: ./src/Truchet.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Truchet", function() { return Truchet_Truchet; });


class Truchet_Truchet {

    constructor(target, width, height, callback) {
        this.target   = new Target(target, width, height, callback);
    }

    addTile(id, render) {
        this.target.registerTile(id, render);
    }

    removeTile(id) {
        this.target.deregisterTile(id);
    }

    render() {
        const {target} = this;
        const {cols: tCols, rows: tRows} = target.getTargetTileCount();
        const {cols: cCols, rows: cRows} = target.getCurrentTileCount();

        if (tRows > cRows) {
            for (let row = cRows; row < tRows; row++) {
                target.addRow();
            }
        }

        if (tRows < cRows) {
            for (let row = tRows; row < cRows; row++) {
                target.removeRow();
            }
        }

        if (tCols > cCols) {
            for (let col = cCols; col < tCols; col++) {
                target.addColumn();
            }
        }

        if (tCols < cCols) {
            for (let col = tCols; col < cCols; col++) {
                target.removeColumn();
            }
        }
    }
}

/* harmony default export */ var src_Truchet = __webpack_exports__["default"] = (Truchet_Truchet);

/***/ })
/******/ ]);
});