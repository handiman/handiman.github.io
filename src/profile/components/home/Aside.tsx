import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Section } from '../';
import { ASIDE_BACKGROUND_IMAGE } from '../Layout';

const useStyles = makeStyles(_ => ({
  aside: {
    backgroundImage: `url(${ASIDE_BACKGROUND_IMAGE})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Section component="aside" className={classes.aside} displayPrint="none" py={20}>
      <Typography variant="h2" align="center">
        Thanks for visiting!
      </Typography>
    </Section>
  );
}