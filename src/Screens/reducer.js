import { combineReducers } from 'redux';

import Drawer from './Drawer/reducer';
import Users from './Home/reducer';
import UsersEditor from './UsersEditor/reducer';
import UserView from './UserView/reducer';

import Songs from './Songs/reducer';
import Albums from './Album/reducer';
import AlbumView from './AlbumView/reducer';

export default combineReducers({
  Drawer,
  Users,
  UsersEditor,
  UserView,
  Songs,

  Albums,
  AlbumView
})
