import * as React from 'react';
import { SafeAreaView } from 'react-navigation'

import Layout from './Components/Layout';
import UsersForm from './Components/UsersForm';

type Props = {
  user: {},
  datePickerVisibility: boolean,
  componentDidMount: () => void,
  componentWillUnmount: () => void,
  onClickCreate: () => void,
  onClickCancel: () => void,

  onPressSelectDate: () => void,
  onCancelDatePicker: () => void,
  onDatePickerConfirm: () => void
}

export default class extends React.Component<Props> {

  componentDidMount = () => this.props.componentDidMount(this.props)
  
  componentWillUnmount = () => this.props.componentWillUnmount();

  render() {
    const {
      user,
      datePickerVisibility,
      onClickCreate,
      onClickCancel,

      onPressSelectDate,
      onCancelDatePicker,
      onDatePickerConfirm
    } = this.props;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F5FCFF'}}>

        <Layout>
          
          <UsersForm
            onClickCreate={onClickCreate}
            onClickCancel={onClickCancel}
            datePickerVisibility={datePickerVisibility}
            onPressSelectDate={onPressSelectDate}
            onCancelDatePicker={onCancelDatePicker}
            onDatePickerConfirm={onDatePickerConfirm}
            user={ user }
          />

        </Layout>

      </SafeAreaView>
    )
  }
}
