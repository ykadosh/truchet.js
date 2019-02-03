import Truchet from 'truchet';

class Tile extends Truchet.Tile {

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
        this.el.appendChild(this.createNode('path', {class: 'path', d: `M 0,${size/2} A ${size/2},${size/2} 0 0 0 ${size/2} 0`}));
        this.el.appendChild(this.createNode('path', {class: 'path', d: `M ${size/2},${size} A ${size/2},${size/2} 0 0 1 ${size} ${size/2}`}));
        this.el.style.setProperty('transform-origin', `${size/2}px ${size/2}px`);
        target.appendChild(this.el);
    }

    render(props) {
        const {x, y} = props;
        this.el.style.setProperty('transform', `translate(${x}px, ${y}px)`);
    }
}

class RotatableTile extends Tile {
    render(props) {
        const {x, y, rotate} = props;
        this.el.style.setProperty('transform', `translate(${x}px, ${y}px) rotate(${rotate}deg)`);
        return this.el;
    }
}

export default [
    {
        id: 1,
        render: svg => {
            const size = 100;
            const truchet = new Truchet(svg, size, size);
            truchet.addTile('a', Tile);
            truchet.render((row, col) => ({id: 'a', x: col * size, y: row * size}));
        }
    },
    {
        id: 2,
        render: svg => {
            const size = 100;
            const truchet = new Truchet(svg, size, size);

            truchet.addTile('a', RotatableTile);

            truchet.render((row, col) => ({
                id: 'a', 
                x: col * size, 
                y: row * size, 
                rotate: [0, 90][Math.floor(Math.random() * 2)]
            }));
        }
    }
]