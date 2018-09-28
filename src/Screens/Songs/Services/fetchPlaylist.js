import { getPlaylist } from '../../../HttpRequests/users';
import { loadPlaylist } from '../Actions/playlist';

export default () => async (dispatch, getState) => {
  try {
    
    const response = await getPlaylist();

    dispatch(loadPlaylist(response.data.playlists));

    setTimeout(()=>{
      console.log(getState())
    }, 100)
  } catch (error) {}
}