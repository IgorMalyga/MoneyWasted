import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import SideBar from './components/SideBar';

import { withAuth } from './hocs/index';

const useStyles = makeStyles(() => ({
  content: {
    height: '100vh',
    width: 'calc(100% - 240px)',
    marginLeft: '240px',
    marginTop: '5%',
  },
}));

const Main = ({ children, props }) => {
  const classes = useStyles();
  return (
    <div style={{ height: '100vh' }}>
      <Header props={props} />
      <SideBar props={props} />
      <main id="content" className={classes.content} style={{ height: '100%' }}>
        {children}
      </main>
    </div>
  );
};

export default withAuth(Main);
