import constants from '~s/constants';
import * as API from '~ROOT/api';

const __NAMES = constants.app;

export const showLoader = () => ({ type: __NAMES.SHOW_LOADER });
export const hideLoader = () => ({ type: __NAMES.HIDE_LOADER });