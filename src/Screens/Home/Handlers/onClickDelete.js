import { Alert, AsyncStorage } from 'react-native';
import deleteUser from '../Services/deleteUser';

export default (props) => async (dispatch) => {
  Alert.alert(
    null,
    'Are you sure you want to delete this record?',
    [
      { text: 'No' },
      {
        text: 'Yes',        
        onPress: () => dispatch(deleteUser(props.id))
      },
    ],{ cancelable: false }
  )
}