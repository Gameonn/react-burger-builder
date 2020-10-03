import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className="NavigationItem">
            <NavigationItem link='/' exact>Burger Builder</NavigationItem>
            <NavigationItem link='/orders'>Orders</NavigationItem>
        </ul>
    );
}

export default navigationItems;