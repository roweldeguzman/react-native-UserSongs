import { createSelector } from 'reselect';

const selectAlbums= state => state.screens.Albums.albums;

export default createSelector(
  selectAlbums,
  (albums) => albums
)
