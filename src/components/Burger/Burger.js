import React, { Component } from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burger extends Component {


    render() {

        const propsIng = this.props.ingredients
        let ingredients=null;
        
        if (propsIng){
            ingredients = Object.keys(propsIng).map(key=>{
                return [...Array(propsIng[key])].map((_,i) =>{
                    return <BurgerIngredient type={key} key={key+i} /> 
                })
            }).reduce((curr,next)=>{
                return curr.concat(next);
            },[]);
    
            if(ingredients.length===0){
                ingredients='Please select ingredients'
            }
        }
        

        return (
            <div className={classes.Burger}>
                <BurgerIngredient type='bread-top' />
                { ingredients } 
                <BurgerIngredient type='bread-bottom' />    
            </div>
        );
    }
}

export default Burger;