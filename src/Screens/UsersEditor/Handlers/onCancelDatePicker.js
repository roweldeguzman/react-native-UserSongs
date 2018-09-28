import { setDatePickerVisibility } from '../Actions/datePickerVisibility';

export default () => async (dispatch) => {

  dispatch(setDatePickerVisibility(false));
  
}