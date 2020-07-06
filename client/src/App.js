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
import World from "./features/world";
import Store from "./config/store";
import CastleGame from "./pages/CastleGame";
import ForestGame from "./pages/ForestGame";
import CliffGame from "./pages/CliffGame";
import GameContext from "./utils/GameContext";

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

            <Route path="/user/:id?">
              <User />
            </Route>

            <Route path="/continue/:id?">
              <Continue />
            </Route>

            <Route path="/new/:id?">
              <New />
            </Route>

            <Route path="/castle/:id?">
              <CastleGame />
            </Route>

            <Route path="/forest/:id?">
              <ForestGame />
            </Route>

            <Route path="/cliffs/:id?">
              <CliffGame />
            </Route>

            <Route path="/test" component={WorldPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


const WorldPage  = () => (<div id="this-window"><World /></div>)
