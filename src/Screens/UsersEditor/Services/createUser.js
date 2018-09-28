import { createUser } from '../../../HttpRequests/users';

import { appendUser } from '../../Home/Actions/users';

export default ({ data }) => async (dispatch) => {
  try {

    const response = await createUser({ data });
    
    dispatch(appendUser(response.data.data));
    
  } catch(error) {}
}