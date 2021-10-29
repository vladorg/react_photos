import Home from '~p/home';
import Card from '~p/card';
import User from '~p/user';
import Page404 from '~p/page404';

const routesList = [
  {
    name: 'home',
    component: Home,
    path: '/',
    exact: true
  },
  {
    name: 'card',
    component: Card,
    path: '/card',
    exact: true
  },
  {
    name: 'user',
    component: User,
    path: '/user',
    exact: true
  },
  
  {
    name: 'page404',
    component: Page404,
    path: '404'
  }
];


export default routesList;