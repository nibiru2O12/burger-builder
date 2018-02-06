import * as actions from '../actions';

const inititalState = {
    order : {
        ingredients:[],
        price:0
    },
    orders : null,
    ordersLoading:false

}

function orderReducer(state=inititalState,action) {
    switch(action.type){
        case actions.NEW_ORDER:
            return { ...state, order : action.order }
        case actions.GET_ORDERS:
            return   { ...state, orders : [...action.orders] }
        case actions.ORDERS_LOADING:
            return { ...state, ordersLoading:action.value }
        default:
            return state;
    }

}

export default orderReducer;

