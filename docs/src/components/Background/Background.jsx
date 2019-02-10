import React from 'react';
import Truchet from 'truchet';
import BackgroundTile from './Background.tile';
import Renderer from './Background.renderer';
import './Background.scss';

export default class Background extends React.PureComponent {

    constructor(props) {
        super(props);

        this.target = React.createRef();
    }

    componentDidMount() {
        const size = 50;
        const truchet = new Truchet(this.target.current, size, size);
        const renderer = new Renderer(truchet);
        
        truchet.addTile('a', BackgroundTile);
        truchet.render(renderer.render.bind(renderer));
        
        window.addEventListener('resize', () => {
            truchet.render(renderer.render.bind(renderer));
        })
    }

    inRange(n, min, max) {
        return ((n-min)*(n-max) <= 0);
    }

    render() {
        return (
            <div className='background'>
                <svg className='truchet-container' ref={this.target}/>
                <div className='text'>
                    Truchet.js
                </div>
                <div className='overlay'/>
            </div>
        );
    }
}