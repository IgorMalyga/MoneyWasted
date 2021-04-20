import React, { useState } from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CreateWalletForm = ({ handleCreateWallet, currencies }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      current_money: '',
      paydayDate: '',
    },
    onSubmit: ({ name, currentMoney, paydayDate }) => {
      handleCreateWallet({ name, currentMoney, selectedCurrency, paydayDate });
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
        options={currencies}
        getOptionLabel={(option) => option.code}
        style={{ width: 300 }}
        onChange={(event, value) => {
          setSelectedCurrency(value.id);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Combo box"
            variant="outlined"
            value={selectedCurrency}
          />
        )}
      />
      <TextField
        id="paydayDate"
        label="paydayDate"
        type="date"
        defaultValue={new Date()}
        onChange={formik.handleChange}
        value={formik.values.paydayDate}
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
