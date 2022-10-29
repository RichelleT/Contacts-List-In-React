import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./components/common/theme/ThemeContext";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //<React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </ThemeProvider>
  //</React.StrictMode>
);

reportWebVitals();
