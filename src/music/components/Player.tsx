import React, { useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { PlayArrow as PlayIcon, Pause as PauseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { IAlbum, ITrack } from './';

const useStyles = makeStyles(_ => ({
  player: {
    top: 'auto',
    bottom: 0
  },
  toolbar: {
    paddingLeft: 0
  },
  album: {
    width: 120,
    height: 120,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '120px 120px',
    marginRight: 20
  },
  copyright: {
    maxWidth: 300,
    '& a': {
      textDecoration: 'none'
    }
  }
}));

interface IProps {
  album?: IAlbum,
  track?: ITrack
}

export default (props: IProps) => {
  const classes = useStyles();
  const { track, album } = props;
  const backgroundImage = { backgroundImage: 'url(https://henrikbecker.azurewebsites.net/img/folder.jpg)' };
  var player: any;

  const duration = () => player ? player.duration : 0;
  const currentType = () => player ? player.currentTime : 0;

  useEffect(() => {
    if (track) {
      play();
    }
  }, [track]);

  const play = () => {
    if (player.src && player.src !== '') {
      player.play();
    }
  }

  const pause = () => {
    player.pause();
  }

  return (
    <AppBar position="fixed" color="secondary" className={classes.player}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.album} style={backgroundImage}>
        </div>
        <IconButton onClick={play}>
          <PlayIcon />
        </IconButton>
        <IconButton onClick={pause}>
          <PauseIcon />
        </IconButton>
        <div style={{ marginLeft: 20, flexGrow: 1 }}>
          {track ? track.title : 'No track selected'} {album ? `(${album.title})` : ''}
        </div>
        <div className={classes.copyright}>
          <small>
            The music on this site is <a href="https://www.henrikbecker.net">&copy; Henrik Becker</a> and licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">License</a>.
          </small>
        </div>
      </Toolbar>
      <audio controls={false} src={track ? track.streamUrl : ''} ref={ref => player = ref} />
    </AppBar>
  );
}