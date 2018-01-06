import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './build-control.css';

class BuildControl extends Component{

    static propTypes = {
        ingredient : PropTypes.object,
        addIngredient : PropTypes.func,
        decIngredient : PropTypes.func
    }
    
    render(){

        const {ingredient,disabled,addIngredient,decIngredient} = this.props;
        let value = ingredient['value'];
        value = value === 0 ? null : `(x${value})`;

        return  (

            <div className={classes.BuildControl} >
        
                <label className={classes.Label}> {ingredient['type']}{value} </label>
                
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