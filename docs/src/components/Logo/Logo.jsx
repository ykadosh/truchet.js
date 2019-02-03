import React from 'react';
import Truchet from 'truchet';
import LogoTile from './Logo.tile';
import './Logo.scss';

export default class Logo extends React.PureComponent {

    constructor(props) {
        super(props);

        this.target = React.createRef();
    }

    componentDidMount() {
        const size = 40;
        const truchet = new Truchet(this.target.current, size, size);
        const random = (min, max) => min + Math.floor(Math.random() * (max - min));
        const rotate = [
            [0, 3],
            [2, 2],
            [2, 3],
            [3, 0],
            [3, 2],
            [3, 3],
            [3, 4],
            [4, 3],
        ];
        
        truchet.addTile('a', LogoTile);
        truchet.render((row, col) => ({
            id: 'a',
            rotate: rotate.find(([r, c]) => r === row && c == col) ? 90 : 0,
            x: col * size,
            y: row * size,
        }));

        // setInterval(() => {
        //     const {cols, rows} = truchet.getTileCount();
        //     truchet.render(random(1, rows - 1), random(1, cols - 1), prevProps => ({
        //         ...prevProps,
        //         rotate: prevProps.rotate === 0 ? 90 : 0,
        //     }));
        // }, 500);
    }

    render() {
        return (
            <div className='truchet-logo-container container'>
                <svg className='truchet-logo' ref={this.target}/>
                <div className='truchet-title'>
                    <h1>Truchet.js</h1>
                    <h2>Performantly Render Tile Patterns</h2>
                </div>
            </div>
        );
    }
}