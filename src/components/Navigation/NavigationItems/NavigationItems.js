import React from 'react';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem href="">Item 1</NavigationItem>
            <NavigationItem href="">Item 2</NavigationItem>
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