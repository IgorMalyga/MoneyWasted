import React, { useState } from 'react';
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
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      currentMoney: '',
      paydayDate: '',
    },
    onSubmit: ({ name, currentMoney }) => {
      // props.handleSignUp(email, password1, password2);
      // add request to create wallet
      console.log(name, currentMoney, selectedCurrency);
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
        id="currency"
        options={CURRENCIES}
        getOptionLabel={(option) => option.code}
        style={{ width: 300 }}
        onChange={(event, value) => {
          setSelectedCurrency(value.code);
        }}
        renderInput={(params) => {
          console.log('aaaa', formik.values.currency);
          return (
            <TextField
              {...params}
              label="Combo box"
              variant="outlined"
              value={selectedCurrency}
              // onChange={(e) => {
              //   console.log(222222, e.target.value);
              //   formik.handleChange(e);
              // }}
            />
          );
        }}
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
