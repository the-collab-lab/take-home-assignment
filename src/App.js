import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState("")
  const [formattedText, setFormattedText] = React.useState(null)
  const handleChange = (event) => {
    setTextInput(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormattedText(textInput)
    setTextInput("")
  }

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      {formattedText && <div>{formattedText}</div>}
    </div>
  );
}

export default App;
