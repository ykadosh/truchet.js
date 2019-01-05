import defaults from './Tile.defaults';
import {random} from './utility';

export default class Tile {

    constructor(args = {}) {
        this.args = {...defaults, ...args};
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