import Truchet from 'truchet';

export default class LogoTile extends Truchet.Tile {

    createNode(n, v = {}) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        Object.keys(v).forEach(p=> {
            n.setAttributeNS(null, p, v[p]);
        })
        return n;
    }

    mount(target) {
        const size = this.width;
        this.el = this.createNode('g');
        this.el.appendChild(this.createNode('path', {class: 'arc', d: `M 0,${size/2} A ${size/2},${size/2} 0 0 0 ${size/2} 0`}));
        this.el.appendChild(this.createNode('path', {class: 'arc', d: `M ${size/2},${size} A ${size/2},${size/2} 0 0 1 ${size} ${size/2}`}));
        // this.el.appendChild(this.createNode('path', {class: 'arc filled', d: `M ${size/2},${size} A ${size/2},${size/2} 0 0 1 ${size} ${size/2} L ${size},${size} L ${size/2},${size}`}));
        this.el.style.setProperty('transform-origin', `${size/2}px ${size/2}px`);
        target.appendChild(this.el);
    }

    render(props) {
        const {x, y, rotate} = props;
        this.el.style.setProperty('transform', `translate(${x}px, ${y}px) rotate(${rotate}deg)`);
    }
}