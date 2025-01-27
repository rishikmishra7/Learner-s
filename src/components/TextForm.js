import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  // Convert to Uppercase Handler
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log("Text after uppercase:", newText);  // Debugging log
    props.showAlert('Converted to uppercase', 'success');
  };

  // Convert to Lowercase Handler
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    console.log("Text after lowercase:", newText);  // Debugging log
    props.showAlert('Converted to lowercase', 'success');
  };

  // Clear Text Handler
  const handleClearOnClick = () => {
    setText('');
    console.log("Text after clearing:", '');  // Debugging log
    props.showAlert('Text has been cleared', 'success');
  };

  // Remove Extra Spaces Handler
  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    console.log("Text after removing extra spaces:", newText);  // Debugging log
    props.showAlert('Extra spaces removed', 'success');
  };

  // OnChange Handler for Textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("Text onChange:", event.target.value);  // Debugging log
  };

  // Style based on mode
  const getModeStyle = () => {
    return props.mode === 'dark'
      ? { backgroundColor: '#333', color: 'white' }
      : { backgroundColor: 'white', color: 'black' };
  };

  const modeStyle = getModeStyle();

  return (
    <>
      <div className="container" style={modeStyle}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={modeStyle}
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearOnClick}>
          Clear Text
        </button>
        <button className="btn btn-warning mx-1" onClick={handleRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: modeStyle.color }}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((word) => word.length !== 0).length} words and {text.length} characters</p>
        <p>{(0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length).toFixed(2)} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter some text above to preview it here.'}</p>
      </div>
    </>
  );
}
