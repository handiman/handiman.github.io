import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(_ => ({
  alert: {
    position: 'absolute',
    width: '100%',
    top: '40vh',
    zIndex: 1,
    textAlign: 'center'
  }
}));

export default (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.alert}>
      {props.children}
    </div>
  );
}