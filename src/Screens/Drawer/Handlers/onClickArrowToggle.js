import { toggleArrow } from '../Actions/drawerArrowToggle';

export default (status) => async (dispatch, getState) => {
  dispatch(toggleArrow(status))
}