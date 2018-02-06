import axiosOrder from '../axios-instances/axios-order';

export const NEW_ORDER = "NEW_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const ORDERS_LOADING = "ORDERS_LOADING";

export function addNewOrder(order){
    return{
        type:NEW_ORDER,
        order
    }
}

function retrievOrders(orders){
    return {
        type:GET_ORDERS,
        orders:orders
    }
}

function setOrders(json){

    let orders = Object.keys(json).map(order => {
        return {id:order,...json[order]};
    });
    return orders;
}

function orders_isLoading(value){
    return {
        type:ORDERS_LOADING,
        value
    }
}

export function fetchOrders(token=""){
    return (dispatch) => {
        dispatch(orders_isLoading(true));
        axiosOrder.get('/orders.json?auth=' + token )
                  .then(({data}) => {
                        dispatch(orders_isLoading(false))
                        return dispatch(retrievOrders(setOrders(data)));
                    })
                  .catch(err => {
                        console.log('error retrieving orders',err);
                        dispatch(orders_isLoading(false));
                  });
    }
}
