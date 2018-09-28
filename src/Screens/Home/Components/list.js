import * as React from 'react';
import { View, FlatList } from 'react-native';

import styles from './list.styles';
import RenderItem from './renderItem';

type Props = {
  users: [],
  pullRefreshStatus: boolean,
  onPullRefresh: () => void,
  onClickViewUser: () => void,
  onClickDelete: () => void,
  onEndReached: () => void
}

export default ({
  users,
  pullRefreshStatus,
  onPullRefresh,
  onClickViewUser,
  onClickDelete,
  onEndReached
}: Props) => (

  <View style={styles.container}>
    {users.length > 0 && (
      <FlatList
        refreshing={pullRefreshStatus}
        onRefresh={onPullRefresh}
        data={users}
        onEndReachedThreshold={0}
        onEndReached={onEndReached}
        renderItem={
          ({item, index}) => (

            <RenderItem
              item={item}
              index={index}
              onClickViewUser={onClickViewUser}
              onClickDelete={onClickDelete}
            />
          )
        }
        
        keyExtractor={(item, index) => index.toString()}

      />
    
    )}

  </View>
  
)
