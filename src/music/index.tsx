import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline, createMuiTheme, Container, Grid } from '@material-ui/core';

import { Player, Album, getAlbums, IAlbum, ITrack, Lyrics } from './components';

const BLUEISH = '#bcbce2'; //'#7d79b4';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#111111'
    },
    text: {
      primary: BLUEISH
    }
  },
  typography: {
    fontFamily: [
      'Shadows Into Light',
      'monospace',
      'sans-serif'
    ].join(','),
    fontSize: 18
  },
  overrides: {
    MuiAppBar: {
      root: {
        opacity: .85
      },
      colorSecondary: {
        backgroundColor: '#000000',
        color: BLUEISH
      }
    },
    MuiButton: {
      root: {
        fontSize: 14,
        margin: 0,
        textTransform: 'none'
      },
      label: {
        color: BLUEISH
      }
    },
    MuiIconButton: {
      label: {
        color: BLUEISH
      }
    },
    MuiLink: {
      root: {
        color: BLUEISH,
        '&:hover': {
          textDecoration: 'none!important'
        }
      }
    }
  }
});

const Music = () => {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState<IAlbum>();
  const [track, setTrack] = useState<ITrack>();
  const onTrackSelected = (album: IAlbum, track: ITrack) => {
    setAlbum(album);
    setTrack(track);
  }
  useEffect(() => {
    getAlbums().then(setAlbums);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container style={{ marginTop: 50, marginBottom: 170 }}>
        <Fragment>
          <Grid container spacing={4} direction="row-reverse">
            <Grid item md sm={12}>
              <Lyrics track={track} />
            </Grid>
            <Grid item md sm={12}>
              {albums.map((album: any, index: number) => (
                <Album key={index} album={album} onTrackSelected={onTrackSelected} />
              ))}
            </Grid>
          </Grid>
          <Player track={track} album={album} />
        </Fragment>
      </Container>
    </ThemeProvider>
  );
}

ReactDOM.render(<Music />, document.getElementsByTagName('main')[0]);