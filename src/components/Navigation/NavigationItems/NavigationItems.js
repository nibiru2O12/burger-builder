import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItems.css';
import {connect} from 'react-redux';

class NavigationItems extends Component {

    render(){
        return (
            <ul className={classes.NavigationItems}>
                <NavigationItem href="/" show>Burger Builder</NavigationItem>
                <NavigationItem href="/orders" show={this.props.isAuthenticated} >Orders</NavigationItem>
                
                {!this.props.isAuthenticated 
                    ? <NavigationItem href="/auth" show>Authenticate</NavigationItem>
                    : <NavigationItem href="/logout" show>Logout</NavigationItem>
                }
                
            </ul>
        );
    }
}

const NavigationItem = (props) =>{
    if(!props.show){
        return null
    }
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.href} exact
                    activeClassName={classes.active}>{props.children}</NavLink>
        </li>
    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(NavigationItems);