import { setTractControllVisibility } from '../Actions/tractControllVisibility';

export default () => async (dispatch) => {
  dispatch(setTractControllVisibility(true))
}