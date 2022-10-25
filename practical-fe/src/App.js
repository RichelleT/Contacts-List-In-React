import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import styles
import "./App.css";
// import components
import Landing from "./components/landing/Landing";
import Contacts from "./components/contacts/Contacts";

function App() {
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* add routes, header, footer, & toastcontainer in here */}
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
