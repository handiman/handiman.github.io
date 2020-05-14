import React from 'react';
import { Section } from '../../components';
import { Typography, makeStyles } from '@material-ui/core';
import { SUMMARY } from '../Layout';

const useStyles = makeStyles(_ => ({
  list: {
    listStyle: 'none',
    paddingLeft: 0
  },
  section: {
    backgroundColor:SUMMARY
  }
}));

export default (props: { summary: any }) => {
  const { summary } = props;
  const classes = useStyles();

  return (
    <Section className={classes.section}>
      <Typography variant="h2">I am</Typography>
      <Typography variant="body1" component="ul" className={classes.list}>
        {summary.map((line: string, index: number) => (
          <li key={index}>
            {line}
          </li>
        ))}
      </Typography>
    </Section>
  );
}