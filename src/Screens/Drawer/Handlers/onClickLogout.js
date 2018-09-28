import { AsyncStorage, Alert } from 'react-native'

import NavigationService from '../../../Config/service';

export default () => async (dispatch, getState) => {
  
  Alert.alert(
    null,
    'Are you sure you want to logout?',
    [
      { text: 'No' },
      {
        text: 'Yes',        
        onPress: async () => {
          await AsyncStorage.removeItem("userToken");
          NavigationService.getNavigation().navigate('Auth');
        }
      },
    ],{ cancelable: false }
  )

}