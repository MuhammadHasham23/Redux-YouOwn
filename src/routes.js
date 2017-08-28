import {Route,IndexRoute,Router} from 'react-router';
import Login from './components/login.js';
import App from './components/App.js'
import Home from'./components/home.js';
import Display from'./components/display.js';
import Dashboard from'./components/dashboard.js';
import requireAuth from './components/require_authentication.js';
import React from 'react';
export default (
    <Route path="/" component={App} >
      <IndexRoute component={Login}/>
      <Route path="home" component={requireAuth(Home)}></Route>
      <Route path="display" component={requireAuth(Display)}></Route>
      <Route path="dashboard" component={requireAuth(Dashboard)}></Route>
    </Route>
)
