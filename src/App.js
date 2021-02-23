import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form>
        <label>
          <textarea value="Enter text here"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
