import { combineReducers } from 'redux';

import { reducer as playlist } from './Actions/playlist';
import { reducer as tractControlVisibility } from './Actions/tractControllVisibility';
import { reducer as playerConfig } from './Actions/playerConfig';

export default combineReducers({
  playlist,
  tractControlVisibility,
  playerConfig
})