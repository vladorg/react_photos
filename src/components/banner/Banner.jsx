import React from "react";

const Banner = ({image}) => {
  return (
    <div className="slider" style={{backgroundImage: `url(${image})`}}></div>
  )
}

export default Banner;