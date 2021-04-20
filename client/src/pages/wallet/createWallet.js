import React from 'react';

import CreateWalletForm from '../../components/Forms/Wallet/createWalletForm';
import { withAuth } from '../../hocs';
import { axiosWrapp } from '../../utils';
import { WALLETS } from '../../constants/index';

const CreateWallet = () => {
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
      });
  };
  return <CreateWalletForm handleCreateWallet={handleCreateWallet} />;
};

export default withAuth(CreateWallet);
