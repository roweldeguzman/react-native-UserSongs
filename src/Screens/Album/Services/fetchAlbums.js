import { AsyncStorage } from 'react-native';

import { loadAlbums } from '../Actions/albums';

export default () => async (dispatch, getState) => {
  try {

    await AsyncStorage.getItem('albums')
      .then(async (album) => {
        if(album) {
          
          const albumList = JSON.parse(album);
          dispatch(loadAlbums(albumList));

        }

      });
      console.log(getState());
  } catch (error) {}
}