import React from 'react';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem href="">Burger Builder</NavigationItem>
            <NavigationItem href="">Checkout</NavigationItem>
        </ul>
    );
}

const NavigationItem = (props) =>{
    return (
        <li className={classes.NavigationItem}>
            <a href={props.href}>{props.children}</a>
        </li>
    );
}

export default NavigationItems;