import {equals} from './utility';

export default class Truchet {

    constructor(target, width, height) {
        this.target = target;
        this.width  = width;
        this.height = height;
        this.tiles  = {};
        this.matrix = []; // Acts as a virtual DOM
    }

    addTile(id, cls) {
        this.tiles[id] = cls;
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
        const {props, tile} = this.matrix[row][column];
        const {target, width, height} = this;
        if (typeof tile === 'undefined') {
            this.matrix[row][column].tile = new this.tiles[props.id](width, height);
            this.matrix[row][column].tile.mount(target);
        }
        this.matrix[row][column].tile.render(props);
    }

    render(...args) {
        const {cols, rows} = this.getTileCount();

        // Render a single tile
        if (args.length === 3) {
            const [r, c, callback] = args;
            const oldProps = this.matrix[r][c].props;
            const newProps = callback(oldProps);

            if (!equals(oldProps, newProps)) {
                this.matrix[r][c].props = newProps;
                this.renderTile(r, c);
            }
            return;
        }

        // Render all tiles
        for (let r = 0; r < rows; r++) {
            if (typeof this.matrix[r] === 'undefined') {
                this.matrix[r] = [];
            }
            for (let c = 0; c < cols; c++) {
                if (typeof this.matrix[r][c] === 'undefined') {
                    this.matrix[r][c] = {};
                }

                const oldProps = this.matrix[r][c].props;
                const newProps = args[0](r, c, oldProps);
                
                if (!equals(oldProps, newProps)) {
                    this.matrix[r][c].props = newProps;
                    this.renderTile(r, c);
                }
            }
        }
    }
}