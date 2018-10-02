import { setPlayerConfig } from '../Actions/playerConfig';

export default (data) => async (dispatch) => {
  dispatch(setPlayerConfig({
    totalLength: Math.floor(data.duration)
  }))
}