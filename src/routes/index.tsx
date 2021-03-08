import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Todos from '../pages/Todos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/todos" component={Todos} />
  </Switch>
);

export default Routes;
