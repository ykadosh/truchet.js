import React from 'react';
import {Header, Body, Footer, Background} from './components';
import './App.scss';

export default class App extends React.PureComponent {

    render() {
        return (
            <div id='app'>
                <Background/>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}