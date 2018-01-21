
import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{

    state = {
        ingredients:{}
    }

    componentDidMount(){

        const ingredients = this.props.location.state;

        if(ingredients){
            this.setState({
                ingredients:this.props.location.state.ingredients
            });
            return true;
        }

        //this.props.history.replace('/');

    }

    handleCancelCheckout = () =>{
        this.props.history.goBack();
    }

    handleContinueCheckout = () =>{
        this.props.history.replace(`${this.props.location.pathname}/contact-details`);
    }

    render(){
        const {match} = this.props;
        console.log(this.state);
        return(
            <div>
                <CheckoutSummary 
                    ingredients = {this.state.ingredients}
                    onCancel = {this.handleCancelCheckout}
                    onContinue = {this.handleContinueCheckout} />

                <Route path={`${match.url}/contact-details`} 
                        render={()=>(<ContactData ingredients={this.state.ingredients} />)}/>
            </div>
        );
    }
}

export default Checkout;