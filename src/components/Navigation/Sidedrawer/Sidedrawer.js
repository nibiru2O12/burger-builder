import React, { Component } from 'react';

import classes from './Sidedrawer.css';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

class Sidedrawer extends Component {
    
    render() {

        let {show} = this.props;
        let showClass = show ? classes.Open : classes.Close;

        return (
            <Aux>
                <Backdrop show={show} onClick={this.props.toggle} />
                <div className={[classes.Sidedrawer,showClass].join(' ')}>
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
}

export default Sidedrawer;
