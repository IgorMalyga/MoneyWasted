import React from 'react';
import { withRouter } from 'react-router-dom';

import SigninForm from '../../components/Forms/SignIn';
import { axiosWrapp, setTokenInCookies } from '../../utils';
import { LOGIN } from '../../constants';
import { DASHBOARD } from '../../constants/routes';
import './styles.css';

const Landing = ({ history }) => {
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
  return (
    <div className="landing">
      <div className="centered-card">
        <SigninForm handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default withRouter(Landing);
