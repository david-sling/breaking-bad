import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Character from "./pages/Character";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" component={Character} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
