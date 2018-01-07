
import React, { Component } from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

class Toolbar extends Component {
    render() {
        return (
            <header className={classes.Toolbar}>
                <div>Menu</div>
                <Logo />
                <nav>....</nav>
            </header>
        );
    }
}

export default Toolbar;