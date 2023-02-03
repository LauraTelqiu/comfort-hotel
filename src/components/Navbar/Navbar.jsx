import React from "react";
import "../Navigation/navigation.css";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../SideBar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      <input type="checkbox" className="checkbox" id="click" hidden />
      <Sidebar />
      <Navigation />
    </div>
  );
}

export default Navbar;
