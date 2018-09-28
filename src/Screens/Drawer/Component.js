import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  drawerArrowToggle: boolean,

  onClickArrowToggle: () => void,
  onClickLogout: () => void
}

export default class extends React.Component<Props> {

  render () {
    const {
      drawerArrowToggle,
      onClickArrowToggle,
      onClickLogout
    } = this.props
    
    return (
      <ScrollView>

        <SafeAreaView style={{ flex: 1, top: -5}} forceInset={{ horizontal: 'never' }}>

          <TouchableWithoutFeedback onPress={()=> onClickArrowToggle(!drawerArrowToggle) }>

            <View style={styles.container} >
              {/* <ImageBackground source={{uri: 'https://d18xnemlclfnmm.cloudfront.net/3418899683/1490607528_1424130911_2_37.jpg'}} style={{width: '100%', height: '100%'}}> */}
              <Image style={styles.profile} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />

              <View style={styles.detailContainer}>

                <Text style={styles.name}>Rowel de Guzman</Text>

                <Text style={styles.email}>rowel.deguzman@roweldev.com</Text>

                <Ionicons name="ios-arrow-dropdown-circle" style={[styles.icon, { 
                  transform: [{
                    rotate: drawerArrowToggle ? '180deg' : '0deg'
                  }],                
                }]} />

              </View>
              {/* </ImageBackground> */}
            </View>
          </TouchableWithoutFeedback>
          
          <TouchableOpacity onPress={onClickLogout}>
            <Text style={{ padding: 10, paddingLeft: 15}}>
              Logout
            </Text>
          </TouchableOpacity>

          <DrawerItems {...this.props} />

        </SafeAreaView>

      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f50057',
    height: 140
  },
  profile: {
    width: 50,
    height: 50,
    left: 10, 
    top: 25,
    borderRadius: 25
  },
  detailContainer: {
    top: 40,
  },
  name: {
    color: 'white',
    left: 10,
    top: '35%',
    fontWeight: 'bold'
  },
  email: {
    color: 'white',
    left: 10,
    top: '35%'
  },
  icon: {
    color: '#FFF',
    right: 15,
    fontWeight: 'bold',
    position: 'absolute',
    fontSize: 18,
    top: '80%',
  }
})