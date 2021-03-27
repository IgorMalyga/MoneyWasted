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
}));

const Header = () => {
  const store = React.useContext(StoreContext);
  const classes = useStyles();
  return useObserver(() => (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Permanent drawer
          {store.user ? store.user.email : ''}
        </Typography>
      </Toolbar>
    </AppBar>
  ));
};

export default Header;
