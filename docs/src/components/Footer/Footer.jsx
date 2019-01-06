import React from 'react';
import Icon from '../Icon';
import Container from '../Container/Container';
import './Footer.scss';

export default class Footer extends React.PureComponent {
    render() {
        return (
            <Container>
                <footer>
                    <div className='user-actions'>
                        <a href='https://github.com/ykadosh/truchet.js'><Icon type={Icon.Types.GITHUB}/>Source</a>
                        <a href='https://codepen.io/collection/nYQyZY/'><Icon type={Icon.Types.CODEPEN}/>Pens</a>
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Create beautiful patterns with truchet.js')}&hashtags=truchetjs&url=https://github.com/ykadosh/truchet.js`}><Icon type={Icon.Types.TWITTER}/>Share</a>
                        <a href='https://www.npmjs.com/package/truchet'><Icon type={Icon.Types.NPM}/>Package</a>
                        <a href='https://unpkg.com/truchet'><Icon type={Icon.Types.UNPKG}/>UNPKG</a>
                    </div>
                    <div className='credits'>Developed with ☕ by Yoav Kadosh</div>
                </footer>
            </Container>
        );
    }
}