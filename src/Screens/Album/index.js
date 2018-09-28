import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from './Component';

import selectAlbumModalVisibility from './Selectors/selectAlbumModalVisibility';
import selectAlbums from './Selectors/selectAlbums';

import componentDidMount from './Handlers/componentDidMount';
import onPressAlbumModalCancel from './Handlers/onPressAlbumModalCancel';
import onPressCreate from './Handlers/onPressCreate';

import onPressDeleteAlbum from './Handlers/onPressDeleteAlbum';
import onPressAlbumView from './Handlers/onPressAlbumView';

import onSubmit from './Form/onSubmit';
import validate from './Form/validate';

const mapStateToProps = (state) => ({
  albums: selectAlbums(state),
  albumModalVisibility: selectAlbumModalVisibility(state)
})

const actionCreators = {
  componentDidMount,
  onPressAlbumModalCancel,
  onPressCreate,
  onPressDeleteAlbum,
  onPressAlbumView
}

const formConfig = {
  form: 'Albums',
  onSubmit,
  validate
};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));
