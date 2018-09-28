import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './Component';

import componentDidMount from './Handlers/componentDidMount';
import onClickLogin from './Handlers/onClickLogin';


import onSubmit from './Form/onSubmit';
import validate from './Form/validate';

const mapStateToProps = () => ({})

const actionCreators = {
  componentDidMount,
  onClickLogin
}

const formConfig = {
  form: 'Login',
  onSubmit,
  validate
};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));