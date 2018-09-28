import { combineReducers } from 'redux';

import { reducer as album } from './Actions/album';

export default combineReducers({
  album
});