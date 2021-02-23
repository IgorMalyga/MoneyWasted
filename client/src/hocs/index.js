import React, { useEffect } from 'react';
import { getTokenFromCookies } from '../utils';

export const withAuth = (WrappedComponent) => (props) => {
  useEffect(() => {
    const token = getTokenFromCookies();
    console.log('token', token);
    if (token) {
      console.log('REQUEST VERIFY TOKEN');
    } else {
      console.log('REDIRECT');
    }
  }, []);
  return <WrappedComponent hello="hello" />;
};
