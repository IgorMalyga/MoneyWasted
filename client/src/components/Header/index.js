import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useObserver } from 'mobx-react';

import { StoreContext } from '../../storage';

const drawerWidth = 240;
const useStyles = makeStyles(() => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navbarItem: {
    '&::after': {
      content: "''",
      width: '0',
      height: '100%',
      border: '1px solid white',
      top: '0',
      left: '0',
      marginLeft: '5px',
      marginRight: '5px',
    },
  },
}));

const Header = () => {
  const store = React.useContext(StoreContext);
  const classes = useStyles();
  return useObserver(() => (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.navbarItem}>
          {store.user ? store.user.active_wallet.name : ''}
        </Typography>
        <Typography variant="h6" noWrap>
          {store.user ? store.user.email : ''}
        </Typography>
      </Toolbar>
    </AppBar>
  ));
};

export default Header;
