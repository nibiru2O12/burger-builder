import React, { Component } from 'react';
import {connect} from 'react-redux';

import classes from "./Layout.css";
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';


class Layout extends Component {

    state ={
        sideDrawerIsOpen:false
    }

    handleSidedrawerToggle = () =>{
        this.setState(prev=>{
            return {sideDrawerIsOpen:!prev.sideDrawerIsOpen}
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.handleSidedrawerToggle}/>
                <Sidedrawer toggle={this.handleSidedrawerToggle} 
                            show={this.state.sideDrawerIsOpen} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default (Layout);