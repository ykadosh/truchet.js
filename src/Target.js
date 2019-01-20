export default class Target {
    
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