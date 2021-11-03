import React from 'react';
import { Route } from 'react-router';

import routesList from './routes';

const _ROUTES = routesList.map((route, i) => {
  return (
    <Route
      key={i}
      path={route.path}
      component={route.component}
      exact={route.exact}
    >
    </Route>
  )
});

const routesMap = {};

routesList.map(route => {
  routesMap[route.name] = route.path;
});

const setUrl = (name, params) => {
  if(!routesMap.hasOwnProperty(name)){
    return null;
  }

  let url = routesMap[name];

  for(let key in params){
    url = url.replace(':' + key, params[key]);
  }

  return url;
}

export {_ROUTES, routesMap, setUrl};