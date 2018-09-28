import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  input: {
    width: "90%",
    marginLeft: "5%",
    marginRight: '5%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    height: 35,
    color: "black",
    backgroundColor: "#DDDDDD",    
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#DDD"
  },
  fieldWrapper: {
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden'
  },
  button: {
    borderRadius: 10,
    width: 80,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    justifyContent: 'space-between'
  }
});