import React from 'react';
import './Toolbar.css';
import Logo  from '../../Logo/Logo';

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>Menu</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    );
}

export default toolbar;