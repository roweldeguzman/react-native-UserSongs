import NavigationService from '../../../Config/service';

export default () => async () => { 
  NavigationService.goBack();
}