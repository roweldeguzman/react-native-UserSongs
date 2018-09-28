import { change } from 'redux-form';
import moment from 'moment';
import { setDatePickerVisibility } from '../Actions/datePickerVisibility';

export default (date: Date) => async (dispatch) => {
  
  const newDate = moment(date).format('MM-DD-YYYY')

  dispatch(change('Users', 'date_of_birth', newDate));

  dispatch(setDatePickerVisibility(false));

}