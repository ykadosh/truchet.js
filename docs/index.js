import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './src/style/root.scss';

ReactDOM.hydrate(
    <App/>,
    document.body
);