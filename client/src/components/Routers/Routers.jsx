import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from '../NotFound.jsx';
import User from '../User/User.jsx';
import Result from '../Result/Result.jsx';


export default function Routers() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={User}/>
            <Route exact path="/result" component={Result}/>
            <Route exact component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}