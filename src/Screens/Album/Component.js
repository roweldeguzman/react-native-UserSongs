import * as React from 'react';
import { View, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderLeft from './Components/HeaderLeft';
import HeaderRight from './Components/HeaderRight';

import List from './Components/List';
import AlbumModal from './Components/AlbumModal';


import colors from '../../Common/colors'

type Props = {
  albums: [],
  albumModalVisibility: boolean,

  componentDidMount: () => void,
  onPressAlbumModalCancel: () => void,
  onPressCreate: () => void,

  onPressDeleteAlbum: () => void,
  onPressAlbumView: () => void
}

export default class extends React.Component<Props> {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Album',
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />
  })
  
  componentDidMount = () => this.props.componentDidMount();

  render () {
    const {
      albums,
      albumModalVisibility,
      onPressAlbumModalCancel,
      onPressCreate,

      onPressDeleteAlbum,
      onPressAlbumView
      
    } = this.props;
    

    return (
      <React.Fragment>
        <List
          albums={ albums }
          onPressDeleteAlbum={ onPressDeleteAlbum }
          onPressAlbumView={onPressAlbumView}
        />

        <AlbumModal 
          albumModalVisibility={albumModalVisibility}
          onPressAlbumModalCancel={onPressAlbumModalCancel}
          onPressCreate={onPressCreate}
        />
      </React.Fragment>
    )
  }
}