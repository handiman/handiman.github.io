import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ITrack } from '.';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(2)
  },
  lyrics: {
    '& p': {
      marginBottom: theme.spacing(2)
    }
  }
}));

export default (props: { track?: ITrack }) => {
  const { track } = props;
  const classes = useStyles();

  return track && track.lyrics ? (
    <>
      <Typography variant="h4" className={classes.header}>{track.title}</Typography>
      <ReactMarkdown source={track.lyrics} className={classes.lyrics} />
    </>
  ): null;
};