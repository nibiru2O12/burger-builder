import React, { Component } from 'react';

import classes from './build-control.css';

class BuildControl extends Component{
    
    render(){

        const {ingredient,disabled,addIngredient,decIngredient} = this.props;
        let value = ingredient['value'];
        value = value === 0 ? null : `(${value}x)`;

        return  (

            <div className={classes.BuildControl} >
        
                <label> {ingredient['type']}{value} </label>
                
                <button className={classes.Less}
                        onClick={()=> decIngredient(ingredient['type'])}
                        disabled={disabled} >Less</button>

                <button className={classes.More} 
                        onClick={()=> addIngredient(ingredient['type'])}>
                        More
                </button>
            
            </div>
        
        )
    }
}

export default BuildControl;