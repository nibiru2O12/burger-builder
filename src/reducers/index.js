import {combineReducers} from 'redux';
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
            return {
                ...state, order : action.order
            }
        case actions.GET_ORDERS:
            let newState = { ...state, orders : [...action.orders] }
            console.log('newstate',newState)
            return  newState
            
        case actions.ORDERS_LOADING:
            return{
                ...state, ordersLoading:action.value
            }
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    burger : orderReducer
});
export default rootReducer;

