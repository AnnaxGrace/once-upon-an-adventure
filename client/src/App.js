import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/react-rpg"]}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
