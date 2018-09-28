import { createSelector } from 'reselect';

const selectUser = state => state.screens.UsersEditor.user;

export default createSelector(
  selectUser,
  (user) => user
)
