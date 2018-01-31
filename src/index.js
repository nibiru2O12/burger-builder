import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from './App';
import rootReducer from './reducers';

const store= createStore(rootReducer);
store.subscribe(()=>console.log(store.getState()));
store.dispatch({
    type:"NEW_ORDER",
    order:{
        ingredients:[1,2,3],
        price:2
    }
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
