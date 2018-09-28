import { combineReducers } from 'redux';

import { reducer as user } from './Actions/user';
import { reducer as datePickerVisibility } from './Actions/datePickerVisibility';

export default combineReducers({
  user,
  datePickerVisibility
})