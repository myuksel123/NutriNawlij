import React from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import "../App.css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  console.log("render");
  return (
    <div class ="body">
    <div class="header" id="welcome">
    Welcome to NutriNawlij
</div>
<div class = "content">
    I'm here to help you find nutritious foods, nearby :)
    <div class = "options">
    <NavLink to="/questions"><button class="next">
      Let's Begin!</button></NavLink>
</div>
</div>

<div class = "footer">
        Copyright @ Meryem Y
</div>
</div>
  );
}

export default App;