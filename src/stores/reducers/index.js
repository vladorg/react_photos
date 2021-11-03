import { combineReducers } from "redux";

import gridReducer from './grid';
import bannerReducer from './banner';
import photoCardReducer from './photoCard';
import userReducer from './user';
import appReducer from './app';

export default combineReducers({
  gridReducer,
  bannerReducer,
  photoCardReducer,
  userReducer,
  appReducer
})