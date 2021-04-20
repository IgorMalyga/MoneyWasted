import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    marginLeft: '5%',
  },
  link: {
    color: 'inherit',
  },
}));

const Item = ({ id, label, link, icon }) => {
  const classes = useStyles();
  const Icon = icon;
  return (
    <Link key={id} href={link} className={classes.link}>
      <ListItem button key={label}>
        <Icon />
        <ListItemText primary={label} className={classes.text} />
      </ListItem>
    </Link>
  );
};

export default Item;
