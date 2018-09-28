import { createAction, handleActions } from 'redux-actions';
import _ from 'lodash'

const loadUsers = createAction("SCREENS/USERS/LOAD_USERS");
const appendUserBatch= createAction("SCREENS/USERS/APPEND_USER_BATCH");
const appendUser= createAction("SCREENS/USERS/APPEND_USER");

const removeUserFromState = createAction("SCREENS/USERS/REMOVE_USER_FROM_STATE");
const clearUsers= createAction("SCREENS/USERS/CLEAR_USERS");

const defaultState = [];

const reducer = handleActions(
  {
    [loadUsers]: (state, action) => action.payload,
    [appendUser]: (state, action) => [action.payload, ...state],
    [appendUserBatch]: (state, action) => [...state, ...action.payload],
    [removeUserFromState]: (state, action) => _.remove(state, (n)=> n.id !== action.payload),
    [clearUsers]: () => []
  },
  defaultState
);

export { loadUsers, appendUser, appendUserBatch, removeUserFromState, clearUsers, reducer };