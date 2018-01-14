import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import './App.css';

import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './components/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/checkout' exact component={Checkout} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
