import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls//BuildControls';

const INGREDIENTS_PRICE={
    Meat:2,Cheese:2,Salad:3,Bacon:5
}

class BurgerBuilder extends Component {

    state={
      ingredients:{
        Meat:0,
        Cheese:0,
        Salad: 0,
        Bacon:0 
      },
      totalPrice:0
    }

    handleIncrementIngredient  = (type) =>{

        let ingredients = Object.assign(this.state.ingredients);
        ingredients[type]=ingredients[type] + 1;

        this.setState(prev=>{
            return {
                ingredients:ingredients,
                totalPrice: prev.totalPrice + INGREDIENTS_PRICE[type]
            }
        });
    }

    handleDecrementIngredient  = (type) =>{

        let ingredients = Object.assign(this.state.ingredients);

        if (ingredients[type]===0) return false ;

        ingredients[type]=ingredients[type] - 1;

        this.setState(prev=>{
            return {
                ingredients,
                totalPrice: prev.totalPrice - INGREDIENTS_PRICE[type]
            }
        });
    }
    
    render(){
        return (
            
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    addIngredient={this.handleIncrementIngredient}
                    decIngredient={this.handleDecrementIngredient} />
            </Aux>
        )
    }
}

export default BurgerBuilder;