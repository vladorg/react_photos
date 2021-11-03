import React from "react";
import { Link } from "react-router-dom";
import { routesMap } from '~r';
import { __ROOT } from '~r/routes';

const Header = ({categories, search}) => {

  const list = categories.map(el => {
    return <a key={el.tag} className="item" href="#" onClick={e => search(e, el.tag)}>{el.name}</a>
  })

  return (
    <div className="header">
      <Link to={routesMap.home} className="logo active">
        <img src={__ROOT+"/images/logo.png"} />
      </Link>
      <div className="menu">
        {list}
      </div>
      <a className="item" href="#"></a>
    </div>
  )
}

export default Header;