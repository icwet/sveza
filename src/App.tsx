import React from "react";
import { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface AppProps {
  
}

const App: FC<AppProps> = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/profile2">Profile2</Link>
              </li>
              <li>
                <Link to="/profile3">Profile3</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              {/*<Home />*/}
            </Route>
            <Route path="/profile1">
              {/*<Home />*/}
            </Route>
            <Route path="/profile2">
              {/*<Home />*/}
            </Route>
            <Route path="/profile3">
              {/*<Home />*/}
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App
