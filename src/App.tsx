import React from "react";
import { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./components/Home";

interface AppProps {

}

const App: FC<AppProps> = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/profile1">

            </Route>
            <Route path="/profile2">

            </Route>
            <Route path="/profile3">

            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App
