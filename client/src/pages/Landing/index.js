import React from 'react';

import SigninForm from '../../components/Forms/SignIn';
import { axiosWrapp, setTokenInCookies } from '../../utils';
import { LOGIN } from '../../constants';
import './styles.css';

const Landing = () => {
  const handleLogin = (email, password) => {
    console.log(email, password);
    axiosWrapp
      .post(LOGIN, {
        email,
        password,
      })
      .then((response) => {
        setTokenInCookies(response.data.token);
      });
  };
  return (
    <div className="landing">
      <div className="centered-card">
        <SigninForm handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Landing;
