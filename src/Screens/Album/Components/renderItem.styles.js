import { StyleSheet } from 'react-native';
import colors from '../../../Common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  itemList: {
    flex: 1,    
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10    
  },
  arrow: {
    position: 'absolute',
    right: 0,
    lineHeight: 40,
    paddingRight: 10
  },
  title: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  artist: {
    color: 'red'
  }
});