import React, { Component } from 'react';

import classes from './build-control.css';

class BuildControl extends Component{
    render(){
        return  (
            <div className={classes.BuildControl} >
                <label>{this.props.label}</label>
                <button className={classes.Less}
                        onClick={()=> this.props.decIngredient(this.props.type)}>Less</button>
                <button className={classes.More} 
                        onClick={()=>this.props.addIngredient(this.props.type)}>More</button>
            </div>
        )
    }
}

export default BuildControl;