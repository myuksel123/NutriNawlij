import React from "react";
import Axios from "axios";
import "../App.css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [isLoading, setLoading] = React.useState(true);

  if (isLoading) {
    console.log('Loading');
    return <div className="App">Loading...</div>;
  }

  // pass the height, width, and data as props to <LineChart />
  // data object contains label (X-Axis) and value (Y-Axis) as well as the tooltipContent we want to show hovering over the chart
  console.log("render");
  return (
    <Router>
      <div className="home">        
        <div class="container">
        </div>
      </div>
    </ Router>
  );
}

export default App;