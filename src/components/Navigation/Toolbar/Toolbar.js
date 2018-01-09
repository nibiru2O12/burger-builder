
import React, { Component } from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

class Toolbar extends Component {

    render() {
        return (
            <header className={classes.Toolbar}>
                <DrawerToggle onClick={this.props.toggle} />
                <Logo />
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        );
    }
}

export default Toolbar;