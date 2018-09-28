import * as React from 'react';
import Swipeout from 'react-native-swipeout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TouchableWithoutFeedback, FlatList, Text, Image } from 'react-native';
import styles from './renderItem.styles';

type Props = {
  item: {},
  index: Number,
  onPressAlbumView: () => void,
  onPressDelete: () => void
}

export default ({
  item,
  index,
  onPressAlbumView,
  onPressDelete
}: Props) => {

  const swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: '#EE5262',
      underlayColor: '#EF7589',
      onPress: async () => {
        onPressDelete(index);
      }
    }
  ]
  

  return (
    <Swipeout right={swipeoutBtns} buttonWidth={100} autoClose={true} backgroundColor='transparent'>

      <TouchableWithoutFeedback onPress={()=> onPressAlbumView(index) }>
          <View style={styles.itemList}>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{ flex: 0.1,  }}>
                <Image source={{uri: `${item.cover}` }} style={{ width: 32, height: 40 }} />
              </View>

              <View style={{ flex: 0.9 }}>
                <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{ item.title }</Text>
                <Text style={styles.artist} ellipsizeMode='tail' numberOfLines={1}>Artist: { item.artist }</Text>
                <Ionicons style={styles.arrow} name="ios-arrow-forward" size={24} />
              </View>
            </View>

          </View>
        
      </TouchableWithoutFeedback>

    </Swipeout>
  )
}