import { setAlbumModalVisibility } from '../Actions/albumModalVisibility';

export default () => async (dispatch, getState) => {
  
  dispatch(setAlbumModalVisibility(true));

}