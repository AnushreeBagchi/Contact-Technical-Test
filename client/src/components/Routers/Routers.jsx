import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from '../NotFound.jsx';
import Customer from '../Customer/Customer.jsx';


export default function Routers() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Customer}/>
            <Route exact component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}