import React, { Component } from 'react';

import classes from './build-controls.css'
import BuildControl from './BuildControl/BuildControl';

class BuildControls extends Component {
   
    render() {

        const {ingredients} = this.props;
        let  controls =null;
        
        if(ingredients){
            controls = Object.keys(ingredients).map((key)=>{
                return {type:key,value:ingredients[key]};
            }).map((ing,i)=>{
                return (<BuildControl 
                            ingredient={ing} key={i} 
                            addIngredient={this.props.addIngredient}
                            decIngredient={this.props.decIngredient}
                            disabled={ ing['value'] > 0 ? false : true }/>)
            });
        }

        return (
            <div className={classes.BuildControls}>
                
                Total Price : {this.props.price}
                <div className={classes.Ingredients}>
                    {controls}
                </div>
                <button 
                    className={classes.OrderButton}
                    disabled={!this.props.purchasable}
                    onClick={this.props.checkout}>
                    ORDER NOW
                </button>
                <button className={classes.ResetButton} onClick={this.props.reset} disabled={!this.props.purchasable}>
                    Reset
                </button>
            </div>
        );
    }
}

export default BuildControls;