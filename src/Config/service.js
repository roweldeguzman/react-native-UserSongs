let _navigator;

const setNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
}

const getNavigator = () => _navigator;
const getNavigation = () => _navigator._navigation;
const goBack = () => _navigator._navigation.goBack();
const popToTop = () => _navigator._navigation.popToTop();


export default {
  setNavigator,
  getNavigator,
  getNavigation,
  goBack,
  popToTop
}