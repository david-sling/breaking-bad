import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { CharactersProvider } from "./context/Characters";

ReactDOM.render(
  <CharactersProvider>
    <App />
  </CharactersProvider>,
  document.getElementById("root")
);
