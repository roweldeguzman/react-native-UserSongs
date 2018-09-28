import createAlbum from '../Services/createAlbum';

export default async (values, dispatch, props) => {
   
  dispatch(createAlbum(values));
 
};
