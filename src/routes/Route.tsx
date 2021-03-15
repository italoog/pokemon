import React from 'react';
import {
  Router as ReactDOMRoute,
  RouterProps as ReactDOMRoutProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

interface RouterProps extends ReactDOMRoutProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function logged(user: string | undefined): boolean {
  return user !== undefined;
}

const Route: React.FC<RouterProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  const isLogged = logged(user);

  console.log(isPrivate);
  console.log(isLogged);
  console.log(user);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
