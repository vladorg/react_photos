import React from "react";
import Loader from './Loader.jsx';

const LoaderContainer = ({active}) => {
  return (
    <>
      {
        active
        ?
        <Loader/>
        :
        null
      }
    </>
  )
}

export default LoaderContainer;