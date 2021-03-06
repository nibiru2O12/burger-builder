import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './burgerIngredient.css';

class BurgerIngredients extends Component {

    static propTypes = {
        type:PropTypes.string,
    }

    render() {
        let ingredients = '';

        switch (this.props.type) {
            case ('bread-top'):
                ingredients = (
                    <div className={classes.BreadTop} >
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                    )
                break;
            case ('bread-bottom'):
                ingredients = <div className={classes.BreadBottom}></div>
                break;
            case ('Meat'):
                ingredients = <div className={classes.Meat}></div>
                break;
            case ('Salad'):
                ingredients = <div className={classes.Salad}></div>
                break;
            case ('Bacon'):
                ingredients = <div className={classes.Bacon}></div>
                break;
            case ('Cheese'):
                ingredients = <div className={classes.Cheese}></div>
                break;
            default:
                console.log(this.props.type);
                ingredients = <div> case default</div>;
                break;
        }

        return ingredients;

    }
}

export default BurgerIngredients;