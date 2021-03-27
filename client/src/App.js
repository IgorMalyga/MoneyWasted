/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useLocalStore } from 'mobx-react';

import Landing from './pages/Landing';
import Dashboard from './pages/dashboard';
import Main from './Main';
import { StoreContext } from './storage';
import * as routes from './constants/routes';
import './App.css';

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    user: undefined,
    addUser: (user) => {
      store.user = user;
    },
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const App = (props) => (
  <StoreProvider>
    <Switch>
      <Route path={routes.LANDING}>
        <Landing />
      </Route>
      <Main {...props}>
        <Route path={routes.DASHBOARD} component={Dashboard} />
      </Main>
    </Switch>
  </StoreProvider>
);

export default App;
