import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Section } from '../../../components';
import { Recommendations } from '../../../components';
import { RECOMMENDATIONS } from '../../../Theme';

const useStyles = makeStyles(_ => ({
  section: {
    backgroundColor:RECOMMENDATIONS
  }
}));

export default (props: { recommendations: any, title?: string, align?:string }) => {
  const { recommendations } = props;
  const classes = useStyles();

  return (
    <Section className={classes.section}>
      <Typography variant="h2" align="center" gutterBottom>What do people have to say about me?</Typography>
      <Recommendations {...{recommendations}} />
    </Section>
  );
}