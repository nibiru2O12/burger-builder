import React, { Component } from 'react';

import classes from './build-controls.css'
import BuildControl from './BuildControl/BuildControl';


class BuildControls extends Component {
   
    render() {

        const controls = Object.keys(this.props.ingredients).map((key)=>{
            return key;
        });

        return (
            <div className={classes.BuildControls}>
                Total Price : {this.props.price}
                {
                    controls.map((ctr,i)=>{
                        return <BuildControl 
                                    label={ctr} 
                                    type={ctr}
                                    key={i} 
                                    addIngredient={this.props.addIngredient}
                                    decIngredient={this.props.decIngredient}/>
                    })
                }
            </div>
        );
    }
}

export default BuildControls;