import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home"
import BattleExample from "./pages/BattleExample"
import Team from "./pages/Team"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/react-rpg"]}>
            <Home />
          </Route>
          <Route exact path="/battle">
            <BattleExample />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
