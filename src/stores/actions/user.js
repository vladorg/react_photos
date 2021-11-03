import constants from '~s/constants';
import * as API from '~ROOT/api';

const __NAMES = constants.user;

export const load = login => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      apiLoad(login)
        .then(payload => {
          dispatch({
            type: __NAMES.USER_LOAD,
            payload
          });
          setTimeout(() => resolve(), 500);
        })
        .catch(e => {
          console.warn(e);
          reject();
        })        
    })    
  } 
}

export const clear = () => ({type: __NAMES.USER_CLEAR});




// ### API ###
async function apiLoad(login) {
  try {
    const data = await API.getUserInfo(login);
    const {
      name, 
      total_collections: collections, 
      total_likes: likes, 
      total_photos: photos,
      followers_count: followers, 
      profile_image: {large: thumb}
    } = data;

    return {name, collections, likes, photos, followers, thumb}
  }
  catch(e) {
    throw e;
  }
}