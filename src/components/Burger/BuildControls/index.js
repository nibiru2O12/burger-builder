import React, { Component } from 'react';

import classes from './build-controls.css'
import BuildControl from './BuildControl';


class BuildControls extends Component {
    render() {
        return (
            <div className={classes.BuildControls}>
                Controllers
                <BuildControl label="Meat"/>
            </div>
        );
    }
}

export default BuildControls;