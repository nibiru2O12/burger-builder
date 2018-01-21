import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItems.css';


const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem href="/">Burger Builder</NavigationItem>
            <NavigationItem href="/orders">Orders</NavigationItem>
        </ul>
    );
}

const NavigationItem = (props) =>{
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.href} exact
                    activeClassName={classes.active}>{props.children}</NavLink>
        </li>
    );
}

export default NavigationItems;