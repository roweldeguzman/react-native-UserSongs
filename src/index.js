import React from 'react';
import App from './App';
import NavigationService from './Config/service';
import RootStack from '../routes';

import screens from './Screens/reducer';

const reducers = {
  screens
}

export default () => (
  <App reducers={reducers}>
    <RootStack ref={NavigationService.setNavigator}/>
  </App>
)
