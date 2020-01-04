import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Login from '../../pages/Login/Login';
import Authentication from '../../components/Authentication/Authentication';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="*" component={Authentication} />
      </Switch>
    </Router>
  );
};

export default Main;
