import { Alert } from 'react-native';

import deleteFromAlbum from '../Services/deleteAlbum';

export default (id) => async (dispatch) => {
  Alert.alert(
    null,
    'Are you sure you want to delete this album?',
    [
      { text: 'No' },
      {
        text: 'Yes',        
        onPress: () => dispatch(deleteFromAlbum(id))
      },
    ],{ cancelable: false }
  )
    
}