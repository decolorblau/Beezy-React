import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RickAndMortyContextProvider from "./store/contexts/RickAndMortyContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <RickAndMortyContextProvider>
      <App />
    </RickAndMortyContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
