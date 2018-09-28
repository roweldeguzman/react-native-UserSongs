import { connect } from 'react-redux';

import Component from './Component';

import selectUser from './Selectors/selectUser';

import componentDidMount from './Handlers/componentDidMount';
import onClickEdit from './Handlers/onClickEdit';

const mapStateToProps = (state) => ({
  user: selectUser(state)
})

const actionCreators = {
  componentDidMount,
  onClickEdit
}


export default connect(mapStateToProps, actionCreators)(Component);