import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';

const SigninForm = (props) => {
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

        <button type="submit" className="btn-grad">
          Submit
        </button>
      </form>
    </>
  );
};

export default SigninForm;
