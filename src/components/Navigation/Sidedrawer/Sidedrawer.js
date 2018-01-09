import React from 'react';

import classes from './Sidedrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Sidedrawer = (props) => {
    return (
        <div className={classes.Sidedrawer}>
           <div className={classes.Logo}>
            <Logo />
           </div>
           <nav>
            <NavigationItems />
           </nav>
        </div>
    );
}

export default Sidedrawer;