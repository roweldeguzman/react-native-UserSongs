import { createAction, handleActions } from 'redux-actions';

const setPlayerConfig = createAction("SCREENS/SONGS/SET_PLAYER_CONFIG");

const defaultState = {
  paused: true,
  totalLength: 1,
  currentPosition: 0,
  selectedTrack: 0,
  repeatOn: false,
  shuffleOn: false,
};

const reducer = handleActions(
  {
    [setPlayerConfig]: (state, action) => Object.assign({}, state, action.payload),
  },
  defaultState
);

export { setPlayerConfig, reducer };