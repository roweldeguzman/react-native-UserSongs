import * as React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

type Props = {
  album: {},
  componentDidMount: () => void
}

export default class extends React.Component<Props> {
  
  /* static navigationOptions = ({ navigation }) => ({}) */

  static navigationOptions = ({navigation}) => { 
    return { 
      
      headerTransparent: true,
      headerStyle: { 
        borderBottomWidth: 0, 
      }
    }
  }

  componentDidMount = () => this.props.componentDidMount(this.props);

  render() {
    
    const { album } = this.props;

    return (
      <View>
        <TouchableOpacity>
          {album && (
            <Image source={{uri: `${album.cover}` }} style={styles.image} />
          )}
        </TouchableOpacity>
        <ScrollView style={styles.scroll }>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text>
          <Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Text a </Text><Text> Rowel de Guzman</Text>
        </ScrollView>
      </View>
    )
    
  };
}


const { width, height } = Dimensions.get('window');
const imageSize = width;

const styles = StyleSheet.create({
  image: {
    width: imageSize,
    height: height / 2,
  },
  scroll: {
    height: height / 2
  }
})