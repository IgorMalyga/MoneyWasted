/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  signIn: {
    color: 'blue',
    cursor: 'pointer',
  },
}));

const SignupForm = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password1: '',
      password2: '',
    },
    onSubmit: ({ email, password1, password2 }) => {
      props.handleRegister(email, password1, password2);
    },
  });

  return (
    <>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div
          className="centered-div"
          style={{ fontSize: '30px', fontFamily: 'Sans-serif' }}
        >
          Sign Up
        </div>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          id="password1"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <TextField
          id="password2"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <span>
          Already have account?
          {' '}
          <span
            onClick={() => props.handleSetSignUp(false)}
            className={classes.signIn}
          >
            Sign in!
          </span>
        </span>
        <button type="submit" className="btn-grad">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignupForm;
