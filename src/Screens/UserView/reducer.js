import { combineReducers } from 'redux';

import { reducer as user } from './Actions/user';


export default combineReducers({
  user
})