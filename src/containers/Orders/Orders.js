import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import classes from './Orders.css';
import axiosOrder  from '../../axios-instances/axios-order';
import Order from '../../components/Order/Order';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../UI/withErrorHandler/withErrorHandler';

class Orders extends Component {

    componentDidMount(){
        this.props.getOrders();
    }

    render() {
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
        isLoading : state.burger.ordersLoading

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getOrders : () => dispatch(actions.fetchOrders())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axiosOrder));