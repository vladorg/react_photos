import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { _ROUTES } from '~r';
import Loader from '~c/loader'
import Header from '~c/header';

const App = () => {
  const selector = useSelector;
  const {loader: loaderStatus} = selector(state => state.appReducer);

  return (
    <>
      <Loader active={loaderStatus}/>
      
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