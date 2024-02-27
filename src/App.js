import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="http://github.com/Ajeibi">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="http://github.com/Ajeibi">
          Oche
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
