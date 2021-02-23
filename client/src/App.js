import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/dashboard';

import * as routes from './constants/routes';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path={routes.DASHBOARD}>
        <Dashboard />
      </Route>
      <Route path={routes.LANDING}>
        <Landing />
      </Route>
    </Switch>
  </Router>
);

export default App;
