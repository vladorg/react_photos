import constants from '~s/constants';
import * as API from '~ROOT/api';

const __NAMES = constants.grid;

export const search = (text, limit) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      apiSearch(text, limit)
        .then(images => {
          dispatch({
            type: __NAMES.GRID_LOAD,
            payload: {images}
          })
          resolve();
        })
        .catch(e => {
          console.warn(e);
          reject();
        })
    })    
  } 
}

export const setTag = (tag) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({
          type: __NAMES.GRID_TAG_UPDATE,
          payload: {tag}
        })
        setTimeout(() => resolve(), 500);
      }
      catch(e) {
        console.warn(e);
        reject();
      }
      
    })    
  } 
}




// ### API ###
async function apiSearch(text, limit) {
  try {
    const {results} = await API.searchPhotos(text, limit);
    const images = [];

    results.forEach(el => {
      images.push({
        url: el.urls.small,
        id: el.id
      });
    });

    return images;
  }
  catch(e) {
    throw e;
  }
}