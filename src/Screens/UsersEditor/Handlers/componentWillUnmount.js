import { clearUser } from '../Actions/user';
import { reset } from 'redux-form';
export default () => async (dispatch) => {
  
  dispatch(clearUser());
  dispatch(reset('Users'));

}