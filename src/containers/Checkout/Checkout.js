
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';
import Spinner from '../../UI/Spinner/Spinner';
import axiosOrder from '../../axios-instances/axios-order';

class Checkout extends Component{

    state = {
        //ingredients:{},
        isLoading:false
    }

    componentDidMount(){

        const ingredients = this.props.location.state;

        if(ingredients){
            this.setState({
                ingredients:this.props.location.state.ingredients
            });
            return true;
        }

        this.props.history.replace('/');

    }

    handleCancelCheckout = () => {
        this.props.history.goBack();
    }

    handleContinueCheckout = () => {
        this.props.history.replace(`${this.props.location.pathname}/contact-details`);
    }


    handleSubmitOrder = (e,customer) =>{

        this.setState({isLoading:true});
        
        const {ingredients} = this.props;
        axiosOrder.post('/orders.json',{
            customer,ingredients
        })
        .then(response => {
            this.setState({isLoading:false});
            console.log("data" , this.state )
        })
        .catch(err => this.setState({isLoading:false}))

        alert('Thanks for ordering');

        this.props.history.replace('/');
        //prevent submiting form
        e.preventDefault();
     }


    render(){
        const {match} = this.props;

        if(this.state.isLoading){
            return <Spinner />
        }

        return(
            <div>
                <CheckoutSummary 
                    ingredients = {this.props.ingredients}
                    onCancel = {this.handleCancelCheckout}
                    onContinue = {this.handleContinueCheckout} />

                <Route path={`${match.url}/contact-details`} 
                        render={()=>(
                            <ContactData submitOrder={this.handleSubmitOrder} />
                        )}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.order.ingredients
    }
}
export default connect(mapStateToProps)(Checkout);