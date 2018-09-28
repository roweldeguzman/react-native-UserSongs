import { createAction, handleActions } from 'redux-actions';
import _ from 'lodash'

const loadAlbums = createAction("SCREENS/ALBUMS/LOAD_ALBUMS");
const deleteFromAlbum = createAction("SCREEN/ALBUMS/DELETE_FROM_ALBUM")
const clearAlbums= createAction("SCREENS/ALBUMS/CLEAR_ALBUMS");

const defaultState = [];

const reducer = handleActions(
  {
    [loadAlbums]: (state, action) => action.payload,
    /* [deleteFromAlbum]: (state, action) => state.splice(action.payload, 1), */
    /* [deleteFromAlbum]: (state, action) => _.remove(state, (n)=> n.id !== action.payload), */
    [clearAlbums]: () => []
  },
  defaultState
);

export { loadAlbums, deleteFromAlbum, clearAlbums, reducer };