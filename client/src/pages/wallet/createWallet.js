import React from 'react';

import CreateWalletForm from '../../components/Forms/Wallet/createWalletForm';
import { withAuth } from '../../hocs';

const CreateWallet = () => {
  console.log(1111);

  return <CreateWalletForm />;
};

export default withAuth(CreateWallet);
