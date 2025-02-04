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

  // Alternate Case (first character uppercase, second lowercase, etc.)
  const handleAlternateCase = () => {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      newText += i % 2 === 0 ? text[i].toUpperCase() : text[i].toLowerCase();
    }
    setText(newText);
    props.showAlert('Alternated character case', 'success');
  };

  // Copy to Clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard', 'success');
  };

  // Reverse Text
  const handleReverseText = () => {
    setText(text.split('').reverse().join(''));
    props.showAlert('Text reversed', 'success');
  };

  // Capitalize First Letter of Each Word
  const handleCapitalizeFirstLetter = () => {
    const newText = text.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    setText(newText);
    props.showAlert('First letter of each word capitalized', 'success');
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
    <div className="container mx-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
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
      <button className="btn btn-primary mx-1" onClick={handleAlternateCase} disabled={!text}>Alternate Case</button>
      <button className="btn btn-primary mx-1" onClick={handleReverseText} disabled={!text}>Reverse Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyToClipboard} disabled={!text}>Copy to Clipboard</button>
      <button className="btn btn-primary mx-1" onClick={handleCapitalizeFirstLetter} disabled={!text}>Capitalize First Letter</button>
      <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces} disabled={!text}>Remove Spaces</button>
      <button className="btn btn-danger mx-1" onClick={handleClearText} disabled={!text}>Clear</button>
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