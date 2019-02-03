import React from 'react';
import Truchet from 'truchet';
import BackgroundTile from './Background.tile';
import './Background.scss';

export default class Background extends React.PureComponent {

    constructor(props) {
        super(props);

        this.target = React.createRef();
    }

    componentDidMount() {
        const size = 80;
        const truchet = new Truchet(this.target.current, size, size);
        const random = (min, max) => min + Math.floor(Math.random() * (max - min));
        
        truchet.addTile('a', BackgroundTile);
        truchet.render((row, col) => ({
            id: 'a',
            rotate: [0, 90][random(0, 2)], // Randomly toggle between 0 and 90 degree rotation
            x: col * size,
            y: row * size,
        }));

        setInterval(() => {
            const {cols, rows} = truchet.getTileCount();
            truchet.render(random(1, rows - 1), random(1, cols - 1), prevProps => ({
                ...prevProps,
                rotate: prevProps.rotate === 0 ? 90 : 0,
            }));
        }, 500);
        
        window.addEventListener('resize', () => {
            truchet.render((row, col, prevProps) => ({
                id: 'a',
                rotate: typeof prevProps !== 'undefined' ? prevProps.rotate : [0, 90][random(0, 2)], // Only update when necessary
                x: col * size,
                y: row * size,
            }));
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