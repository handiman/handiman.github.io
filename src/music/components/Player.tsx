import React, { useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { PlayArrow as PlayIcon, Pause as PauseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { IAlbum, ITrack, apiRoot } from './';

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
  donateForm: {
    maxWidth: 400
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
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className={classes.donateForm}>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="T6HSS2R7WLQYQ" />
          {false && <><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" /></>}
          <Button type="submit">
            If you've stumbled upon these songs and decide you like them, feel free to donate a few bucks so I can keep this up. Life's too short to waste inside an office space. Cheers!
          </Button>
        </form>
      </Toolbar>
      <audio controls={false} src={track ? `${apiRoot}/${track.streamUrl}` : ''} ref={ref => player = ref} />
    </AppBar>
  );
}