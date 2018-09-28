import { createAction, handleActions } from 'redux-actions';

const loadUser  = createAction("SCREENS/USERS_VIEW/LOAD_USER");
const updateUserState  = createAction("SCREENS/USERS_VIEW/UPDATE_USER_STATE");
const clearUsers  = createAction("SCREENS/USERS_VIEW/CLEAR_USER");

const defaultState = null;

const reducer = handleActions(
  {
    [loadUser]: (state, action) => action.payload,
    [updateUserState]: (state, action) => Object.assign({}, state, action.payload),
    [clearUsers]: () => null
  },
  defaultState
);

export { loadUser, updateUserState, clearUsers, reducer };