import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  AppBar: {
      background: '#91bb5a'
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.AppBar} position="fixed">
        <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              CookBook
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;