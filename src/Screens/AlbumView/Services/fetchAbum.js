import { AsyncStorage } from 'react-native';

import { loadAlbum } from '../Actions/album';

export default (index) => async (dispatch, getState) => {
  try {

    await AsyncStorage.getItem('albums')
      .then(async (album) => {
        if(album) {
          
          const albumList = JSON.parse(album);
          dispatch(loadAlbum(albumList[index]));

        }
      });
      
  } catch (error) {}
}