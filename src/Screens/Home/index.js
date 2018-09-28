import { connect } from 'react-redux';
import { withConfig } from '../../Contexts/ConfigContext';
import Component from './Component';

import selectUsers from './Selectors/selectUsers';
import selectPullRefreshStatus from './Selectors/selectPullRefreshStatus';
import selectIsFetching from './Selectors/selectIsFetching';

import componentDidMount from './Handlers/componentDidMount';
import onPullRefresh from './Handlers/onPullRefresh';
import onClickLogout from './Handlers/onClickLogout';
import onClickViewUser from './Handlers/onClickViewUser';
import onClickDelete from './Handlers/onClickDelete';

import onEndReached from './Handlers/onEndReached';

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  pullRefreshStatus: selectPullRefreshStatus(state),
  isFetching: selectIsFetching(state)
})

const actionCreators = {
  componentDidMount,
  onClickLogout,
  onClickViewUser,
  onPullRefresh,
  onClickDelete,
  onEndReached
}

export default connect(mapStateToProps, actionCreators)(Component);
