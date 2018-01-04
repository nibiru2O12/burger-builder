import React, { Component } from 'react';

import classes from './build-control.css';

class BuildControl extends Component{
    render(){
        return  (
            <div className={classes.BuildControl} >
                <label>{this.props.label}</label>
                <button className={classes.Less}>Less</button>
                <button className={classes.More}>More</button>
            </div>
        )
    }
}

export default BuildControl;