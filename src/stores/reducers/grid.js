import constants from '~s/constants';

const __NAMES = constants.grid;
const initialState = {
  images: [],
  tag: 'random'
}

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case __NAMES.GRID_LOAD:
      return {...state, images: [...action.payload.images]}  
    case __NAMES.GRID_TAG_UPDATE:
      return {...state, tag: action.payload.tag}
    default:
      return state 
  }
}

export default gridReducer;