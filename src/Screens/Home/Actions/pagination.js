import { createAction, handleActions } from 'redux-actions';

const setPagination = createAction("SCREENS/USERS/SET_PAGINATION");
const updatePagination = createAction("SCREENS/USERS/UPDATE_PAGINATION");

const defaultState = {
  total: 0,
  pageSize: 10,
  current: 1,
  last_page: 0
};

const reducer = handleActions(
  {
    [setPagination]: (state, action) => action.payload,
    [updatePagination]: (state, action) => Object.assign({}, state, action.payload)
  },
  defaultState
);

export { setPagination, updatePagination, reducer };