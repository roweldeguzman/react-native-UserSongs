import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../Common/colors';

const MenuIcon = () => <Ionicons name="ios-add" size={28} color={colors.primary} />

type Props = {
  navigation: {
    navigate: () => void
  }
}

class Component extends React.Component<Props> {
  
  onPressAddButton = () => this.props.navigation.navigate('UsersEditor')
  
  render() {
    
    return (
      
      <TouchableOpacity
        hitSlop={{top: 5, left: 15, bottom: 5, right: 5}}
        onPress={ this.onPressAddButton }
        style={{ marginRight: 15 }}
      >
      
        <MenuIcon />
        
      </TouchableOpacity>
      
    )
  }
}

export default withNavigation(Component)
