import request from "./request";

export const searchPhotos = (text = 'random', limit = 10) => request(`search/photos?query=${text}&per_page=${limit}`);
export const loadBanner = () => request(`photos/random?orientation=landscape&content_filter=high&count=20`);
export const getPhotoById = id => request(`photos/${id}?`);
export const getUserInfo = login => request(`users/${login}?`);