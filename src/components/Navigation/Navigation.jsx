



// import { useState } from "react";

import "./navigation.css";
import { pageLinks } from "../../data";

function Navigation() {
  // const [showNav, setShowNav] = useState(true);




  return (
    <nav className="navigation">
      {/* <nav className={`navigation ${showNav ? "" : "hide"}`}> */}
      <div className="navigation-header">
        <h1 className="navigation-heading">Royal Hotel</h1>
      </div>
      <ul className="navigation-list">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id} className="navigation-item">
              <a
                href={href}
                className="navigation-link"

              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="copyright">
        <p>&copy; 2023. Royal Hotel. All Rights Reserved</p>
      </div>
    </nav >
  );
}

export default Navigation;



