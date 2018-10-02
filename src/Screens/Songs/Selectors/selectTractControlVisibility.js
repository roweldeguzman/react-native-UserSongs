import { createSelector } from 'reselect';

const selectTractControlVisibility = state => state.screens.Songs.tractControlVisibility;

export default createSelector(
  selectTractControlVisibility,
  (visibility) => visibility
)
