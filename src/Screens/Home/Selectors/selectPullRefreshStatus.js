import { createSelector } from 'reselect';

const selectPullRefreshStatus = state => state.screens.Users.pullRefreshStatus;

export default createSelector(
  selectPullRefreshStatus,
  (pullRefreshStatus) => pullRefreshStatus
)
