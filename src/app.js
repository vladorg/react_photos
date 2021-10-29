import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import { _ROUTES } from '~r';
import Header from '~c/header';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          {_ROUTES}
          <Redirect to="/404"/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;