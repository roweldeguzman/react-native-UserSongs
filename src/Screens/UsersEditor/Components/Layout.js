// @flow

import * as React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.Node
}

export default ({ children }: Props) => (
  
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
    {children}
  </View>
)

