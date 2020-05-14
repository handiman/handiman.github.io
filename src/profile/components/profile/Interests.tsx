import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Section } from '../../components';
import { INTERESTS, INTERESTS_BACKGROUND_IMAGE } from '../Layout';

const useStyles = makeStyles(_ => ({
  list: {
    listStyle: 'none',
    paddingLeft: 0
  },
  section: {
    backgroundColor: INTERESTS,
    backgroundImage: `url(${INTERESTS_BACKGROUND_IMAGE})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right'
  }
}));

export default (props: { interests: any }) => {
  const { interests } = props;
  const classes = useStyles();

  return (
    <Section className={classes.section} displayPrint="none">
      <Typography variant="h2" className="no-print">I enjoy</Typography>
      <ul className={classes.list}>
        {interests.map((interest: string, index: number) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </Section>
  );
}