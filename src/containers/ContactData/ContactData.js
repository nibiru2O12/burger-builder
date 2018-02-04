import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Button from '../../UI/Button/Button';
import classes from './ContactData.css';
import Input from '../../UI/Input/Input';
import validateInputControls,{inputValidation} from '../../UI/Input/inputValidation';

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
        oform[target.name].errMessages =  inputValidation(oform[target.name]);

        this.setState({orderForm:oform});

     }


     handleSubmit = (e) => {

        e.preventDefault();

        const {newForm,hasError,values} = validateInputControls({
            ...this.state.orderForm
        })

        if(hasError){
            this.setState({newForm});
            return false
        }

        this.props.submitOrder(e,values);

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