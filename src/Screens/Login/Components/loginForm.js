import * as React from 'react';
import { Field } from 'redux-form'
import TextField from '../../../Common/Components/TextField';
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './loginForm.styles';

type Props = {
  onClickLogin: () => void
}

export default class extends React.Component<Props> {
  
  render() {
    const { onClickLogin } = this.props
    return (
      <React.Fragment>
        <Image
          style={{width: 50, height: 50, top: 50, position: 'absolute'}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />

        <Field 
          name="username"
          style={styles.input}
          placeholder="Username"
          component={TextField}
        />

        <Field 
          name="password"
          style={[ styles.input, { marginTop: 10 } ]}
          placeholder="Passowrd"
          secureTextEntry={true}
          type="password"
          component={TextField}
        />
        
        <TouchableOpacity style={[styles.button, { width: 200 } ]} onPress={onClickLogin}>
          <Text> Login </Text>
        </TouchableOpacity>

      </React.Fragment>
    )
  }
}