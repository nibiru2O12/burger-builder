import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger'
import BuildControls from '../../components/Burger/BuildControls';

class BurgerBuilder extends Component {
    render(){
        return (
            <Aux>
                <Burger />
                <BuildControls />>
            </Aux>
        )
    }
}

export default BurgerBuilder;