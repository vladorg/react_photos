import React from "react";
import { Link } from "react-router-dom";
import { setUrl } from '~r';

const Card = ({back, image, login, name}) => {
  return (
    <div className="photo-card-section">
      <div className="backTo" onClick={back}>back to prev page</div>
      <div className="slider" style={{backgroundImage: `url(${image})`}}>
        <div className="fullname">
          <Link to={setUrl('user', {login})}>{name}</Link>
        </div>
      </div>
    </div>
  )
}

export default Card;