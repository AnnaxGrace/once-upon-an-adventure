import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import BattleExample from "./pages/BattleExample";
import Team from "./pages/Team";
import User from "./pages/User";
import Continue from "./pages/Continue";
import New from "./pages/New";


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

            <Route exact path="/user">
              <User />
            </Route>

            <Route exact path="/continue">
              <Continue />
            </Route>

            <Route exact path="/new">
              <New />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
