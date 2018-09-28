import { createAction, handleActions } from 'redux-actions';
import _ from 'lodash'

const loadPlaylist = createAction("SCREENS/SONGS/LOAD_PLAYLIST");
const clearPlaylist= createAction("SCREENS/SONGS/CLEAR_PLAYLIST");

const defaultState = [];

const reducer = handleActions(
  {
    [loadPlaylist]: (state, action) => action.payload,
    [clearPlaylist]: () => []
  },
  defaultState
);

export { loadPlaylist, clearPlaylist, reducer };