import { createAction, handleActions } from 'redux-actions';

const defaultState = false;

export const setIsFetching = createAction('SCREENS/SYNC/SET_IS_EXPORTING');

export const reducer = handleActions(
  {
    [setIsFetching]: (state, action) => action.payload
  },
  defaultState
);

export default { setIsFetching, reducer };
