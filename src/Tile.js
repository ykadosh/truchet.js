export default class Tile {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    mount() {}

    render() {
        console.error('Truchet.js: The render() function of a tile must be implemented in the child class.');
    }
}