import React, { Component } from 'react';

import WithErrorHandler from '../../UI/withErrorHandler/withErrorHandler'; 
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls//BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../UI/Modal/Modal'
import ModalAsk from '../../UI/Modal/ModalAsk/ModalAsk';
import Spinner from '../../UI/Spinner/Spinner';
import axiosOrder from '../../axios-instances/axios-order';

const INGREDIENTS_PRICE={
    Meat:2,Cheese:2,Salad:3,Bacon:5
}

class BurgerBuilder extends Component {

    state={
      ingredients:null,
      totalPrice:0,
      purchasable:false,
      checkout:false,
      reset:false,
      isLoading:false
    }

    componentDidMount(){
        this.setState({isLoading:true,checkout:true});
        axiosOrder.get('/ingredients.json')
        .then(response => {
            this.setState({
                ingredients:response.data
            });
        })
        .then(res => this.setState({isLoading:false,checkout:false}))
        .catch(err => this.setState({isLoading:false,checkout:false}));
    }

    handleProceedOrder = () => {
        this.setState({isLoading:true});
        const {ingredients,totalPrice} = this.state;

        axiosOrder.post('/orders',{
            customer: {
                name:'rj',
                address:{
                    country:'philippines',
                    zip:'4114',
                    street:'peninsula st'
                },
                email:"robert.gagui@gmail.com",
                deliveryMethod:"COD"
            },ingredients,totalPrice
        })
        .then(response => this.setState({isLoading:false,checkout:false}))
        .catch(err => this.setState({isLoading:false,checkout:false}))
        
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
        
        let  orderElement = '';
        
        if(this.state.isLoading){
            orderElement=(<Spinner />);
        }else{
            orderElement=(
                <OrderSummary 
                        show={this.state.checkout}
                        ingredients={this.state.ingredients}
                        price = {this.state.totalPrice}
                        proceedOrder={this.handleProceedOrder}
                        cancelOrder={this.handleCancelOrder} />
            );
        }

        console.log(orderElement)
        
        return (

            
            <Aux>
                <Modal show={this.state.checkout} close={this.handleCloseModal}>
                    {orderElement}
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

export default WithErrorHandler(BurgerBuilder,axiosOrder);