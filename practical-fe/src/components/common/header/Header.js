import * as React from "react";
import "../../../styles/header.css";
import RenameModal from "../RenameModal";
import { ThemeContext } from "../theme/ThemeContext";
import ThemeToggler from "../theme/ThemeToggler";

function Header() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [isOpen, setIsOpen] = React.useState(false);

  let userName = localStorage.getItem("username");

  const [username, setNewName] = React.useState(userName);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const [error, setError] = React.useState(false);
  const [showErrorText, setShowErrorText] = React.useState(false);
  const ref = React.useRef();

  const handleBlur = (event) => {
    if (!error) {
      if (event.target.validity.patternMismatch) {
        ref.current.focus();
        setError(true);
        setShowErrorText(true);
      }
    }
    if (error) {
      setShowErrorText(false);
    }
  };

  const handleFocus = () => {
    if (error) {
      setShowErrorText(true);
    }
  };

  function style(error) {
    if (error) {
      return {
        backgroundColor: "rgba(255, 0, 0, 0.5)",
      };
    }
  }

  const handleChange = (event) => {
    const newValueIsValid = !event.target.validity.patternMismatch;
    if (error) {
      if (newValueIsValid) {
        setError(false);
        setShowErrorText(false);
      }
    }
    if (event.target.value.length > 3 && event.target.value.length < 16) {
      setNewName(event.target.value);
    }
  };

  React.useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

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
            {!isOpen && <span>Hello, {userName}!&nbsp;</span>}
            {!isOpen && (
              <button className="iconBtn" onClick={() => setIsOpen(true)}>
                <i
                  class="bi bi-pencil-square fs-5"
                  style={{ color: "#ff9999" }}
                ></i>
              </button>
            )}
            <RenameModal open={isOpen} onClose={() => setIsOpen(false)}>
              <form onSubmit={handleSubmit}>
                <label>
                  <span>Enter new name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Name"
                    onBlur={handleBlur}
                    style={style(error)}
                    ref={ref}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    pattern=".{4,15}"
                    required
                  />
                  {showErrorText && (
                    <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                      Please make sure username is between 4 and 15 characters.
                    </p>
                  )}
                  <br />
                  <br />
                  <button type="submit" className="updBtn">
                    Update Name
                  </button>{" "}
                  <br />
                </label>
              </form>
            </RenameModal>
            <ThemeToggler />
            {/* <button className="custButton">Log Out</button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
