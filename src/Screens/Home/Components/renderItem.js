import * as React from 'react';
import Swipeout from 'react-native-swipeout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TouchableWithoutFeedback, FlatList, Text } from 'react-native';
import styles from './renderItem.styles';

type Props = {
  item: {},
  index: Number,
  onClickViewUser: () => void,
  onClickDelete: () => void
}

export default ({
  item,
  index,
  onClickViewUser,
  onClickDelete
}: Props) => {

  const swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: '#EE5262',
      underlayColor: '#EF7589',
      onPress: async () => {
        onClickDelete(item);
      }
    }
  ]
  

  return (
    <Swipeout right={swipeoutBtns} buttonWidth={100} autoClose={true} backgroundColor='transparent'>

      <TouchableWithoutFeedback onPress={()=> onClickViewUser(item, index) }>

        <View style={styles.itemList}>
          
          <Text style={styles.name} ellipsizeMode='tail' numberOfLines={1}>{ item.first_name } { item.last_name }</Text>
          <Text style={styles.email} ellipsizeMode='tail' numberOfLines={1}>{ item.email }</Text>
          <Ionicons style={styles.arrow} name="ios-arrow-forward" size={24} />

        </View>

      </TouchableWithoutFeedback>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',backgroundColor: '#00000080'}}>
            <View style={{ width: 300, height: 300, backgroundColor: 'red', borderRadius: 5}}>
              <Text> Hello World! </Text>
              <Text> Hello World! </Text>
              <Text> Hello World! </Text>
              <Text> Hello World! </Text>
              <Text> Hello World! </Text>
            </View>
          </View>
      </Modal> */}
    </Swipeout>
  )
}