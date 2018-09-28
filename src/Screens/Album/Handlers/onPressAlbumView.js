import NavigationService from '../../../Config/service';

export default (index) => async (dispatch) => {
  
  NavigationService.getNavigation().navigate('AlbumView', {
    index: index
  });
}