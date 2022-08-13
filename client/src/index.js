import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import {
  Home,
  Questions,
  Catalog
} from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path= "/questions" component = {Questions}/>
      <Route exact path = "/catalog" component = {Catalog}/>
    </Switch>
  </Router>,

  document.getElementById("root")
 
);