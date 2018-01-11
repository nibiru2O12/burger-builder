import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../../UI/Button/Button';

class OrderSummary extends Component{

    render(){
        const ingredients = Object.keys(this.props.ingredients)
        .map(key=>{
            let orderCount = this.props.ingredients[key]
            let ing = (
                orderCount === 0 ? null 
                : (<li key={key}> 
                        {key} {`(x${orderCount})`} 
                    </li>)
            );
            return ing;
        });

        return(
            <Aux>
            <h4>Order Summary</h4>
            <p>This is your burger's ingredients</p>
            <ul>
                {ingredients}
            </ul>
            <p><b><span>Total Price : </span> {this.props.price.toFixed(2)} </b></p>
            <p>Do you cofirm your order?</p>

            <Button btnType='Danger' onClick={this.props.cancelOrder}>CANCEL</Button>
            <Button btnType='Success' onClick={this.props.proceedOrder}>CONFIRM</Button>

        </Aux>
        );
    }
}

export default OrderSummary;