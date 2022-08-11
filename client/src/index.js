import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home
} from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>,

  document.getElementById("root")
);