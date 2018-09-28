import { submit } from 'redux-form';

export default () => async (dispatch, getState) => {
  dispatch(submit('Login'));
}