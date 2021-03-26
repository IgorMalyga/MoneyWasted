import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SigninForm from '../../components/Forms/SignIn';
import SignupForm from '../../components/Forms/SignUp';
import { axiosWrapp, setTokenInCookies } from '../../utils';
import { LOGIN } from '../../constants';
import { DASHBOARD } from '../../constants/routes';
import './styles.css';

const Landing = ({ history }) => {
  const [signUp, setSignUp] = useState(false);

  const handleLogin = (email, password) => {
    axiosWrapp
      .post(LOGIN, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          setTokenInCookies(response.data.token);
          history.push(DASHBOARD);
        }
      });
  };

  const handleSetSignUp = (value) => {
    setSignUp(value);
  };

  return (
    <div className="landing">
      <div className="centered-card">
        {signUp ? (
          <SignupForm handleSetSignUp={handleSetSignUp} />
        ) : (
          <SigninForm
            handleLogin={handleLogin}
            handleSetSignUp={handleSetSignUp}
          />
        )}
      </div>
    </div>
  );
};

export default withRouter(Landing);
