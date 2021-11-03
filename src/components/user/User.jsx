import React from "react";

const User = ({thumb, name, collections, likes, photos, followers}) => {
  return (
    <div className="user-card-section">
      <div className="user-photo">
        <img src={thumb} alt=""/>
      </div>
      <div className="user-information">
        <p className="name">Fullname: {name}</p>
        <p>Collections: {collections}</p>
        <p>Likes: {likes}</p>
        <p>Total photos: {photos}</p>
        <p>Followers count: {followers}</p>
      </div>
    </div>
  )
}

export default User;