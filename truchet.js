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

// CONCATENATED MODULE: ./src/Tile.defaults.js
/* harmony default export */ var Tile_defaults = ({
    id: '', // Required
    render: () => null,
    rotate: [0], // [0, 90, 180], or [{from: 0, to: 360}]
    width: 0,
    height: 0,
});
// CONCATENATED MODULE: ./src/utility/utility.js
const random = (from, to) => (
    Math.floor((Math.random() * Math.abs(to - from)) + Math.min(from, to))
);
// CONCATENATED MODULE: ./src/utility/index.js

// CONCATENATED MODULE: ./src/Tile.js



class Tile_Tile {

    constructor(args = {}) {
        this.args = {...Tile_defaults, ...args};
    }

    create(x, y) {
        const {width, height, render, rotate} = this.args;
        const element = render();
        element.style.setProperty('transform-origin', `${width/2}px ${height/2}px`);
        element.style.setProperty('transform', `translate(${x * width}px, ${y * height}px) rotate(${rotate[random(0, rotate.length)]}deg)`);
        element.setAttribute('data-pattern', [x, y]);
        return element;
    }
}
// CONCATENATED MODULE: ./src/Target.defaults.js
/* harmony default export */ var Target_defaults = ({
    tileWidth: 0,
    tileHeight: 0,
});
// CONCATENATED MODULE: ./src/Target.js


class Target_Target {
    
    constructor(element, options = {}) {
        this.element = element;
        this.tiles = [];
        this.pool = [];
        this.options = {...Target_defaults, ...options};
    }

    registerTile(tile) {
        this.pool.push(tile);
    }

    getRandomTile() {
        const {pool} = this;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    drawTile(tile, row, col) {
        this.tiles[row][col] = tile.create(col, row);
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
            const tile = this.getRandomTile();
            this.drawTile(tile, rows, col);
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
            const tile = this.getRandomTile();
            this.drawTile(tile, row, cols);
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
            cols: Math.ceil(width / this.options.tileWidth), // Horizontal
            rows: Math.ceil(height / this.options.tileHeight), // Vertical
        };
    }

    getCurrentTileCount() {
        const rows = this.tiles.length;

        return {
            cols: rows > 0 ? this.tiles[0].length : 0,
            rows,
        }
    }

    refresh() {
        const {cols: tCols, rows: tRows} = this.getTargetTileCount();
        const {cols: cCols, rows: cRows} = this.getCurrentTileCount();

        if (tRows > cRows) {
            for (let row = cRows; row < tRows; row++) {
                this.addRow();
            }
        }

        if (tRows < cRows) {
            for (let row = tRows; row < cRows; row++) {
                this.removeRow();
            }
        }

        if (tCols > cCols) {
            for (let col = cCols; col < tCols; col++) {
                this.addColumn();
            }
        }

        if (tCols < cCols) {
            for (let col = tCols; col < cCols; col++) {
                this.removeColumn();
            }
        }
    }
}
// CONCATENATED MODULE: ./src/Truchet.defaults.js
/* harmony default export */ var Truchet_defaults = ({
    size: 100,
});
// CONCATENATED MODULE: ./src/Truchet.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Truchet", function() { return Truchet_Truchet; });




class Truchet_Truchet {

    constructor(target, options = {}) {
        this.options = {...Truchet_defaults, ...options};
        this.target = new Target_Target(target, {tileWidth: this.options.size, tileHeight: this.options.size});
    }

    addTile(args) {
        const {size} = this.options;
        this.target.registerTile(new Tile_Tile({...args, height: size, width: size}));
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