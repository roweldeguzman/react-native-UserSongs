import { connect } from 'react-redux';
import Component from './Component';

import selectTractControlVisibility from './Selectors/selectTractControlVisibility';
import selectPlayerConfig from './Selectors/selectPlayerConfig';

import componentDidMount from './Handlers/componentDidMount';
import onPressHideTrackControls from './Handlers/onPressHideTrackControls';
import onPressShowTrackControls from './Handlers/onPressShowTrackControls';


import onVideoLoad from './Handlers/onVideoLoad';

const mapStateToProps = (state) => ({
  tractControlVisibility: selectTractControlVisibility(state),
  playerConfig: selectPlayerConfig(state)
})

const actionCreators = {
  componentDidMount,
  onPressHideTrackControls,
  onPressShowTrackControls,

  onVideoLoad
}

export default connect(mapStateToProps, actionCreators)(Component);
