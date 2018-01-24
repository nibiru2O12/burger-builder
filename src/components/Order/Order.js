import React from 'react';

import classes from './Order.css';

const Order = (props) =>{
    const {id,ingredients,customer} = props.order;
    
    let ingredient_list = [];
    
    if(ingredients){
         Object.keys(ingredients).map(ingr => {
            if(ingredients[ingr]>0){
                ingredient_list.push({
                    name:ingr,
                    amount: ingredients[ingr]
                });
            }
        });
    }
    let ingredient_output = ingredient_list.map(ingr => {
        return (
            <span key={ingr.name} style={{
                textTransform:"capitalize",
                display:"inline-block",
                margin:"0 8px",
                border:"1px solid gray",
                padding:"5px"
            }} >
                {`${ingr.name} (${ingr.amount})`}
            </span>
        );
    });

    
    return (
        <div className={classes.Order}>
            <p>Ingredients : {ingredient_output}</p> 
            <p>Price : <strong>USD</strong> 0.0 </p>
            <p>Customer : <strong>{customer.name}</strong></p>
        </div>
    );
}

export default Order;