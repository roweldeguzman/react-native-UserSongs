/* import _ from 'lodash';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { AsyncStorage } from 'react-native'

import thunk from 'redux-thunk';

import { reducer as form } from 'redux-form';

export default (reducers = {}) => {

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };

  const reducerMap = _.assign({}, { form, ...reducers }, reducers);

  const reducer = combineReducers(reducerMap);

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(persistedReducer, applyMiddleware(thunk));

  const persistor = persistStore(store);

  return { store, persistor };
};


 */

import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { assign } from 'lodash';

export default (reducers = {}) => {

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };

  const middleware = applyMiddleware(
    thunkMiddleware
  );

  const reducerMap = assign({}, { form, ...reducers });

  const reducer = combineReducers(reducerMap);

  const persistedReducer = persistReducer(persistConfig, reducer);

  const createStoreWidthDevTools = composeWithDevTools(middleware)(createStore);

  const store = createStoreWidthDevTools(persistedReducer);
  
  const persistor = persistStore(store)

  return { store, persistor };
}
