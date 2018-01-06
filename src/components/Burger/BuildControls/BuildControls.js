import React, { Component } from 'react';

import classes from './build-controls.css'
import BuildControl from './BuildControl/BuildControl';

class BuildControls extends Component {
   
    render() {

        const {ingredients} = this.props;
        const controls = Object.keys(ingredients).map((key)=>{
            return {type:key,value:ingredients[key]};
        }).map((ing,i)=>{
            return (<BuildControl 
                        ingredient={ing} key={i} 
                        addIngredient={this.props.addIngredient}
                        decIngredient={this.props.decIngredient}
                        disabled={ ing['value'] > 0 ? false : true }/>)
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