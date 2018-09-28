import { combineReducers } from 'redux';

import { reducer as albums } from './Actions/albums';
import { reducer as albumModalVisibility } from './Actions/albumModalVisibility';

export default combineReducers({
  albums,
  albumModalVisibility
})