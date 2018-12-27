import React from 'react';
import Paths from './Icon.paths';

export default ({type, alt}) => (
    <svg viewBox='0 0 1024 1024' className={`icon icon-${type.toLowerCase()}`} alt={alt}>
        <path d={Paths[type]}/>
    </svg>
);