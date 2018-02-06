import {combineReducers} from 'redux';

import authReducer from './authReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    burger : orderReducer,
    auth : authReducer
});

export default rootReducer;

