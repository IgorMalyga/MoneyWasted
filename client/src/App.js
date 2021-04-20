import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useLocalObservable } from 'mobx-react';

import Landing from './pages/Landing';
import Dashboard from './pages/dashboard';
import CreateWallet from './pages/wallet/createWallet';
import Main from './Main';
import { StoreContext } from './storage';
import * as routes from './constants/routes';
import './App.css';

const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
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
        <Route path={routes.CREATE_WALLET} component={CreateWallet} />
      </Main>
    </Switch>
  </StoreProvider>
);

export default App;
