import { StyleSheet, Dimensions, Platform} from 'react-native';

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const isIphoneX = Platform.OS === 'ios' && ((height === 812 || width === 812) || (height === 896 || width === 896))

const initialSubtractor = 280;

const imageHeight = (Platform.OS === 'ios' ? height - ( isIphoneX ? 335 : initialSubtractor ) : height - initialSubtractor)

export default StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageHeight,
  },
})