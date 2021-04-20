import React, { useState, useEffect } from 'react';

import { axiosWrapp } from '../../utils';
import { withAuth } from '../../hocs';

import { WALLETS } from '../../constants/index';
import { CREATE_WALLET } from '../../constants/routes';

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
            return <p key={wallet.id}>{wallet.name}</p>;
          })}
        </div>
      ) : (
        <div>
          {' '}
          <h1>You have not wallets yet :(</h1>
          <h1
            onClick={() => {
              props.history.push(CREATE_WALLET);
            }}
          >
            Create new wallet
          </h1>
        </div>
      )}
    </>
  );
};

export default withAuth(Dashboard);
