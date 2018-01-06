import React, { Component } from 'react';

import classes from './build-controls.css'
import BuildControl from './BuildControl/BuildControl';

class BuildControls extends Component {
   
    render() {

        const {ingredients} = this.props;
        const controls = Object.keys(ingredients).map((key)=>{
            return [key,ingredients[key]];
        }).map((ing,i)=>{
            return (<BuildControl 
                        label={ing[0]} type={ing[0]} key={i} 
                        addIngredient={this.props.addIngredient}
                        decIngredient={this.props.decIngredient}
                        disabled={ ing[1] > 0 ? false : true }/>)
        });

        return (
            <div className={classes.BuildControls}>
                Total Price : {this.props.price}
                {controls}
                <button 
                    className={classes.OrderButton}
                    disabled={!this.props.purchasable}>
                    ORDER NOW
                </button>
            </div>
        );
    }
}

export default BuildControls;