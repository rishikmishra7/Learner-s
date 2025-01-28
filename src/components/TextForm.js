import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Convert to Uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase', 'success');
  };

  // Convert to Lowercase
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase', 'success');
  };

  // Clear Text
  const handleClearText = () => {
    setText("");
    props.showAlert('Text cleared', 'success');
  };

  // Remove Extra Spaces
  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert('Extra spaces removed', 'success');
  };

  // Handle Textarea Change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Get style for current mode
  const modeStyle = {
    backgroundColor: props.mode === 'dark' ? '#333' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        style={modeStyle}
        value={text}
        onChange={handleOnChange}
        rows="8"
      ></textarea>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} disabled={!text}>Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick} disabled={!text}>Lowercase</button>
      <button className="btn btn-danger mx-1" onClick={handleClearText} disabled={!text}>Clear</button>
      <button className="btn btn-warning mx-1" onClick={handleRemoveSpaces} disabled={!text}>Remove Spaces</button>
      <div className="my-3">
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((word) => word.length !== 0).length} words and {text.length} characters</p>
        <p>{(0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length).toFixed(2)} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter text above to preview it here.'}</p>
      </div>
    </div>
  );
}
