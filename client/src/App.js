import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home"
import BattleExample from "./pages/BattleExample"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/react-rpg"]}>
            <Home />
          </Route>
          <Route exact path={["/battle", "/react-rpg"]}>
            <BattleExample />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
