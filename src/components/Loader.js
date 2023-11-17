import React from 'react';
import loaderGif from '../assets/loader2.gif';
import './Loader.css'

const Loader = () => {
    const imageStyle = {
        width: '240px', // Defina o tamanho desejado
        height: 'auto', // Mantém a proporção original
    };

    return (
        <div className="loaderContainer">
            <img className={'loader'} src={loaderGif} style={imageStyle} alt="Loading..." />
        </div>
    );
};

export default Loader;
