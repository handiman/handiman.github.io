import React from 'react';
import { IAlbum, ITrack } from '.';
import { List, ListItem, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(_ => ({
  track: {
      cursor: 'pointer'
  }
}));

export default (props: {
  album: IAlbum;
  onTrackSelected: (album: IAlbum, track: ITrack) => void;
}) => {
  const { onTrackSelected, album } = props;
  const { tracks, title } = album;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4" component="h4">{title}</Typography>
      <List>
        {tracks && tracks.map((track: ITrack, index: number) => (
          <ListItem key={index} onClick={() => onTrackSelected(album, track)} className={classes.track}>
            {track.title}
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}