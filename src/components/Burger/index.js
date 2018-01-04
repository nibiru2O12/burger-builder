import React, { Component } from 'react';

import classes from './Burger.css';
import Aux from '../../hoc/Aux';
import BurgerIngredient from './BurgerIngredient';

class Burger extends Component {
    render() {
        return (
            <div className={classes.Burger}>
                <div>Burger component</div>
                
                <BurgerIngredient type='bread-top' />
                <BurgerIngredient type='meat' />   
                <BurgerIngredient type='salad' />    
                <BurgerIngredient type='bread-bottom' />    
            </div>
        );
    }
}

export default Burger;