import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import './App.css';

import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import asyncComponent from './hoc/AsyncComponent';
import Checkout from './containers/Checkout/Checkout';

/*
const Checkout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
});
*/
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
            <Switch>
              <Route path='/checkout' exact component={Checkout} />
              <Route path='/' exact  component={BurgerBuilder} />
              <Route render={()=> <h1>Page not found!</h1>} />
            </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
