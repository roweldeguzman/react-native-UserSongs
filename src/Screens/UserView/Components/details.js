import * as React from 'react';
import { View, Text } from 'react-native';

import colors from '../../../Common/colors';
import styles from './details.styles';

type Props = {
  user: {}
}

export default ({ user }: Props) => (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.primary}}>

    <View style={styles.container}>

      <View style={[styles.subContainer, { borderTopLeftRadius: 5, borderTopRightRadius: 5 }]}>

        <View style={styles.label}>
          <Text style={styles.text}>Name</Text>
        </View>

        <View style={{ flex: 1}}>
          <Text style={styles.text}> { user.first_name} { user.last_name } </Text>
        </View>

      </View>

    </View>

    <View style={styles.container}>

      <View style={[styles.subContainer, { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }]}>
        <View style={styles.label}>
          <Text style={styles.text}>Email</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.text} ellipsizeMode='tail' numberOfLines={1}> { user.email } </Text>
        </View>
      </View>

    </View>

  </View>
)