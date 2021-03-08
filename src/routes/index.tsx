import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Todos from '../pages/Todos';
import { useAuth } from '../hooks/Auth';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Switch>
      <Route path="/" exact component={Login}>
        {user ? (
          <Redirect to="/home" />
        ) : (
          <Route path="/" exact component={Login} />
        )}
      </Route>

      <Route path="/home" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/todos" component={Todos} />
    </Switch>
  );
};

export default Routes;
