import { createSelector } from 'reselect';

const selectUsers = state => state.screens.Users.users;

export default createSelector(
  selectUsers,
  (users) => users
)
