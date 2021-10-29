import React from 'react';
import { Route } from 'react-router';

import routesList from './routes';

export const _ROUTES = routesList.map((route, i) => {
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