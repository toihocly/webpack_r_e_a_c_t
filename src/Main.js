import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from '@/components';
import { history } from '@/helpers/history';
import imagename from '@/images/imagename.jpg';
import CsvData from '@/mycsv.csv';
import { Auth, Dashboard } from '@/layout';

const Home = () => {
  return <Redirect to={'/login'} />;
  return (
    <div>
      <h2>DAY LA HOME</h2>
    </div>
  );
};

const Main = (props) => {
  console.log('CsvData : ', CsvData);
  const basicCode = (
    <div>
      <p className="hello-text">Hello from react! Toi da build dc ban roi</p>s
      <p>
        <img src={imagename} alt="Image name" />
      </p>
    </div>
  );
  return (
    <>
      {/* {basicCode} */}
      <Router history={history}>
        <Switch>
          <PublicRoute restricted={true} exact path="/login" component={Auth} />
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          {/* <Route path="*" render={() => <h1>Page not found</h1>} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default Main;
