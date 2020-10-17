import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className="NavigationItem">
            <NavigationItem link='/' exact>Burger Builder</NavigationItem>
            {props.isAuthenticated ? <NavigationItem link='/orders'>Orders</NavigationItem> : null }
            {!props.isAuthenticated
                ? <NavigationItem link='/auth'>Login</NavigationItem>
                : <NavigationItem link='/logout'>Logout</NavigationItem> }
        </ul>
    );
}

export default navigationItems;