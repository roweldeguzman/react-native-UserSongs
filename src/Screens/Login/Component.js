import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import LoginForm from './Components/loginForm';

type Props = {
  componentDidMount: () => void,
  onClickLogin: () => void
}

export default class Screen extends React.Component<Props> {

  componentDidMount = () => this.props.componentDidMount();
  
  render () {
    const { onClickLogin } = this.props;
    return (
      <View style={styles.container}>
        <LoginForm onClickLogin={onClickLogin}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});