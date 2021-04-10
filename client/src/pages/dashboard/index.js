import React, { useState, useEffect } from 'react';

import { axiosWrapp } from '../../utils';
import { withAuth } from '../../hocs';

import { WALLETS } from '../../constants/index';

/* eslint-disable */
const Dashboard = (props) => {
  const [wallets, setWallets] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axiosWrapp()
      .get(WALLETS)
      .catch((error) => {
        setErrors(error.response);
      })
      .then((response) => {
        console.log(response);
        if (response.data.length) {
          setWallets(response.data);
        }
      });
  }, []);

  return (
    <>
      {wallets ? (
        <div>
          {wallets.map((wallet) => {
            return <span>{wallet.currency}</span>;
          })}
        </div>
      ) : (
        <h1>You have not wallets yet :(</h1>
      )}
    </>
  );
};

export default withAuth(Dashboard);
