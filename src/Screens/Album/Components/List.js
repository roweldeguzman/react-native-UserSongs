import * as React from 'react';
import { View, FlatList } from 'react-native';

import styles from './List.styles';
import RenderItem from './RenderItem';

type Props = {
  users: [],
  pullRefreshStatus: boolean,
  onPullRefresh: () => void,
  onPressAlbumView: () => void,
  onPressDeleteAlbum: () => void,
  onEndReached: () => void
}

export default ({
  albums,
  pullRefreshStatus,
  onPullRefresh,
  onPressAlbumView,
  onPressDeleteAlbum,
  onEndReached
}: Props) => (

  <View style={styles.container}>
    {albums.length > 0 && (
      <FlatList
        refreshing={pullRefreshStatus}
        onRefresh={onPullRefresh}
        data={albums}
        onEndReachedThreshold={0}
        onEndReached={onEndReached}
        renderItem={
          ({item, index}) => (

            <RenderItem
              item={item}
              index={index}
              onPressAlbumView={onPressAlbumView}
              onPressDelete={onPressDeleteAlbum}
            />
          )
        }
        
        keyExtractor={(item, index) => index.toString()}

      />
    
    )}

  </View>
  
)
