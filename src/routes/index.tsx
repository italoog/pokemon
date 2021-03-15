import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Todos from '../pages/Todos';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/search" component={Search} isPrivate />
      <Route path="/todos" component={Todos} isPrivate />
    </Switch>
  );
};

export default Routes;
