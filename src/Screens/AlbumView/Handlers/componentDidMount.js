import fetchAlbum from '../Services/fetchAbum';

export default (props) => async (dispatch) => {
  
  const index = props.navigation.getParam('index');
  dispatch(fetchAlbum(index));

}