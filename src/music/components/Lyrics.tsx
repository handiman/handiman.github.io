import React from 'react';
import { ITrack } from '.';
import { Typography } from '@material-ui/core';

export default (props: { track?: ITrack }) => {
  const { track } = props;

  const prettyLyrics = (lyrics:string) => lyrics
      .replace(/(?:\n)/g, '<br />');

  if (track && track.lyrics) {
      return (<>
          <Typography variant="h4" component="br"></Typography>
          <div dangerouslySetInnerHTML={{ __html: prettyLyrics(track.lyrics) }} />
      </>);
  }

  return null;
};