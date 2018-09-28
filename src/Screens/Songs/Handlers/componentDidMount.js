import fetchPlaylist from '../Services/fetchPlaylist';

export default () => async (dispatch) => {
  dispatch(fetchPlaylist());
}