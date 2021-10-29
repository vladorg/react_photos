import React from "react";

const BannerContainer = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1594975559027-c35bfa5de65e?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMjU1OX0';
  
  return (
    <div className="slider" style={{backgroundImage: `url(${imageUrl})`}}></div>
  )
}

export default BannerContainer;