import React from 'react';
import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients)
                        .map(key=>{
                            let orderCount = props.ingredients[key]
                            let ing = (
                                orderCount === 0 ? null 
                                : (<li key={key}> 
                                        {key} {`(${orderCount}x)`} 
                                    </li>)
                            );
                            return ing;
                        });

    return (
        <Aux>
            <h4>Order Summary</h4>
            <p>This is your burger's ingredients</p>
            <ul>
                {ingredients}
            </ul>
            <p>Do you cofirm your order?</p>
        </Aux>
    );
}
export default OrderSummary;