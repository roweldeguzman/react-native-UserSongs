import fetchUsers from '../Services/fetchUsers';
import { updatePagination } from '../Actions/pagination';

export default (page) => async (dispatch, getState) => {
  const { pagination } = getState().screens.Users;
  
  if (pagination.current < pagination.last_page) {
    
    dispatch(updatePagination({
      'current': pagination.current + 1
    }));
    dispatch(fetchUsers(true));
  }

}