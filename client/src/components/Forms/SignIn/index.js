import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';

const SigninForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
        {/* <span>Sign In</span> */}
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />

        <button type="submit" className="btn-grad">
          Submit
        </button>
      </form>
    </>
  );
};

export default SigninForm;
