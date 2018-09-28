import React, { Component } from 'react';
import _ from 'lodash';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import defaultConfig from '../Config';
import createStore from '../Utilities/createStore';

type Props = {
  reducers:{},
  children: ?React.Node
}

export default class MainScreen extends Component<Props> {
  
  constructor(props: Props) {
    super(props);
  
    const { store, persistor } = createStore(props.reducers);

    this.store = store;
    this.persistor = persistor;
    
  }

  store: any;

  persistor: any;

  render() {
    const { children } = this.props;

    return (
      <StoreProvider store={this.store}>
        <PersistGate persistor={this.persistor}>
          { children }
        </PersistGate>
      </StoreProvider>
    );
  }
}