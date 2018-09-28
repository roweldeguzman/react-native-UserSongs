import { createAction, handleActions } from 'redux-actions';

const defaultState = false;

export const toggleArrow = createAction('SCREENS/DRAWER/TOGGLE_ARROW');

export const reducer = handleActions(
  {
    [toggleArrow]: (state, action) => action.payload
  },
  defaultState
);

export default { toggleArrow, reducer };
