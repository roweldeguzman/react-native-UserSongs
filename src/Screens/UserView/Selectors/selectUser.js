import { createSelector } from 'reselect';

const selectUser = state => state.screens.UserView.user;

export default createSelector(
  selectUser,
  (user) => user
)
