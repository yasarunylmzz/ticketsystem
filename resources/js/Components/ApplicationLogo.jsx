import React from 'react';
import logo from '../img/logo3.webp';

export default function ApplicationLogo(props) {
    return (
        <>
            <img src={logo} alt="Logo" {...props} />
        </>
    );
}
