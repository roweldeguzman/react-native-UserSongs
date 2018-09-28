import { combineReducers } from 'redux';

import { reducer as users } from './Actions/users';
import { reducer as pagination } from './Actions/pagination';
import { reducer as pullRefreshStatus } from './Actions/pullRefreshStatus';
import { reducer as isFetching } from './Actions/isFetching';

export default combineReducers({
  users,
  pagination,
  pullRefreshStatus,
  isFetching
})