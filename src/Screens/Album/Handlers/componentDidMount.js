import { setAlbumModalVisibility } from '../Actions/albumModalVisibility';
import fetchAlbums from '../Services/fetchAlbums';

export default () => async (dispatch) => {
  
  dispatch(fetchAlbums());
  dispatch(setAlbumModalVisibility(false));

}