import "./App.css";
// refactor to the descructed import {useState} from "react" because it's more familiar to me
import React from "react";

function App() {
  // refactor calling useState without referencing React here
  const [textInput, setTextInput] = React.useState(
    "Here is some example text."
  );
  const [textOutput, setTextOutput] = React.useState("");

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextOutput("Your formatted text will go here!");
  };

  // Create two functions, handleUpperCase and handleLowerCase that are
  // wired up to the two buttons for toggling textOutput size

  // If I create a button for clearing textInput and textOutput,
  // create a function called clearTextInputAndOutput that resets the state of each.

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div id="result">{textOutput}</div>
      {/* Create a UI to select/switch between these two modes. */}
      {/* Create two buttons, one that handles upper-casing textOutput and the other that handles lower-casing textOutput */}
      {/* Could be nice to have a button that also that clears textInput and textOutput*/}
    </div>
  );
}

export default App;
