import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Button from '../../UI/Button/Button';
import classes from './ContactData.css';
import Input from '../../UI/Input/Input';

class ContactData extends Component {
    state = { 
        orderForm: {
            name:{
                value:'asd',
                props:{
                    label:'Name',
                    name:'name',
                    type:'input',
                    placeholder:"Enter your name"
                },
                required:true
                
            },
            country:{
                value:'',
                props:{
                    label:'Country',
                    name:'country',
                    type:"select",
                    option:[
                        {value:"ph",display:"Philippines"},
                        {value:"usa",display:"United State of America"},
                        {value:"ca",display:"Canada"},
                        {value:"sg",display:"Singapore"}
                    ],
                    sortby:"display"
                },
                required:true
            },
            zip:{
                value:'',
                props:{
                    label:'ZIP CODE',
                    name:'zip',
                    type:"input",
                    placeholder:"ZIP CODE"
                }
            },
            address:{
                value:'',
                props:{
                    label:"Address",
                    name:'address',
                    type:"textarea",
                    rows:3,
                    placeholder:"Address"
                },
                required:true
            },
            email:{
                value:'',
                props:{
                    label:"Email",
                    name:'email',
                    type:"email",
                    placeholder:"YourEmail@something.com"
                }
            },
            paymentMethod:{
                value:"",
                props:{
                    label:"Payment Method",
                    name:"paymentMethod",
                    type:"select",
                    option:[
                        {value:"cod",display:"COD"},
                        {value:"card",display:"CREDIT / DEBIT CARD"},
                        {value:"paypal",display:"Paypal"}
                    ],
                    sortby:null
                }
            }

        } 
    }

     componentDidMount(){
        this.setState({ingredients:this.props.ingredients});
     }

     handleInputChange = (e) => {

        let input = {...this.state.orderForm};

        input[e.target.name].value = e.target.value;

        if(input[e.target.name].required && e.target.value===''){
            //check if field is required
            input[e.target.name].props.error = " is Required"
        }else{
            input[e.target.name].props.error = null;
        }

        this.setState({orderForm:input});

     }

     handleSubmit = (e) => {

        e.preventDefault();

        let orderForm = {...this.state.orderForm}
        let newForm = {};

        let hasError = false;

        for( let o in orderForm){

            if(orderForm[o].required && orderForm[o].value===''){
                //check if field is required
                orderForm[o].props.error = " is Required"
                hasError=true
            }
            newForm[o]=orderForm[o].value ;
        }

        if(hasError){
            this.setState({orderForm});
            return false
        }

        this.props.submitOrder(e,newForm);

    }

    render() {

        const {orderForm} = this.state;

        let inputs = Object.keys(orderForm).map(cust => {
            return <Input key={cust} value={orderForm[cust].value} {...orderForm[cust].props} onChange={this.handleInputChange} />
        });

        return (

            <div className={classes.ContactData}>
                
                <h4>Enter tour Contact Data</h4>

                <form onSubmit={e => this.handleSubmit(e)} >
                    {inputs}
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default withRouter(ContactData);