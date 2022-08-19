import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function App() {

  console.log("render");
  return (
    <div class ="body">
    <div class="header" id="welcome">
    Welcome to Nutrim
</div>

<div class = "content">
   <h2> Pick a combination of nutrients, and I'll give you some 
    suggestions ;)
   </h2>
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