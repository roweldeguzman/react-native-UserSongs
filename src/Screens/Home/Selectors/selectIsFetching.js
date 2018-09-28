import { createSelector } from 'reselect';

const selectIsFetching = state => state.screens.Users.isFetching;

export default createSelector(
  selectIsFetching,
  (isFetching) => isFetching
)
