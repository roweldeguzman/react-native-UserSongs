import { createAction, handleActions } from 'redux-actions';

const setDatePickerVisibility = createAction("SCREENS/USER/SET_DATE_PICKER_VISIBILITY");

const defaultState = false;

const reducer = handleActions(
  {
    [setDatePickerVisibility]: (state, action) => action.payload
  },
  defaultState
);

export { setDatePickerVisibility,  reducer };