import * as React from 'react';

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems
} from 'react-navigation';

import AuthLoading from './AuthLoading';
import Login from './src/Screens/Login';
import DrawerContent from './src/Screens/Drawer'

import Home from './src/Screens/Home';
import Album from './src/Screens/Album';
import AlbumView from './src/Screens/AlbumView';

import Songs from './src/Screens/Songs';
import UsersEditor from './src/Screens/UsersEditor';
import UserView from './src/Screens/UserView'

const navigationOptionsConf = {
  navigationOptions:{
    headerStyle: {
      backgroundColor: '#f50057'
    },
    headerTintColor: '#FFFFFF',    
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}

const AppStack = createStackNavigator({ 
  Home,
  UserView
}, {
  initialRouteName: 'Home',
  ...navigationOptionsConf
});

const AlbumStack = createStackNavigator({ 
  Album,
  AlbumView
}, {
  initialRouteName: 'Album',
  ...navigationOptionsConf
});


const SongStack = createStackNavigator({ 
  Songs
}, {
  initialRouteName: 'Songs',
  headerMode: 'none',
  ...navigationOptionsConf
});

const MainDrawer = createDrawerNavigator({ 
  Home: AppStack,
  Songs: SongStack,
  Album: AlbumStack
}, { contentComponent: DrawerContent })

const RootStack = createStackNavigator(
  {
    Main: MainDrawer,
    UsersEditor: UsersEditor,
  }, {
    mode: 'modal',
    headerMode: 'none',
  }
);


export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: Login,
    App: RootStack,
    
  }, {
    initialRouteName: 'AuthLoading'
  }
);
