import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Text, Image, TouchableOpacity } from 'react-native';


import styles from './Header.styles';

type Props = {
  message: string,
  onDownPress: () => void,
  onQueuePress: () => void,
  onMessagePress: () => void
}

export default ({ 
  message,
  onDownPress,
  onQueuePress,
  onMessagePress
}: Props) => (

  <View style={styles.container}>

    <TouchableOpacity onPress={onDownPress}>
      <Ionicons name="ios-arrow-down" size={20} color="white" />
    </TouchableOpacity>

    <Text onPress={onMessagePress} style={styles.message}>{message.toUpperCase()}</Text>

    <TouchableOpacity onPress={onQueuePress}>
      <MaterialIcons name="queue-music" size={20} color="white" />
    </TouchableOpacity>

</View>

)