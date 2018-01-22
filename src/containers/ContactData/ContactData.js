import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Button from '../../UI/Button/Button';
import classes from './ContactData.css';
import Input from '../../UI/Input/Input';

class ContactData extends Component {
    state = { 
        customer: {
            name:{
                value:'',
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
                    type:"input",
                    placeholder:"Country"
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
            street:{
                value:'',
                props:{
                    label:"Street",
                    name:'street',
                    type:"input",
                    placeholder:"Street"
                },
                required:true
            },
            email:{
                value:'',
                props:{
                    label:"Email",
                    name:'email',
                    type:"email",
                    placeholder:"Your Email"
                }
            }
        } 
    }

     componentDidMount(){
        this.setState({ingredients:this.props.ingredients});
     }

     handleFormChanged = (e) => {

        let input = {...this.state.customer};

        input[e.target.name].value = e.target.value;

        this.setState({customer:input});

     }

    render() {

        let inputs = Object.keys(this.state.customer).map(cust => {
            return <Input key={cust}  {...this.state.customer[cust].props} onChange={this.handleFormChanged} />
        });

        return (

            <div className={classes.ContactData}>
                
                <h4>Enter tour Contact Data</h4>

                <form>
                
                    {inputs}
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