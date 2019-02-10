import React from 'react';
import GithubCorner from '../GithubCorner/GithubCorner';
import Logo from '../Logo/Logo';
import './Header.scss';

export default class Header extends React.PureComponent {

    render() {
        return (
            <header>
                <GithubCorner/>
            </header>
        );
    }
}