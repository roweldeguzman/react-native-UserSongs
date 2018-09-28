import { AsyncStorage } from 'react-native'


export default async (values, dispatch, props) => {
  try {
    
    await AsyncStorage.setItem('userToken', JSON.stringify(values));
    setTimeout(()=>{
      props.navigation.navigate("App")
    }, 500)
    
  } catch (error) {
    
  }
};
