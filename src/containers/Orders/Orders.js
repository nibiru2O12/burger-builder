import React, { Component } from 'react';

import classes from './Orders.css';
import axiosOrder  from '../../axios-instances/axios-order';
import Order from '../../components/Order/Order';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../UI/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders:[],
        isLoading:false
    }

    componentDidMount(){
        this.fetchOrders();
    }

    fetchOrders = () => {

        this.setState({isLoading:true});

        axiosOrder.get('/orders.json')
        .then(response => {
            this.setOrders(response.data);
        }).catch(err => this.setState({isLoading:false}));
    }

    setOrders = (json) => {

        let orders = Object.keys(json).map(order => {
            return {id:order,...json[order]};
        });
        this.setState({
            orders,isLoading:false
        })
    }

    render() {

        if(this.state.isLoading){
            return <Spinner />
        }

        let orders = this.state.orders.map(order => {
            return <Order key={order.id} order={order} />
        });

        return (
            <div className={classes.Orders}>
                {orders}
            </div>
        );
    }
}
export default withErrorHandler(Orders,axiosOrder);