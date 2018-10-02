import { createSelector } from 'reselect';

const selectPlayerConfig = state => state.screens.Songs.playerConfig;

export default createSelector(
  selectPlayerConfig,
  (playerConfig) => playerConfig
)
