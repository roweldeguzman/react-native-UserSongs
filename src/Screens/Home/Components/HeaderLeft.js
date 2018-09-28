import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../Common/colors';

const MenuIcon = () => <Ionicons name="ios-menu" size={28} color={colors.primary} />

type Props = {
  navigation: {
    openDrawer: () => void
  }
}

class Component extends React.Component<Props> {
  
  onPressMenuButton = () => this.props.navigation.openDrawer()
  
  render() {
    
    return (
      
      <TouchableOpacity
        hitSlop={{top: 5, left: 15, bottom: 5, right: 5}}
        onPress={ this.onPressMenuButton }
        style={{ marginLeft: 15 }}
      >
      
        <MenuIcon />
        
      </TouchableOpacity>
      
    )
  }
}

export default withNavigation(Component)
