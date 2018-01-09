import React from 'react';

import classes from './Sidedrawer.css';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const Sidedrawer = (props) => {

    return (
        <Aux >
            <Backdrop />
            <div className={classes.Sidedrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
            </div>
        </Aux>
        
    );
}

export default Sidedrawer;