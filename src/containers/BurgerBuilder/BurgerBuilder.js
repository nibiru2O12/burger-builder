import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls//BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../UI/Modal/Modal'
import ModalAsk from '../../UI/Modal/ModalAsk/ModalAsk';

const INGREDIENTS_PRICE={
    Meat:2,Cheese:2,Salad:3,Bacon:5
}

class BurgerBuilder extends Component {

    state={
      ingredients:{
        Meat:0,
        Cheese:0,
        Salad: 0,
        Bacon:0 
      },
      totalPrice:0,
      purchasable:false,
      checkout:false,
      reset:false
    }

    handleProceedOrder = () => {
        alert('you have confirmed your order');
    }

    handleCancelOrder = () => {
        alert('you have cancelled your order');
        this.handleCloseModal();
    }

    handleCheckout = () => {
        this.setState({checkout:true});
    }

    handleCloseModal = () => {
        this.setState({checkout:false});
    }

    updatePurchasableState () {

        const ing = {...this.state.ingredients};

        const sum = Object.keys(ing).map(key=>{
              return ing[key]
        }).reduce( (a,b) => a + b);

        this.setState({
            purchasable: (sum > 0) ? true : false
        });

    }

    handleToggleReset = () => {
        this.setState(prev => {
            return {reset:!prev.reset}
        });
    }

    handleResetAction = () => {
        let ingredients = {...this.state.ingredients};

        Object.keys(ingredients).forEach(key=>{
            ingredients[key]=0;
        });

        this.setState({
            ingredients : ingredients,
            totalPrice:0,purchasable:false
        });

        this.handleToggleReset();
    }

    handleIncrementIngredient  = (type) =>{
        let ingredients = Object.assign(this.state.ingredients);
        ingredients[type]=ingredients[type] + 1;

        this.setState(prev=>{
            return {
                ingredients:ingredients,    
                totalPrice: prev.totalPrice + INGREDIENTS_PRICE[type]
            }
        });

        this.updatePurchasableState();
    }

    handleDecrementIngredient  = (type) =>{

        let ingredients = Object.assign(this.state.ingredients);

        if (ingredients[type]===0) return false ;

        ingredients[type]=ingredients[type] - 1;

        this.setState(prev=>{
            return {
                ingredients,
                totalPrice: prev.totalPrice - INGREDIENTS_PRICE[type]
            }
        });

        this.updatePurchasableState();
    }
    
    render(){

        return (
            
            <Aux>

                <Modal show={this.state.checkout} close={this.handleCloseModal}>
                    <OrderSummary 
                        show={this.state.checkout}
                        ingredients={this.state.ingredients}
                        price = {this.state.totalPrice}
                        proceedOrder={this.handleProceedOrder}
                        cancelOrder={this.handleCancelOrder} />
                </Modal>
                
                <ModalAsk show ={this.state.reset} 
                          close ={this.handleToggleReset} 
                          no = {this.handleCloseModal} 
                          yes = {this.handleResetAction} >
                    Reset your burger ingredient?
                </ModalAsk>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    addIngredient={this.handleIncrementIngredient}
                    decIngredient={this.handleDecrementIngredient}
                    purchasable={this.state.purchasable}
                    checkout={this.handleCheckout}
                    reset = {this.handleToggleReset} />

            </Aux>
        )
    }
}

export default BurgerBuilder;