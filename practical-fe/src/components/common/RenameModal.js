import * as React from "react";
import ReactDom from "react-dom";
import "../../styles/renameModal.css";

export default function RenameModal({ open, children }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modalStyle">{children}</div>
    </>,
    document.getElementById("portal")
  );
}
