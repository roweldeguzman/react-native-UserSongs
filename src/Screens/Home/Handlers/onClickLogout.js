import { AsyncStorage } from 'react-native'

import NavigationService from '../../../Config/service';

export default () => async (dispatch, getState) => {
  
  await AsyncStorage.removeItem("userToken");

  NavigationService.getNavigation().navigate('Auth');

}