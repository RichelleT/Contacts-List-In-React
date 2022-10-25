import React from "react";
// import styles & components
import "../../styles/header.css";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <div className="spanLeft">
            <a href="/" style={{ textDecoration: "none" }}>
              <span className="navbar-brand mb-0 h1">Contacts</span>
            </a>
          </div>
          <div className="spanRight">
            <span>Hello, user.</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
