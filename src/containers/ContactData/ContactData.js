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
                validations:{
                    required:true
                },
                errMessages:null
                
            },
            country:{
                value:'',
                props:{
                    label:'Country',
                    name:'country',
                    type:"select",
                    option:[
                        {value:"",display:""},
                        {value:"ph",display:"Philippines"},
                        {value:"usa",display:"United State of America"},
                        {value:"ca",display:"Canada"},
                        {value:"sg",display:"Singapore"}
                    ],
                    sortby:"display"
                },
                validations:{
                    required:true
                },
                errMessages:[]
            },
            zip:{
                value:'',
                props:{
                    label:'ZIP CODE',
                    name:'zip',
                    type:"input",
                    placeholder:"ZIP CODE"
                },
                validations:{
                    minLength:4
                },
                errMessages:[]
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
                validations:{
                    required:true
                },
                errMessages:[]
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
                        {value:"",display:""},
                        {value:"cod",display:"COD"},
                        {value:"card",display:"CREDIT / DEBIT CARD"},
                        {value:"paypal",display:"Paypal"}
                    ],
                    sortby:null
                },
                validations:{
                    required:true
                }
            }

        } 
    }

     componentDidMount(){
        this.setState({ingredients:this.props.ingredients});
     }

     handleInputChange = ({target}) => {

        //create copy of order form
        const oform = {...this.state.orderForm};

        //change field valud
        oform[target.name].value = target.value;

        //get all errors
        oform[target.name].errMessages =  this.funcValidation(oform[target.name]);

        this.setState({orderForm:oform});

     }

     funcValidation = (field) => {

        let errMsg = [];

        // return true if no validation is setup
        if(!field.validations) return errMsg;

        //check all validation
        for(let v in field.validations){
            switch(v){
                case "required":
                    if(field.value==='') errMsg.push('is Required');
                    break;
                case "minLength":
                   if(field.value.length < field.validations[v]) 
                    {
                        errMsg.push(`Please enter atleast ${field.validations[v]} characters`);
                    }
                    break;
                case "maxLength":
                    if(field.value.length > field.validations[v]){
                        errMsg.push(`Please enter not exceeding ${field.validations[v]} characters`);
                    }
                    break;
                default:
            }
        }

        return errMsg;

     }

     handleSubmit = (e) => {

        e.preventDefault();

        let orderForm = {...this.state.orderForm}
        let newForm = {};

        let hasError = false;

        for( let o in orderForm){
            orderForm[o].errMessages = this.funcValidation(orderForm[o]);
            newForm[o]=orderForm[o].value ;
            
            if(orderForm[o].errMessages.length===0){
                console.log(orderForm[o].errMessages)
                hasError=true;
            }
            
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
            return <Input key={cust} 
                            {...orderForm[cust].props} 
                            value={orderForm[cust].value} 
                            error={orderForm[cust].errMessages}
                            onChange={this.handleInputChange} />
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