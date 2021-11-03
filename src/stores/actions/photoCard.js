import constants from '~s/constants';
import * as API from '~ROOT/api';

const __NAMES = constants.photoCard;

export const load = (id) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      apiLoad(id)
        .then(payload => {
          dispatch({
            type: __NAMES.PHOTO_LOAD,
            payload
          });
          resolve();
        })     
        .catch(e => {
          console.warn(e);
          reject();
        })   
    })    
  } 
}

export const clear = () => ({type: __NAMES.PHOTO_CLEAR});




// ### API ###
async function apiLoad(photoId) {
  try {
    const data = await API.getPhotoById(photoId);
    const {urls: {regular: imageUrl}, user: {name, username: login} } = data;

    return {imageUrl, name, login};
  }
  catch(e) {
    throw e;
  }
}