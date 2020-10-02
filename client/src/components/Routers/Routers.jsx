import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from '../NotFound.jsx';
import user from '../user/user.jsx';


export default function Routers() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={user}/>
            <Route exact component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}