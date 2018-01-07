
import React, { Component } from 'react';

import classes from './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <header className={classes.Toolbar}>
                <div>Menu</div>
                <div>Logo</div>
                <nav>....</nav>
            </header>
        );
    }
}

export default Toolbar;