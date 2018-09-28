import { createAction, handleActions } from 'redux-actions';

const setPullRefreshStatus = createAction("SCREENS/USER/SET_PULL_REFRESH_STATUS");

const defaultState = false;

const reducer = handleActions(
  {
    [setPullRefreshStatus]: (state, action) => action.payload
  },
  defaultState
);

export { setPullRefreshStatus,  reducer };