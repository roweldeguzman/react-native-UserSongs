import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {    
    height: 35,
    marginLeft: 5,
    marginRight: 5
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#DDD',
    borderStyle: 'solid',
    borderWidth: 1
  },
  label: {
    flex: 0.4,
    backgroundColor: '#ccc',
    paddingLeft: 5
  },
  text: {
    lineHeight: 35
  }
});