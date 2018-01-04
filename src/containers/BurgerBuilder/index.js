import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger'
import BuildControls from '../../components/Burger/BuildControls';

class BurgerBuilder extends Component {

    state={
      ingredients:{
        Meat:1,
        Cheese:1,
        Salad: 2,
        Bacon:1 
      }
    }
    
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredients={this.state.ingredients} />
            </Aux>
        )
    }
}

export default BurgerBuilder;