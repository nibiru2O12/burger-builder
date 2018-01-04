import React, { Component } from 'react';
import './App.css';

import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
