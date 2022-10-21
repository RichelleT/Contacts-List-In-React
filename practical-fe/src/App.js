import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* add routes, header, footer, & toastcontainer in here */}
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
