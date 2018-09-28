import { createSelector } from 'reselect';

const selectAlbum= state => state.screens.AlbumView.album;

export default createSelector(
  selectAlbum,
  (album) => album
)
