import constants from '~s/constants';

const __NAMES = constants.banner;
const initialState = {
  images: []
}

const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case __NAMES.BANNER_LOAD:
      return {...state, images: [...action.payload.images]}
    case __NAMES.BANNER_CLEAR:
      return {...state, images: []}
    default:
      return state 
  }
}

export default bannerReducer;