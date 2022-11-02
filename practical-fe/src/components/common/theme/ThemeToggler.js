import * as React from "react";
import { ThemeContext } from "./ThemeContext";

export default function SwitchButton() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button className="noBg noBorder" onClick={onClick}>
      <i
        className={`${
          darkMode ? "bi bi-moon-stars-fill" : "bi bi-brightness-high-fill"
        }`}
        style={{ color: `${darkMode ? "navy" : "orange"}` }}
      ></i>
    </button>
  );
}
