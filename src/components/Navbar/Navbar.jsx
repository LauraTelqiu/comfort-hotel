import React from "react";
import "../Navigation/navigation.css";
import Navigation from "../Navigation/Navigation"
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar" id='navbar'>
      <input type="checkbox" className="checkbox" id="click" hidden />
      <Sidebar />
      <Navigation />
    </div>
  );
}

export default Navbar;
