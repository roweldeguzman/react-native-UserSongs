import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from './Component';

import selectUser from './Selectors/selectUser';
import selectDatePickerVisibility from './Selectors/selectDatePickerVisibility';

import componentDidMount from './Handlers/componentDidMount';
import componentWillUnmount from './Handlers/componentWillUnmount';
import onClickCreate from './Handlers/onClickCreate';
import onClickCancel from './Handlers/onClickCancel';

import onPressSelectDate from './Handlers/onPressSelectDate';
import onCancelDatePicker from './Handlers/onCancelDatePicker';
import onDatePickerConfirm from './Handlers/onDatePickerConfirm';


import onSubmit from './Form/onSubmit';
import validate from './Form/validate';

const mapStateToProps = (state) => ({
  user: selectUser(state),
  datePickerVisibility: selectDatePickerVisibility(state)
})

const actionCreators = {
  componentDidMount,
  componentWillUnmount,
  onClickCreate,
  onClickCancel,
  onPressSelectDate,
  onCancelDatePicker,
  onDatePickerConfirm
}

const formConfig = {
  form: 'Users',
  onSubmit,
  validate
};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));
