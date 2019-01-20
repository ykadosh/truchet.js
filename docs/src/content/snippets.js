import Truchet from 'truchet';

const createNode = (n, v = {}) => {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    Object.keys(v).forEach(p=> {
        n.setAttributeNS(null, p, v[p]);
    })
    return n;
}

const g = children => {
    const n = createNode('g');
    children.forEach(child => {
        n.appendChild(child)
    });
    return n;
}
const path = d => createNode('path', {class: 'path', d});
const rect = (width, height) => createNode('rect', {class: 'rect', width, height});

const render = (size, x, y, rotate = 0) => {
    const el = g([
        path(`M 0,${size/2} A ${size/2},${size/2} 0 0 0 ${size/2} 0`),
        path(`M ${size/2},${size} A ${size/2},${size/2} 0 0 1 ${size} ${size/2}`),
    ]);
    el.style.setProperty('transform-origin', `${size/2}px ${size/2}px`);
    el.style.setProperty('transform', `translate(${x}px, ${y}px) rotate(${rotate}deg)`);
    return el;
};

export default [
    {
        id: 1,
        render: svg => {
            const size = 100;
            svg.appendChild(g([
                rect(100, 100),
                path(`M 0,${size/2} A ${size/2},${size/2} 0 0 0 ${size/2} 0`),
                path(`M ${size/2},${size} A ${size/2},${size/2} 0 0 1 ${size} ${size/2}`),
            ]));
            svg.setAttributeNS(null, 'style', `width: ${size}px; height: ${size}px`);
        }
    },
    {
        id: 2,
        render: svg => {
            const size = 100;
            const truchet = new Truchet(svg, size, size, (x, y) => ({id: 'a', x, y}));

            truchet.addTile('a', ({x, y}) => render(100, x, y));

            truchet.render();
        }
    },
    {
        id: 3,
        render: svg => {
            const size = 100;
            const truchet = new Truchet(svg, size, size, (x, y) => ({id: 'a', x, y, rotate: [0, 90][Math.floor(Math.random() * 2)]}));

            truchet.addTile('a', ({x, y, rotate}) => render(100, x, y, rotate));

            truchet.render();
        }
    }
]