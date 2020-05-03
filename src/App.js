import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import {Route, Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>  
         <Switch>
           <Route path="/" exact component={BurgerBuilder}></Route>
           <Route path="/checkout" component={Checkout}></Route>
           <Route path="/orders" component={Orders}></Route>
           <Route path="/auth" component={Auth}></Route>
         </Switch>
        </Layout>
      </div>
    );
  }
}
