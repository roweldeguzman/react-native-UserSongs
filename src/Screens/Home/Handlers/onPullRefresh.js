import fetchUsers from '../Services/fetchUsers';
import { setPullRefreshStatus } from '../Actions/pullRefreshStatus';
import { updatePagination } from '../Actions/pagination';

export default () => async (dispatch) => {
  
  dispatch(updatePagination({ 'current': 1 }));

  dispatch(setPullRefreshStatus(true));

  dispatch(fetchUsers(false));

}