import { StyleSheet } from 'react-native';
import colors from '../../../Common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column',
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
    paddingRight: 10
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
});