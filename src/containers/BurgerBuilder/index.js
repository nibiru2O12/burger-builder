import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger'
import BuildControls from '../../components/Burger/BuildControls';

class BurgerBuilder extends Component {

    state={
      ingredients:{
        Meat:0,
        Cheese:0,
        Salad: 0,
        Bacon:0 
      }
    }

    handleIncrementIngredient  = (type) =>{

        let ingredients = Object.assign(this.state.ingredients);


        ingredients[type]=ingredients[type] + 1;

        this.setState({
            ingredients:ingredients
        });

        console.log('new state:',ingredients)
    }

    handleDecrementIngredient  = (type) =>{

        let ingredients = Object.assign(this.state.ingredients);

        if(ingredients[type]===0){
            return false
        }
        
        ingredients[type]=ingredients[type] - 1;

        this.setState({
            ingredients:ingredients
        });

        console.log('new state:',ingredients)
    }
    
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredients={this.state.ingredients}
                    addIngredient={this.handleIncrementIngredient}
                    decIngredient={this.handleDecrementIngredient} />
            </Aux>
        )
    }
}

export default BurgerBuilder;