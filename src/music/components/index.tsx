import { default as Player } from './Player';
import { default as Album } from './Album';
import { default as Lyrics } from './Lyrics';

const apiRoot = "https://henrikbecker.azurewebsites.net";
const get = (relativeUrl: string) => fetch(`${apiRoot}/api/v1/artists/henrik-becker/${relativeUrl}`).then(response => response.json());
const getAlbums = () => get("albums");
const getTracks = (albumId: string) => get(`albums/${albumId}/tracks`);

export interface IAlbum {
  id: string,
  title: string
}

export interface ITrack {
  id: string,
  title: string,
  lyrics: string,
  streamUrl: string
}

export {
  Album,
  Lyrics,
  Player,
  apiRoot,
  getAlbums,
  getTracks
}