import {combineReducers} from 'redux';
import * as actions from '../actions';

const inititalState = {
    order : {
        ingredients:[],
        price:0
    }
}

function orderReducer(state=inititalState,action) {

    switch(action.type){
        case actions.NEW_ORDER:
            return {
                ...state, order : action.order
            }
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    burger : orderReducer
});
export default rootReducer;

