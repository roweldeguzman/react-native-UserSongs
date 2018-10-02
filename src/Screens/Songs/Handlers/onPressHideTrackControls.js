import { setTractControllVisibility } from '../Actions/tractControllVisibility';

export default () => async (dispatch, getState) => {
  
  dispatch(setTractControllVisibility(false));

  console.log(getState())
}