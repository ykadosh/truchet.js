import Tile from './Tile';
import Target from './Target';
import defaults from './Truchet.defaults';

export class Truchet {

    constructor(target, options = {}) {
        this.options = {...defaults, ...options};
        this.target = new Target(target, {tileWidth: this.options.size, tileHeight: this.options.size});
    }

    addTile(args) {
        const {size} = this.options;
        this.target.registerTile(new Tile({...args, height: size, width: size}));
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

export default Truchet;