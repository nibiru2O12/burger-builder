import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout';
import Redirect from 'react-router-dom/Redirect';

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
              <Route path='/checkout'  component={Checkout} />
              <ProtectedRoute path='/orders' isAuth={this.props.isAuth}  component={Orders} />
              <Route path='/auth'  component={Auth} />
              <Route path='/logout'  component={Logout} />
              <Route path='/'  component={BurgerBuilder} />
              <Route render={()=> <h1>Page not found!</h1>} />
            </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const ProtectedRoute = (props) =>{

  return (
      props.isAuth 
       ? <Route {...props} />
       : <Redirect to={{
         pathname:'/auth',
         state:{from:props.path}
       }} />
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: state.auth.token !== null
  }
}
export default connect(mapStateToProps)(App);
