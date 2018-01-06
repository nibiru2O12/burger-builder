import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from "./Layout.css";

class Layout extends Component {
    render() {
        console.log('class',classes.content)
        
        return (
            <Aux>
                <div>Navigation ..</div>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;