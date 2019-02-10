export default class Renderer {

    constructor(truchet) {
        this.truchet = truchet;
        this.size = 50;
        this.rotation = [
            [0, 0, 180, -90, 0],
            [0, 180, 0, 0, 0],
            [180, 0, 90, -90, 0],
            [90, 0, 90, 90, -90],
            [0, 0, 0, 90, 0],
        ];
        this.fill = [
            [0, 0, 2, 2, 0],
            [0, 2, 1, 2, 0],
            [2, 1, 1, 2, 0],
            [2, 2, 2, 1, 2],
            [0, 0, 0, 2, 2]
        ]
    }

    random(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }

    inRange(n, min, max) {
        return ((n-min)*(n-max) <= 0);
    }

    getFirstMatrixColumn() {
        const {cols} = this.truchet.getTileCount();
        return Math.floor(cols / 2 - 6);
    }

    shouldApplyMatrix(row, col) {
        if (this.truchet.getTileCount().cols < 16) {
            return false;
        }
        const left = this.getFirstMatrixColumn();
        return this.inRange(row, 0, 4) && this.inRange(col, left, left + 4);

    }

    getRotation(row, col, prevProps) {
        if (this.shouldApplyMatrix(row, col)) {
            return this.rotation[row % 5][(col - this.getFirstMatrixColumn()) % 5];
        }
        return prevProps ? prevProps.rotate : [0, 90][this.random(0, 2)]; // Randomly toggle between 0 and 90 degree rotation
    }

    getFill(row, col) {
        if (this.shouldApplyMatrix(row, col)) {
            return this.fill[row % 5][(col - this.getFirstMatrixColumn()) % 5];
        }
        return 0;
    }

    render(row, col, prevProps) {
        const {size} = this;
        return {
            id: 'a',
            rotate: this.getRotation(row, col, prevProps),
            fill: this.getFill(row, col),
            x: col * size,
            y: row * size,
        }
    }
}