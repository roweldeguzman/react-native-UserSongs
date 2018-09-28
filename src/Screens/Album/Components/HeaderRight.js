import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../Common/colors';
import onPressNewAlbum from '../Handlers/onPressNewAlbum';

const MenuIcon = () => <Ionicons name="ios-add" size={28} color={colors.primary} />

type Props = {
  onPressNewAlbum: () => void
}

class Component extends React.Component<Props> {
    
  render() {
    const { onPressNewAlbum } = this.props
    
    return (
      
      <TouchableOpacity
        hitSlop={{top: 5, left: 15, bottom: 5, right: 5}}
        onPress={ onPressNewAlbum }
        style={{ marginRight: 15 }}
      >
      
        <MenuIcon />
        
      </TouchableOpacity>
      
    )
  }
}

const actionCreators = {
  onPressNewAlbum
}

export default withNavigation(connect(null, actionCreators)(Component))