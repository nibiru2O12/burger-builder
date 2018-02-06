import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import classes from './Orders.css';
import axiosOrder  from '../../axios-instances/axios-order';
import Order from '../../components/Order/Order';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../UI/withErrorHandler/withErrorHandler';
import { Redirect } from 'react-router-dom';

class Orders extends Component {

    componentDidMount(){
        this.props.getOrders(this.props.token);
    }

    render() {

        if(!this.props.token){
            return <Redirect to={{
                                pathname: '/auth',
                                state: {
                                        from:`${this.props.match.url}`
                                        }
                                }} />
        }

        if(this.props.isLoading){
            return <Spinner />
        }

        let orders = this.props.orders ? this.props.orders.map(order => {
            return <Order key={order.id} order={order} />
        }) : null  ;
        return (
            <div className={classes.Orders}>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders : state.burger.orders,
        isLoading : state.burger.ordersLoading,
        token : state.auth.token
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getOrders : (token) => dispatch(actions.fetchOrders(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axiosOrder));