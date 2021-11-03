import React from "react";
import { __ROOT } from '~r/routes';

const Loader = () => {
  return (
    <div className="loading">
      <img src={__ROOT+"/images/loader1.gif"} alt="" />
    </div>
  )
}

export default Loader;