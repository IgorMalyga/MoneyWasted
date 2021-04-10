import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { getTokenFromCookies, axiosWrapp } from '../utils';
import { VERIFY_TOKEN } from '../constants';
import { StoreContext } from '../storage';
import { LANDING } from '../constants/routes';

export const withAuth = (WrappedComponent) => withRouter((props) => {
  const store = React.useContext(StoreContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const verifyToken = async () => {
    const token = getTokenFromCookies();
    if (token) {
      try {
        const response = await axiosWrapp().post(VERIFY_TOKEN, {
          token,
        });
        if (response.data.token) {
          setLoggedIn(true);
          if (!store.user) {
            store.addUser(response.data.user);
          }
        } else {
          setLoggedIn(false);
        }
      } catch {
        props.history.push(LANDING);
      }
    } else {
      setLoggedIn(false);
      props.history.push(LANDING);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  if (loggedIn) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  }
  return null;
});
