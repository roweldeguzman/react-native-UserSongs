import NavigationService from '../../../Config/service';

export default (props, index) => async (dispatch) => {
  // NavigationService.getNavigation().navigate('UserView', {...props, index: index});
  NavigationService.getNavigation().navigate('UserView', {
    id: props.id
  });
}