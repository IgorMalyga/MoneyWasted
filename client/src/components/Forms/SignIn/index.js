/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  signUp: {
    color: 'blue',
    cursor: 'pointer',
  },
}));

const SigninForm = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      props.handleLogin(email, password);
    },
  });

  return (
    <>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div
          className="centered-div"
          style={{ fontSize: '30px', fontFamily: 'Sans-serif' }}
        >
          Sign In
        </div>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <span>
          Don`t have account?
          {' '}
          <span
            onClick={() => props.handleSetSignUp(true)}
            className={classes.signUp}
          >
            Sign up!
          </span>
        </span>
        <button type="submit" className="btn-grad">
          Submit
        </button>
      </form>
    </>
  );
};

export default SigninForm;
