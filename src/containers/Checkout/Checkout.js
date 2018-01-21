
import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{

    handleCancelCheckout = () =>{
        this.props.history.goBack();
    }

    handleContinueCheckout = () =>{
        this.props.history.replace('/checkout/contact-details');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients = {this.props.location.state.ingredients}
                    onCancel = {this.handleCancelCheckout}
                    onContinue = {this.handleContinueCheckout} />
            </div>
        );
    }
}

export default Checkout;