import defaults from './Tile.defaults';
import {random} from './utility';

export default class Tile {

    constructor(element, options = {}) {
        this.element = element;
        this.options = {...defaults, ...options};
    }

    create(x, y) {
        const element = this.element.cloneNode(true);
        const {width, height} = this.options;
        element.style.setProperty('transform-origin', `${width/2}px ${height/2}px`);
        element.style.setProperty('transform', `translate(${x * width}px, ${y * height}px) rotate(${[0, 0][random(0, 2)]}deg)`);
        element.setAttribute('data-pattern', [x, y]);
        return element;
    }
}