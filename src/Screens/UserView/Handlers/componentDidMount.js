// import { loadUser } from '../Actions/user';
import fetchUser from '../Services/fetchUser';

export default (props) => async (dispatch) => {
  
  const id = props.navigation.getParam('id');
  
  await dispatch(fetchUser({id}));

  /* dispatch(loadUser({
    first_name: props.navigation.getParam('first_name'),
    last_name: props.navigation.getParam('last_name'),
    email: props.navigation.getParam('email'),
    index: props.navigation.getParam('index')
  })); */

}