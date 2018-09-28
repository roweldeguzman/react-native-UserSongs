import { createSelector } from 'reselect';

const selectAlbumModalVisibility = state => state.screens.Albums.albumModalVisibility;

export default createSelector(
  selectAlbumModalVisibility,
  (visibility) => visibility
)
