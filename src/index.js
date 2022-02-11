import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MarvelContextProvider from "./store/contexts/MarvelContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <MarvelContextProvider>
      <App />
    </MarvelContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
