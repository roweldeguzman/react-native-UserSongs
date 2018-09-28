import { createAction, handleActions } from 'redux-actions';

const loadUser = createAction("SCREENS/USERS_EDITOR/LOAD_USER");
const updateUserState  = createAction("SCREENS/USERS_EDITOR/UPDATE_USER_STATE");
const clearUser = createAction("SCREENS/USERS_EDITOR/CLEAR_USER");

const defaultState = null;

const reducer = handleActions(
  {
    [loadUser]: (state, action) => action.payload,
    [updateUserState]: (state, action) => Object.assign({}, state, action.payload),
    [clearUser]: () => null
  },
  defaultState
);

export { loadUser, clearUser, reducer };