import * as React from 'react';
import { Field } from 'redux-form';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import styles from './UsersForm.styles';

import TextField from '../../../Common/Components/TextField';

type Props = {
  user: {},
  datePickerVisibility: boolean,
  onClickCreate: () => void,
  onClickCancel: () => void,

  onPressSelectDate: () => void,
  onCancelDatePicker: () => void,
  onDatePickerConfirm: () => void
}

export default ({
  user,
  datePickerVisibility,

  onClickCreate,
  onClickCancel,

  onPressSelectDate,
  onCancelDatePicker,
  onDatePickerConfirm
}: Props) => (
  
  <React.Fragment>

    <View style={styles.fieldWrapper}>
      <Field
        name="first_name"
        placeholder="First Name"
        style={styles.input}
        component={TextField}
      />
    </View>

    <View style={styles.fieldWrapper}>
      <Field 
        name="last_name"
        placeholder="Last Name"        
        style={styles.input}
        component={TextField}
      />
    </View>

    <View style={styles.fieldWrapper}>
      <Field 
        name="email"
        placeholder="Email"
        style={styles.input}
        component={TextField}
      />
    </View>
    <View style={styles.fieldWrapper}>
      <Field 
        name="date_of_birth"
        placeholder="Date of Birth"
        style={styles.input}
        component={TextField}
        onFocus={onPressSelectDate}
      />
      <DateTimePicker
        isVisible={datePickerVisibility}
        onConfirm={onDatePickerConfirm}
        onCancel={onCancelDatePicker}
      />
    </View>

    <View style={{ flexDirection: 'row'}}>
      <TouchableOpacity style={styles.button} onPress={onClickCreate}>
        <Text> { user ? 'Update' : 'Create' } </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#ff9800' }]} onPress={onClickCancel}>
        <Text style={{ color: '#FFFFFF' }}> Cancel </Text>
      </TouchableOpacity>
    </View>

  </React.Fragment>
)