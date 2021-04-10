import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   signIn: {
//     color: 'blue',
//     cursor: 'pointer',
//   },
// }));
const CURRENCIES = [
  { id: 1, code: 'UAH' },
  { id: 2, code: 'USD' },
];
const CreateWalletForm = () => {
  console.log('CREATE WALLET111 FORM');
  const formik = useFormik({
    initialValues: {
      email: '',
      currentMoney: '',
      paydayDate: '',
    },
    onSubmit: ({ email, password1, password2 }) => {
      // props.handleSignUp(email, password1, password2);
      // add request to create wallet
      console.log(email, password1, password2);
    },
  });
  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <div
        className="centered-div"
        style={{ fontSize: '30px', fontFamily: 'Sans-serif' }}
      >
        Create new wallet
      </div>
      <TextField
        id="name"
        label="name"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        id="currentMoney"
        label="Current Money"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.currentMoney}
      />
      <Autocomplete
        id="combo-box-demo"
        options={CURRENCIES}
        getOptionLabel={(option) => option.code}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <TextField
        id="paydayDate"
        label="paydayDate"
        type="date"
        defaultValue={new Date()}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <button type="submit" className="btn-grad">
        Submit
      </button>
    </form>
  );
};

export default CreateWalletForm;
