import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import rootReducer from './reducers';

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store= createStore(rootReducer,composeEnhacer(applyMiddleware(thunk)));
store.subscribe(()=>console.log('subscribe',store.getState()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
