import { Alert } from 'react-native';

import { updateUser } from '../../../HttpRequests/users';
import { updateUserState } from '../../UserView/Actions/user';
import fetchUsers from '../../Home/Services/fetchUsers';

export default ({ id, data }) => async (dispatch) => {
  try {

    const response = await updateUser({ id, data});
        
    dispatch(updateUserState(response.data.data));

    dispatch(fetchUsers());
    
  } catch (error) {

    Alert('Error', error);

  }

}