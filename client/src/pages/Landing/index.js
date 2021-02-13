import React from 'react';
// import Card from '@material-ui/core/Card';

import SigninForm from '../../components/Forms/SignIn';

import './styles.css';

const Landing = () => (
  <div className="landing">
    <div className="centered-card">
      <SigninForm />
    </div>
  </div>
);

export default Landing;
