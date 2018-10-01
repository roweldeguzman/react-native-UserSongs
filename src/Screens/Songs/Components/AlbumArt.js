import * as React from 'react';

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import styles from './AlbumArt.tyles';

type Props = {
  url: string,
  onPress: () => void
}

export default ({ url, onPress }: Props) => (
  <View style={styles.container}>

    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{ uri: url }} />
    </TouchableOpacity>

  </View>
)