import React, { useState, useEffect } from 'react';

import CreateWalletForm from '../../components/Forms/Wallet/createWalletForm';
import { withAuth } from '../../hocs';
import { axiosWrapp } from '../../utils';
import { WALLETS, CURRENCIES } from '../../constants/index';
import { DASHBOARD } from '../../constants/routes';

const CreateWallet = ({ history }) => {
  const [currencies, setCurrencies] = useState(null);
  useEffect(() => {
    axiosWrapp()
      .get(CURRENCIES)
      .then((response) => {
        setCurrencies(response.data);
      });
  }, []);
  const handleCreateWallet = (data) => {
    axiosWrapp()
      .post(WALLETS, {
        name: data.name,
        current_money: data.currentMoney,
        payday_date: data.paydayDate,
        currency: data.selectedCurrency,
      })
      .then((response) => {
        console.log(response);
        history.push(DASHBOARD);
      });
  };
  return (
    <CreateWalletForm
      handleCreateWallet={handleCreateWallet}
      currencies={currencies}
    />
  );
};

export default withAuth(CreateWallet);
