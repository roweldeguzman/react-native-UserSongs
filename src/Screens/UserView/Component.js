import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation'

import colors from '../../Common/colors';

import Details from './Components/details';

type Props = {
  user: {},
  navigation: any,
  componentDidMount: () => void,
  onClickEdit: () => void,
}

export default class extends React.Component<Props> {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "User View",
    headerRight: (
      <Icon name="edit" size={24} color="#FFF" style={{ paddingRight: 15 }} onPress={ navigation.getParam('onClickEdit') }/>
    )
  })
  
  componentDidMount = () => {
    this.props.componentDidMount(this.props);
    this.props.navigation.setParams({
      onClickEdit: this._onClickEdit
    })
  }
  _onClickEdit = () => this.props.onClickEdit()

  render() {
    const { user } = this.props;

    return (
      <SafeAreaView style={{ display: 'flex', flex: 1, backgroundColor: colors.primary}}>

        {user && (

          <Details user={user} />

        )}
      
      </SafeAreaView>
    )
  }
}
