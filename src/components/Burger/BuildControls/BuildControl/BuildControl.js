import React, { Component } from 'react';

import classes from './build-control.css';

class BuildControl extends Component{
    
    render(){

        const {label,type,disabled,addIngredient,decIngredient} = this.props;

        return  (

            <div className={classes.BuildControl} >
        
                <label>{label}</label>
                
                <button className={classes.Less}
                        onClick={()=> decIngredient(type)}
                        disabled={disabled} >Less</button>

                <button className={classes.More} 
                        onClick={()=> addIngredient(type)}>
                        More
                </button>
            
            </div>
        
        )
    }
}

export default BuildControl;