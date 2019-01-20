import React from 'react';
import Truchet from 'truchet';
import './Background.scss';

export default class Background extends React.PureComponent {

    constructor(props) {
        super(props);

        this.target = React.createRef();
    }

    componentDidMount() {
        const size = 80;
        const p = new Truchet(this.target.current, size, size, (x, y) => ({
            id: 'a',
            rotate: [0, 90][Math.floor(Math.random() * 2)], // Randomly toggle between 0 and 90 degree rotation
            x,
            y,
        }));
        
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
        const path = (_class, d) => createNode('path', {class: _class, d});
        const rect = (_class, width, height) => createNode('rect', {class: _class, width, height});
        const circle = (_class, cx, cy, r) => createNode('circle', {class: _class, cx, cy, r});
        
        p.addTile('a', ({x, y, rotate}) => {
            const el = g([
                // rect('rect', 100, 100),
                path('arc', `M 0,${size/2} A ${size/2},${size/2} 0 0 0 ${size/2} 0`),
                path('arc', `M ${size/2},${size} A ${size/2},${size/2} 0 0 1 ${size} ${size/2}`),
            ]);
            el.style.setProperty('transform-origin', `${size/2}px ${size/2}px`);
            el.style.setProperty('transform', `translate(${x}px, ${y}px) rotate(${rotate}deg)`);
            return el;
        });
        
        p.render();
        
        window.addEventListener('resize', () => {
            p.render();
        })
    }

    render() {
        return (
            <div className='background'>
                <svg className='truchet-container' ref={this.target}/>
                <div className='overlay'/>
            </div>
        );
    }
}