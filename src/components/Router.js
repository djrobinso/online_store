import React from 'react';
import {Switch, Route } from 'react-router-dom';
//import { IndexRoute, BrowserRouter, browserHistory} from 'react-router-dom';

import Home from './home';
import Cart from './cart';
import Login from './login';
import Sign_Up from './sign_up';

const Router = (props) => {
  return (

  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/cart' component={Cart} />
    <Route exact path='/login' component={Login} />
    <Route exact path='sign_up' component={Sign_Up} />
  </Switch>

 )
}

export default Router
