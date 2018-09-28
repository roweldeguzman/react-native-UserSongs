import { createSelector } from 'reselect';

const selectVisibility = state => state.screens.UsersEditor.datePickerVisibility;

export default createSelector(
  selectVisibility,
  (visibility) => visibility
)
