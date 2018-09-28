import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import { deleteFromAlbum } from '../Actions/albums';
import detchAlbums from './fetchAlbums';

export default (id) => async (dispatch) => {

  await AsyncStorage.getItem('albums')
  .then(async (album) => {

    const albumsList = JSON.parse(album);
    
    _.pullAt(albumsList, id);
    
    await AsyncStorage.setItem('albums', JSON.stringify(albumsList));
    
    dispatch(detchAlbums());

  });
    
}