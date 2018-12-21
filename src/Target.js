import defaults from './Target.defaults';

export default class Target {
    
    constructor(element, options = {}) {
        this.element = element;
        this.tiles = [];
        this.pool = [];
        this.options = {...defaults, ...options};
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