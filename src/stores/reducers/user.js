import constants from '~s/constants';

const __NAMES = constants.user;
const initialState = {
  name: null,
  collections: null,
  likes: null,
  photos: null,
  followers: null,
  thumb: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case __NAMES.USER_LOAD:
      const {name, collections, likes, photos, followers, thumb} = action.payload;

      return {
        ...state,
        name,
        collections,
        likes,
        photos,
        followers,
        thumb
      }
    case __NAMES.USER_CLEAR:
      return {
        ...state,
        name: null,
        collections: null,
        likes: null,
        photos: null,
        thumb: null
      }
    default:
      return state 
  }
}

export default userReducer;