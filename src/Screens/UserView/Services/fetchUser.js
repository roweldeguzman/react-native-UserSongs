import { getUser } from '../../../HttpRequests/users';
import { loadUser } from '../Actions/user';

export default (id) => async (dispatch) => {

  try  {
    
    const response = await getUser(id);
    dispatch(loadUser(response.data.data));
    
  } catch (error) {}
}