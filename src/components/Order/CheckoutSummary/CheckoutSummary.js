import React from 'react';

import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../../UI/Button/Button';

const CheckoutSummary = (props) => {
    const {ingredients,onCancel,onContinue} = props;
    console.log(props);
    return(
        <div className={classes.CheckoutSummary}>
            <h1> Eat EAT!</h1>
            <div style={{width:"300px",height:"300px",margin:"auto"}}>
                <Burger ingredients={ingredients} />
                <Button btnType="Danger" onClick={onCancel}>CANCEL</Button>
                <Button btnType="Success" onClick={onContinue}>CONTINUE</Button>
            </div>
        </div>
    );
}

export default CheckoutSummary;