export default class Pattern {

    constructor(target) {
        this.target = target;
        this.tiles = [];
    }

    addTile(tile) {
        this.tiles.push(tile);
    }

    render() {
        console.log('asdasd');
        console.log(this.target);
    }
}