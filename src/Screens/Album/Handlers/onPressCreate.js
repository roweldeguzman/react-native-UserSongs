import { submit } from 'redux-form';

export default () => async (dispatch) => {

  dispatch(submit('Albums'));
  
}