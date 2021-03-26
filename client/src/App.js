/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/dashboard';
import Main from './Main';

import * as routes from './constants/routes';
import './App.css';

const App = (props) => (
  <Switch>
    <Route path={routes.LANDING}>
      <Landing />
    </Route>
    <Main {...props}>
      <Route path={routes.DASHBOARD} component={Dashboard} />
    </Main>
  </Switch>
);

export default App;
