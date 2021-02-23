import React from 'react';

import { withAuth } from '../../hocs';

/* eslint-disable */
const Dashboard = (props) => {
  return <h1>Welcome to dashboard</h1>;
};

export default withAuth(Dashboard);
