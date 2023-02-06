import React from 'react'
import crown from "../../assets/crown.png"
import "./header.css"

function Header() {
  return (
    <header className="header" id='header'>
      <div className="brand">
        <div>
          <img src={crown} width="80" />
        </div>
        <h3 className="hotel-heading">Royal Hotel</h3>
      </div>

      <div className="banner">
        <h1 className="banner-heading">Welcome to Royal Hotel</h1>
        <p className="banner-paragraph">Make your life luxurious</p>
        <button className="banner-button">Check Out</button>
      </div>
    </header>
  )
}

export default Header
