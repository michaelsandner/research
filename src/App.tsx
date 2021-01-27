import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Archive from './archive';
import Secret from './secret';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/secret"}>
            <Secret/>
          </Route>
          <Route path={process.env.PUBLIC_URL + "/"}>
            <Archive />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
