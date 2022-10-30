import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import styles & components
import "./App.css";
import Landing from "./components/landing/Landing";
import Contacts from "./components/contacts/ContactsList";

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
