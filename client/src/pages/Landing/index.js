import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SigninForm from '../../components/Forms/SignIn';
import SignupForm from '../../components/Forms/SignUp';
import { axiosWrapp, setTokenInCookies } from '../../utils';
import { LOGIN, SIGNUP } from '../../constants';
import { DASHBOARD } from '../../constants/routes';
import { StoreContext } from '../../storage';
import './styles.css';

const Landing = ({ history }) => {
  const store = React.useContext(StoreContext);
  const [signUp, setSignUp] = useState(false);

  const handleLogin = (email, password) => {
    axiosWrapp()
      .post(LOGIN, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          store.addUser(response.data.user);
          setTokenInCookies(response.data.token);
          history.push(DASHBOARD);
        }
      });
  };

  const handleSetSignUp = (value) => {
    setSignUp(value);
  };

  const handleSignUp = async (email, password1, password2) => {
    axiosWrapp
      .post(SIGNUP, { email, password1, password2 })
      .catch((error) => {
        console.log(error.response);
      })
      .then((response) => {
        if (response.status === 201) {
          handleSetSignUp(false);
        } else {
          console.log('Oops, something went wrong :('); // TODO add handling for another response status codes
        }
      });
  };

  return (
    <div className="landing">
      <div className="centered-card">
        {signUp ? (
          <SignupForm
            handleSetSignUp={handleSetSignUp}
            handleSignUp={handleSignUp}
          />
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
