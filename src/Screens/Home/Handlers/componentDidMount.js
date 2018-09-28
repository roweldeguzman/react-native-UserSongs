import { AsyncStorage } from 'react-native';

import { loadUsers, clearUsers } from '../Actions/users';

import fetchUsers from '../Services/fetchUsers';
import { setPagination } from '../Actions/pagination';

export default () => async (dispatch) => {
  
  dispatch(setPagination({ total: 0, pageSize: 15, current: 1, last_page: 0 }));
  dispatch(clearUsers());
  dispatch(fetchUsers(false));
  
  /* await AsyncStorage.getItem('users')
  .then(req => JSON.parse(req))
  .then(data=> {
    if (data !== null) {
      dispatch(loadUsers(data));
    }

  }); */
  
}