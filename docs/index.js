import Pattern from '../pattern.min.js';
import './index.scss';

const target = document.getElementById('target');
const p = new Pattern(target);

const createNode = (n, v = {}) => {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    Object.keys(v).forEach(p=> {
        n.setAttributeNS(null, p, v[p]);
    })
    return n;
}

const g = children => {
    const n = createNode('g', {width: '100px', height: '100px'});
    children.forEach(child => {
        n.appendChild(child)
    });
    return n;
}
const path = (_class, d) => createNode('path', {class: _class, d});
const circle = (_class, cx, cy, r) => createNode('circle', {class: _class, cx, cy, r});

p.addTile(g([
    path('arc', 'M 0,50 A 50,50 0 0 0 50 0'),
    path('arc', 'M 50,100 A 50,50 0 0 1 100 50'),
]));

p.render();

window.addEventListener('resize', () => {
    p.render();
    console.log(target.children.length);
})