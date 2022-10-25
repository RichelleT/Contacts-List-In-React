import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/landing/Landing";

function App() {
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* add routes, header, footer, & toastcontainer in here */}
      <Routes>
        <Route path="/" exact element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
