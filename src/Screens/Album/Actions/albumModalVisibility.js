import { createAction, handleActions } from 'redux-actions';

const setAlbumModalVisibility = createAction("SCREENS/ALBUMS/SET_ALBUM_MODAL_VISIBILITY");


const defaultState = false;

const reducer = handleActions(
  {
    [setAlbumModalVisibility]: (state, action) => action.payload,
  },
  defaultState
);

export { setAlbumModalVisibility, reducer };