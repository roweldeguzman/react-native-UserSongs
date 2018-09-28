import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from './Component';

const mapStateToProps = () => ({})

const actionCreators = {}

const formConfig = {
  form: 'Albums'
};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));
