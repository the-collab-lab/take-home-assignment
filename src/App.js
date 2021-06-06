import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState('Here is Some Example Text.');
  const [textOutput, setTextOutput] = React.useState('');

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleUppercase = event => {
    setTextOutput(textInput.toUpperCase())
  };
  const handleLowercase = event => {
    setTextOutput(textInput.toLowerCase())
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput}/>
        </label>
        <button onClick={handleUppercase}>
          Change to UPPERCASE
        </button>
        <button onClick={handleLowercase}>
          Change to lowercase
        </button>
      </form>
      <div id="result">
        {textOutput}
      </div>
    </div>
  );
}

export default App;
