import React, { Component } from 'react';

import classes from "./Layout.css";
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    render() {
        console.log('class',classes.content)
        
        return (
            <Aux>
                <Toolbar />
                <Sidedrawer />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;