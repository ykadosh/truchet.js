import {equals} from './utility';

export class Truchet {

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

export default Truchet;