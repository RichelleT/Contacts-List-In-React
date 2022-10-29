import * as React from "react";
// import styles & components
import "../../../styles/header.css";
// import { ThemeContext } from "../theme/ThemeContext";
// import ThemeToggler from "../theme/ThemeToggler";

function Header() {
  // const theme = React.useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="spanLeft">
            <a href="/" style={{ textDecoration: "none" }}>
              <span className="navbar-brand mb-0 h1">Contacts</span>
            </a>
          </div>
          <div className="spanRight">
            <span>Hello, user.</span>
            {/* <ThemeToggler /> */}
            {/* <button className="custButton">Log Out</button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
