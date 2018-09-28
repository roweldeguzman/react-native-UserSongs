import React from 'react';
import { TextInput } from 'react-native';

export default ({ input: { onChange, ...restInput }, ...restProps}) => (
  <TextInput
    onChangeText={onChange}
    {...restInput}
    {...restProps}
  />
);