import React from 'react';
import Truchet from 'truchet';
import './Header.scss';

export default class Header extends React.PureComponent {

    constructor(props) {
        super(props);

        this.target = React.createRef();
    }

    componentDidMount() {
        const size = 80;
        const p = new Truchet(this.target.current, {size});
        
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
        
        p.addTile({
            id: 'a',
            render: () => (
                g([
                    // rect('rect', 100, 100),
                    path('arc', `M 0,${size/2} A ${size/2},${size/2} 0 0 0 ${size/2} 0`),
                    path('arc', `M ${size/2},${size} A ${size/2},${size/2} 0 0 1 ${size} ${size/2}`),
                ])
            ),
            rotate: [0, 90]
        });
        
        p.render();
        
        window.addEventListener('resize', () => {
            p.render();
        })
    }

    render() {
        return (
            <header>
                <svg className='truchet-container' ref={this.target}/>
            </header>
        );
    }
}