import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { getTokenFromCookies, axiosWrapp } from '../utils';
import { VERIFY_TOKEN } from '../constants';
import { LANDING } from '../constants/routes';

export const withAuth = (WrappedComponent) => () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = getTokenFromCookies();
    if (token) {
      axiosWrapp
        .post(VERIFY_TOKEN, {
          token,
        })
        .then((response) => {
          if (response.user) {
            setLoggedIn(true);
          }
        });
    } else {
      setLoggedIn(false);
    }
  }, []);

  return loggedIn ? (
    <WrappedComponent hello="hello" />
  ) : (
    <Redirect to={LANDING} />
  );
};
