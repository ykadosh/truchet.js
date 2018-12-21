import Tile from './Tile';
import Target from './Target';

export default class Pattern {

    constructor(target) {
        this.target = new Target(target, {tileWidth: 100, tileHeight: 100});
    }

    addTile(tile) {
        this.target.registerTile(new Tile(tile, {height: 100, width: 100}));
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