import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as authAction from '../../actions/authAction';

class Logout extends Component{

    componentDidMount(){
        console.log('did mount')
        this.props.logout();
    }

    render(){
        return(
            <Redirect to='/' />
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(authAction.logout())
    }
}

export default connect(null,mapDispatchToProps)(Logout);