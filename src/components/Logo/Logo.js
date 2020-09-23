import React from 'react';
import './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div>
            <img src={burgerLogo} alt="Burger King" />
        </div>
    );
}

export default logo;