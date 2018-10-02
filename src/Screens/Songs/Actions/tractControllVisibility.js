import { createAction, handleActions } from 'redux-actions';

const setTractControllVisibility = createAction("SCREENS/SONGS/SET_TRACT_CONTROL_VISIBILITY");

const defaultState = true;

const reducer = handleActions(
  {
    [setTractControllVisibility]: (state, action) => action.payload,
  },
  defaultState
);

export { setTractControllVisibility, reducer };