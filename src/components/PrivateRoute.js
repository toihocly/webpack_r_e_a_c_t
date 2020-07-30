import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '@/utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        )
      }
    />
  );
};

export { PrivateRoute };
