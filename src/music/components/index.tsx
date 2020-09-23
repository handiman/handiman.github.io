import { default as Player } from './Player';
import { default as Album } from './Album';
import { default as Lyrics } from './Lyrics';

const apiRoot = "https://henrikbecker.azurewebsites.net";

const getAlbums = async () => {
  var response = await fetch(`${apiRoot}/music/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ query: '{albums{title,tracks{title,lyrics,streamUrl}}}' })
  });
  
  var json = await response.json();
  return json.albums;
};

export interface IAlbum {
  title: string,
  tracks: Array<ITrack>
}

export interface ITrack {
  title: string,
  lyrics: string,
  streamUrl: string
}

export {
  Album,
  Lyrics,
  Player,
  getAlbums
}