import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <p className="test">HOME ZI1OMEK</p>} />
        <Route path="/dashboard" component={() => <Dashboard />} />
      </Switch>
    </Router>
  );
};

export default Main;
