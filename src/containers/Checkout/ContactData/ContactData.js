import React, { Component } from 'react';
import Button from '../../../UI/Button/Button';

import classes from './ContactData.css';
import axiosOrder from '../../../axios-instances/axios-order';

class ContactData extends Component {
    state = { 
        customer: {
            name:'rj',
            address:{
                country:'philippines',
                zip:'4114',
                street:'peninsula st'
            },
            email:"robert.gagui@gmail.com",
            deliveryMethod:"COD"
        },
        ingredients:{},
        isLoading:false
     }

     componentDidMount(){
        this.setState({ingredients:this.props.ingredients});
     }

     handleContactChange = (e) => {
        const {target} = e;
        let customer = {...this.state.customer};

        customer[target.name]=target.value;

        this.setState({
            customer:customer
        });
     }

     handleAddressChange = (e) =>{
        const {target} = e;
        let address = {...this.state.customer.address};

        address[target.name]=target.value;

        this.setState({
            address:address
        });
     }

     handleConfirm = (e) =>{

        this.setState({isLoading:true});
        
        const {ingredients} = this.state;

        axiosOrder.post('/orders.json',{
            customer: this.state.customer,ingredients
        })
        .then(response => {
            this.setState({isLoading:true});
            console.log("data" , this.state )
        })
        .catch(err => this.setState({isLoading:false}))

        //prevent submiting form
        e.preventDefault();
     }

    render() {
        console.log(this.state);
        
        return (
            <div className={classes.ContactData}>
                <h4>Enter tour Contact Data</h4>
                <form>
                    <input type="text" name="name" 
                           onChange={e => this.handleContactChange(e)} 
                           placeholder='Enter yout name' />
                    <input type="email" name="email" 
                            onChange={e => this.handleContactChange(e)}
                            placeholder="something@email.com" />
                    <input type="text" name="street" />
                    <input type="text" name="postalCode" />
                    <Button btnType="Success" onClick={e => this.handleConfirm(e)}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;