import * as React from 'react'
import { View, ActivityIndicator, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation'

import colors from '../../Common/colors';

import HeaderLeft from './Components/HeaderLeft';
import HeaderRight from './Components/HeaderRight';
import List from './Components/list';

type Props = {
  users: [],
  pullRefreshStatus: boolean,
  isFetching: boolean,
  componentDidMount: () => void,
  onClickLogout: () => void,
  onClickViewUser: () => void,
  onPullRefresh: () => void,
  onClickDelete: () => void,
  onEndReached: () => void
}

export default class extends React.Component<Props> {
  
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Home",
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />
  })

  componentDidMount = () => this.props.componentDidMount();  

  render () {
    
    const { 
      users,
      pullRefreshStatus,
      isFetching,
      onClickLogout,
      onClickViewUser,
      onPullRefresh,
      onClickDelete,
      onEndReached
    } = this.props;
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>

          { users.length > 0 && (
            <List
              users={users}
              onClickViewUser={onClickViewUser}
              pullRefreshStatus={pullRefreshStatus}
              onPullRefresh={onPullRefresh}
              onClickDelete={onClickDelete}
              onEndReached={onEndReached}
            />
          )}
          
          {isFetching && (
            <ActivityIndicator size="small" color="black" />
          )}
          
      </SafeAreaView>
    )
  }
}
