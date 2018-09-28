import { AsyncStorage} from 'react-native';
import { reset } from 'redux-form';

import { setAlbumModalVisibility } from '../Actions/albumModalVisibility';
import fetchAlbums from './fetchAlbums';

export default (data) => async (dispatch, getState) => {

  
  try {
    
    await AsyncStorage.getItem('albums')
    .then(async (album) => {

      let albumsList = album ? JSON.parse(album): [];
      
      albumsList.push(data);

      await AsyncStorage.setItem('albums', JSON.stringify(albumsList));
      
    });

    let albumList = await AsyncStorage.getItem('albums');
    
    await dispatch(fetchAlbums());
    dispatch(setAlbumModalVisibility(false));
    dispatch(reset('Albums'));

  } catch (error) {}

}