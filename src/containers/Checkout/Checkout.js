
import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{

    state={
        ingredients : {
            Salad:1
        }
    }

    handleCancelCheckout = () =>{
        this.props.history.goBack();
    }

    handleContinueCheckout = () =>{
        alert('continue checkout');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients = {this.state.ingredients}
                    onCancel = {this.handleCancelCheckout}
                    onContinue = {this.handleContinueCheckout} />
            </div>
        );
    }
}

export default Checkout;