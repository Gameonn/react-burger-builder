import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo  from '../../Logo/Logo';
import './Toolbar.css';

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo height="80%" />
            <nav className="DesktopOnly">
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
        </header>
    );
}

export default toolbar;