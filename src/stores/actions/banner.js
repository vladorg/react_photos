import constants from '~s/constants';
import * as API from '~ROOT/api';

const __NAMES = constants.banner;

export const load = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      apiLoad()
        .then(images => {
          dispatch({
            type: __NAMES.BANNER_LOAD,
            payload: {images}
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

export const clear = () => ({type: __NAMES.BANNER_CLEAR})




// ### API ###
async function apiLoad() {
  try {
    const data = await API.loadBanner();
    const images = [];

    data.forEach(el => {
      images.push(el.urls.regular);
    });

    return images;
  }
  catch(e) {
    throw e;
  }
}