import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from './Component';

import selectAlbum from './Selectors/selectAlbum';

import componentDidMount from './Handlers/componentDidMount';

const mapStateToProps = (state) => ({
  album: selectAlbum(state)
})

const actionCreators = {
  componentDidMount
}

const formConfig = {
  form: 'Albums'
};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));
