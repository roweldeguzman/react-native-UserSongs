import { reset } from 'redux-form';
import { setAlbumModalVisibility } from '../Actions/albumModalVisibility';

export default () => async (dispatch) => {
  
  dispatch(setAlbumModalVisibility(false));
  dispatch(reset('Albums'));
  
}