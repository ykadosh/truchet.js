import React from 'react';
import './Example.scss';

export default class Example extends React.PureComponent {

    constructor(props) {
        super(props);

        this.svg = React.createRef();
    }

    componentDidMount() {
        this.props.render(this.svg.current);
    }

    render() {
        const {code, render} = this.props;
        return (
            <div className='example'>
                <div className='result'><svg ref={this.svg}/></div>
                <div className='code'>
                    {code.trim()}
                </div>
            </div>
        );
    }
}