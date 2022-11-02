import * as React from "react";
import ReactDom from "react-dom";
import "../../styles/renameModal.css";
import { ThemeContext } from "../common/theme/ThemeContext";

export default function RenameModal({ open, children }) {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className={`${darkMode ? "modalStyle" : "modalStyleDark"}`}>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
