import constants from '~s/constants';

const __NAMES = constants.app;
const initialState = {
  loader: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case __NAMES.SHOW_LOADER:
      return {...state, loader: true}
    case __NAMES.HIDE_LOADER:
      return {...state, loader: false}
    default:
      return state 
  }
}

export default appReducer;