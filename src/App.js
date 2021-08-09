import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Search from "./components/Search";
import { CharactersProvider } from "./context/Characters";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id">
            <Character />
          </Route>
          <Route path="/">
            <CharactersProvider>
              <Search />
              <Info />
              <Characters />
              <Footer />
            </CharactersProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
