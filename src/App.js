import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Character from "./pages/Character";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    console.log("Hey there, do checkout https://davidsling.in");
  }, []);
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
