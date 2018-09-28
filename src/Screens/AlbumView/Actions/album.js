import { createAction, handleActions } from 'redux-actions';
import _ from 'lodash'

const loadAlbum = createAction("SCREENS/ALBUM_VIEW/LOAD_ALBUM");
const clearAlbum= createAction("SCREENS/ALBUM_VIEW/CLEAR_ALBUM");

const defaultState = null;

const reducer = handleActions(
  {
    [loadAlbum]: (state, action) => action.payload,    
    [clearAlbum]: () => []
  },
  defaultState
);

export { loadAlbum, clearAlbum, reducer };