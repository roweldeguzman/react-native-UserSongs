import * as React from 'react';
import { StyleSheet ,Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { Field } from 'redux-form';
import TextField from '../../../Common/Components/TextField';

type Props = {
  albumModalVisibility: boolean,

  onPressAlbumModalCancel: () => void,
  onPressCreate: () => void
}

export default ({
  albumModalVisibility,
  onPressAlbumModalCancel,
  onPressCreate
}: Props) => (
  <Modal
    animationType='slide'
    transparent={false}
    visible={albumModalVisibility}
  >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '70%' }}>

        <View style={styles.fieldWrapper}>
          <Field
            name="title"
            placeholder="Title"
            style={styles.input}
            component={TextField}
          />
        </View>

        <View style={styles.fieldWrapper}>
          <Field
            name="artist"
            placeholder="Artist"
            style={styles.input}
            component={TextField}
          />
        </View>
        
        <View style={styles.fieldWrapper}>
          <Field
            name="cover"
            placeholder="Cover URL"
            keyboardType="url"
            style={styles.input}
            component={TextField}
          />
        </View>
        
      <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={onPressCreate} style={[styles.buttonBottom, { marginLeft: 2.5}]}>
          <Text> Create </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressAlbumModalCancel} style={[styles.buttonBottom, { marginRight: -2.5, backgroundColor: '#ff9800' }]}>
          <Text style={{ color: '#FFFFFF' }}> Cancel </Text>
        </TouchableOpacity>

      </View>

    </View>

  </Modal>
)


const styles = StyleSheet.create({
  fieldWrapper: {
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden'
  },
  input: {
    width: "90%",
    marginLeft: "5%",
    marginRight: '5%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    height: 35,
    color: "black",
    backgroundColor: "#DDDDDD",    
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#DDD"
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
  buttonBottom: {
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    justifyContent: 'space-between',
  }
});