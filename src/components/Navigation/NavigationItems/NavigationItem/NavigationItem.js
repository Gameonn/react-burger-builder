import React from 'react';
import './NavigationItem.css';

const navigationItems = (props) => {
    return (
        <li className="NavigationItem">
            <a href="/" className={props.active ? 'active': null} > {props.children} </a>
        </li>
    );
}

export default navigationItems;