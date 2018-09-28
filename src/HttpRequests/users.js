import axios from 'axios';

const api = 'http://react-artisan.com/api';

export const getUsers = ({ params } = {}) => axios.get(`${api}/user`, { params });
export const getUser = ({id, params }) => axios.get(`${api}/user/${id}`, { params });
export const createUser = ({ data }) => axios.post(`${api}/user`, data);
export const updateUser = ({ id, data }) => axios.put(`${api}/user/${id}`, data);
export const deleteUser = ({ id }) => axios.delete(`${api}/user/${id}`);


export const getPlaylist = () => axios.get(`https://api.napster.com/v2.0/playlists?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm`);