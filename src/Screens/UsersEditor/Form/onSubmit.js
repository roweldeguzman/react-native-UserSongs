import { AsyncStorage } from 'react-native'
import NavigationService from '../../../Config/service';
import { appendUser, updateUsersState } from '../../Home/Actions/users';
import { updateUserState } from '../../UserView/Actions/user';

import createUser from '../Services/createUser';
import updateUser from '../Services/updateUser';
import fetchUser from '../../Home/Services/fetchUsers';

export default async (values, dispatch, props) => {
  try {
    const { user } = props;
    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: '0123456789',
      date_of_birth: values.date_of_birth
    }
    if (!user) {
      
      await dispatch(createUser({ data }));    

    } else {
      
      const { id } = user;
      await dispatch(updateUser({ id, data }));

    }
    NavigationService.goBack();

    /* await AsyncStorage.getItem('users')
      .then(async (users) => {
        const userList = users ? JSON.parse(users): [];
        
        if (!user) {
          userList.push(values);
        } else {
          await dispatch(updateUsersState({ ...values, index: user.index }));
          await dispatch(updateUserState(values));
          userList[user.index].first_name = values.first_name;
          userList[user.index].last_name = values.last_name;
          userList[user.index].email = values.email;
        }
        await AsyncStorage.setItem('users', JSON.stringify(userList));
        await dispatch(appendUser(values));
        
      });
    NavigationService.goBack(); */

  } catch (error) {
    
  }
};
