import NavigationService from '../../../Config/service';

export default () => async (dispatch, getState) => {
  
  const { user } = getState().screens.UserView;

  NavigationService.getNavigation().navigate('UsersEditor', {
    id: user.id
  });
  
}