import React from 'react';
import Icon from '../Icon';
import './Footer.scss';

export default class Footer extends React.PureComponent {
    render() {
        return (
            <footer>
                <div className='user-actions'>
                    <a href=''><Icon type={Icon.Types.GITHUB}/>Source</a>
                    <a href=''><Icon type={Icon.Types.CODEPEN}/>Pens</a>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('truchet.js is incredible!')}&hashtags=truchetjs&url=https://github.com/`}><Icon type={Icon.Types.TWITTER}/>Share</a>
                </div>
                <div className='credits'>Developed with ☕ by Yoav Kadosh</div>
            </footer>
        );
    }
}