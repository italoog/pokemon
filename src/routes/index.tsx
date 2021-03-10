import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Todos from '../pages/Todos';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/todos" component={Todos} />
      <Route path="/home" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  );
};

export default Routes;
