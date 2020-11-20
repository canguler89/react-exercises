import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Section2 from "./components/Section2";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/section">
            <Section2 />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
