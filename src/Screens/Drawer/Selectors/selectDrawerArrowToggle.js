import { createSelector } from 'reselect';

const selectDrawerToggleArrow = (state) => state.screens.Drawer.drawerArrowToggle;

export default createSelector(
  selectDrawerToggleArrow,
  (toggleArrow) => toggleArrow
)
