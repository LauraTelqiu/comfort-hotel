import React from "react";
import { socialLinks } from "../../data";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <label htmlFor="click">
        <div className="menu-icon">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </label>
      <ul className="social-icons-list">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="year">
        <p>2023</p>
      </div>
    </div >
  );
}

export default Sidebar;
