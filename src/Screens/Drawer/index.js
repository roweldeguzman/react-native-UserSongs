import { connect } from 'react-redux';
import { withConfig } from '../../Contexts/ConfigContext';
import Component from './Component';

import selectDrawerArrowToggle from './Selectors/selectDrawerArrowToggle'

import onClickArrowToggle from './Handlers/onClickArrowToggle';
import onClickLogout from './Handlers/onClickLogout';

const mapStateToProps = (state) => ({
  drawerArrowToggle: selectDrawerArrowToggle(state)
})

const actionCreators = {
  onClickArrowToggle,
  onClickLogout
}

export default withConfig(connect(mapStateToProps, actionCreators)(Component));
