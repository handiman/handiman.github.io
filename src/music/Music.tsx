import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, CircularProgress } from '@material-ui/core';
import { SentimentDissatisfied as SadFace } from '@material-ui/icons';
import { Player, Album, getAlbums, IAlbum, ITrack, Lyrics, Alert } from './components';

export default () => {
  const [albums, setAlbums] = useState<Array<IAlbum>>();
  const [album, setAlbum] = useState<IAlbum>();
  const [track, setTrack] = useState<ITrack>();
  const [loading, setLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const onTrackSelected = (album: IAlbum, track: ITrack) => {
    setAlbum(album);
    setTrack(track);
  }

  useEffect(() => {
    getAlbums()
      .then(albums => {
        setAlbums(albums);
        setLoading(false);
      })
      .catch(_ => {
        setLoading(false);
        setLoadingFailed(true);
      });
  }, []);

  const renderSpinner = () => loading && (
    <Alert>
      <Box position="relative" display="inline-flex">
        <CircularProgress size={100} color="inherit" />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <div>
            Loading...
          </div>
        </Box>
      </Box>
    </Alert>
  );

  const renderError = () => loadingFailed && (
    <Alert>
      <SadFace style={{ fontSize: 100 }} />
      <div>Failed to retrieve track list</div>
    </Alert>
  );

  return (
    <>
      {renderSpinner() || renderError() || (
        <Container style={{ marginTop: 50, marginBottom: 170 }}>
          <Grid container spacing={0} direction="row-reverse">
            <Grid item md sm={12}>
              <Lyrics track={track} />
            </Grid>
            <Grid item md sm={12}>
              {albums && albums.map((album: IAlbum, index: number) => (
                <Album key={index} album={album} onTrackSelected={onTrackSelected} />
              ))}
            </Grid>
          </Grid>
        </Container>
      )}
      <Player track={track} album={album} />
    </>
  );
}