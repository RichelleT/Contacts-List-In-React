import React from "react";
import { useNavigate } from "react-router-dom";
// import styles & components
import "../../styles/landing.css";
import { ThemeContext } from "../common/theme/ThemeContext";
import ThemeToggler from "../common/theme/ThemeToggler";

function Landing() {
  let navigate = useNavigate();

  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [username, setName] = React.useState();
  const [error, setError] = React.useState(false);
  const [showErrorText, setShowErrorText] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const ref = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/contacts");
  };

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
    setName(event.target.value);
  };

  return (
    <div className={`${darkMode ? "custBg" : "custBgDark"}`}>
      <div className="container pt-auto custMt noBg noBorder">
        <div className="row d-flex">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card border-primary">
              <div className="custTitle">
                Sign In <ThemeToggler />
              </div>
              <div className="contBody">
                <form onSubmit={handleSubmit}>
                  <label>Username</label>
                  <input
                    type="text"
                    value={username}
                    onBlur={handleBlur}
                    style={style(error)}
                    ref={ref}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    name="username"
                    id="username"
                    placeholder="Enter Name"
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
                  <button className="custButton">Enter</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
