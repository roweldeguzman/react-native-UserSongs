import { getUsers } from '../../../HttpRequests/users';
import { loadUsers, appendUserBatch } from '../Actions/users';
import { setPagination } from '../Actions/pagination';

import { setPullRefreshStatus } from '../Actions/pullRefreshStatus';
import { setIsFetching } from '../Actions/isFetching';

export default (isAppend) => async (dispatch, getState) => {
  
  const { pagination } = getState().screens.Users;

  try {
    dispatch(setIsFetching(true));

    const params = {};
    params.page = pagination.current;
    params.per_page = pagination.pageSize;
    
    const response = await getUsers({ params });
    
    const users = response.data;
    if (isAppend) {      
      await dispatch(appendUserBatch(users.data.data));      
    } else {
      await dispatch(loadUsers(users.data.data));      
    }

    dispatch(setPullRefreshStatus(false));
  
    dispatch(setPagination({
      total: users.data.total,
      pageSize: users.data.per_page,
      current: users.data.current_page,
      last_page: users.data.last_page
    }));

    dispatch(setIsFetching(false));

  } catch (error) {

  }
}