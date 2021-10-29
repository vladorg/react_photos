import React from "react";

const HeaderContainer = () => {
  return (
    <div className="header">
      <a aria-current="page" className="logo active" href="/">
        <img src="./build/images/logo.png"/>
      </a>
      <div className="menu">
        <a className="item" href="/all/">All</a>
        <a className="item" href="/animal/3330452">Animals</a>
        <a className="item" href="/films/4694315">Films</a>
        <a className="item" href="/food&amp;drink/3330455">Food&amp;Drink</a>
        <a className="item" href="/nature/3330448">Nature</a>
      </div>
      <a className="item" href="/login/">Login</a>
    </div>
  )
}

export default HeaderContainer;