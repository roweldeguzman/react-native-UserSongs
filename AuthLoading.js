import * as React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Screen extends React.Component {

  constructor (props) {
    super(props);
    this._bootstrapAsync();
  }
  
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');

  }
  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#FFF" />
        <Text style={{ color: "#FFF", marginTop: 5}}>Authenticating...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252627',
  }
});