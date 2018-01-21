import React, { Component } from 'react';
import Button from '../../../UI/Button/Button';

import classes from './ContactData.css';

class ContactData extends Component {
    state = { 
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        }
     }
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter tour Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder='Enter yout name' />
                    <input type="email" name="email" placeholder="something@email.com" />
                    <input type="text" name="address.street" />
                    <input type="text" name="address.postalCode" />
                    <Button btnType="Succes">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;