import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Button from '../../UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = { 
        customer: {
            name:'',
            address:{
                country:'',
                zip:'',
                street:''
            },
            email:"",
            deliveryMethod:"COD"
        } 
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

    render() {

        return (
            <div className={classes.ContactData}>
                
                <h4>Enter tour Contact Data</h4>
                <form>
                    <input type="text" 
                            name="name" 
                            placeholder='Enter yout name'
                            onChange={e => this.handleContactChange(e)} 
                            value={this.state.customer.name} />
                    <input type="email" 
                            name="email" 
                            placeholder="something@email.com" 
                            onChange={e => this.handleContactChange(e)}
                            value={this.state.customer.email} />
                    <input type="text" 
                            name="street"
                            value={this.state.customer.address.street} />
                    <input type="text" 
                            name="zip"
                            value={this.state.customer.address.zip} />
                    <Button btnType="Success" 
                            onClick={(e) => {
                                this.props.submitOrder(e,this.state.customer);
                                e.preventDefault();
                            }}>
                            ORDER
                    </Button>
                </form>
            </div>
        );
    }
}

export default withRouter(ContactData);