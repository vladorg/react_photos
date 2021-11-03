import constants from '~s/constants';

const __NAMES = constants.photoCard;
const initialState = {
  imageUrl: null,
  author: {
    name: null,
    login: null
  }
}

const photoCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case __NAMES.PHOTO_LOAD:
      const {imageUrl, name, login} = action.payload;

      return {
        ...state,
        imageUrl,
        author: {
          ...state.author,
          name,
          login
        }
      }
    case __NAMES.PHOTO_CLEAR:
      return {
        ...state,
        imageUrl: null,
        author: {
          ...state.author,
          name: null,
          login: null
        }
      }
    default:
      return state 
  }
}

export default photoCardReducer;