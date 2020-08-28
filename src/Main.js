import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from '@/components';
import { history } from '@/helpers/history';
import { Auth, Dashboard } from '@/layout';
import { userRole } from '@/utils';
import { routes } from '@/routes';

const Main = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <PublicRoute restricted={true} exact path="/login" component={Auth} />
        <PublicRoute restricted={true} exact path="/" component={Auth} />
        <PrivateRoute exact component={Dashboard} path="/dashboard" />
        {routes.map((i, idx) => {
          if (i.roles.some((j) => j === userRole()))
            return <PrivateRoute key={idx} exact={i.exact} component={i.component} path={i.path} />;
        })}
        <Route path="*" render={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
