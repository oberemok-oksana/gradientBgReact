import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="main-title">Background Generator</h1>
      <input type="color" className="color1" />
      <input type="color" className="color2" />
      <h2>Current css background</h2>
      <div className="wrapper">
        <span className="gradient-text"></span>
        <img src="/clone.png" alt="clone button" />
      </div>
    </>
  );
}

export default App;
