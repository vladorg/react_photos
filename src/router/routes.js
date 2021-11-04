import Home from '~p/home';
import Photo from '~p/photo';
import User from '~p/user';
import Page404 from '~p/page404';

// export const __ROOT = '/react_photos'; // deploy only
export const __ROOT = '';

const routesList = [
  {
    name: 'home',
    component: Home,
    path: __ROOT+'/',
    exact: true
  },
  {
    name: 'photo',
    component: Photo,
    path: __ROOT+'/photo/:id',
    exact: true
  },
  {
    name: 'user',
    component: User,
    path: __ROOT+'/user/:login',
    exact: true
  },
  
  {
    name: 'page404',
    component: Page404,
    path: __ROOT+'/404'
  }
];


export default routesList;