import React from 'react';
import {Header, Body, Footer} from './components';
import './App.scss';

export default class App extends React.PureComponent {
    
    render() {
        return (
            <div id='app'>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}