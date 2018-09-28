import { Alert, Animated } from 'react-native';
import { deleteUser } from '../../../HttpRequests/users';
import { removeUserFromState } from '../Actions/users';
import fetchUsers from './fetchUsers';

export default (id) => async (dispatch) => {
  try {
    
    await deleteUser({ id });
    await dispatch(removeUserFromState(id))

    // dispatch(fetchUsers());

  } catch(error) {
    Alert('Error',error)
  }
}