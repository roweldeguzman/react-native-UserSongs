import fetchUser from '../Services/fetchUser';

export default (props) => async (dispatch) => {

  const id = props.navigation.getParam('id', '');
  
  if (id !== '') {

    await dispatch(fetchUser({id}))

    /* const user = {
      first_name: props.navigation.getParam('first_name'),
      last_name: props.navigation.getParam('last_name'),
      email: props.navigation.getParam('email'),
      index: props.navigation.getParam('index')
    };

    dispatch(loadUser(user));
    dispatch(initialize('Users', user)); */

  }
}