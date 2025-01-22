import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let ntext = text.toLowerCase();
    setText(ntext);
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleClearOnClick = () => {
    let clearText = '';
    setText(clearText);
    props.showAlert('Text has been cleared', 'success');
  };

  const getModeStyle = () => {
    switch (props.mode) {
      case 'dark':
        return { backgroundColor: '#333', color: 'white' };
      case 'yellow':
        return { backgroundColor: '#f9f871', color: '#333' };
      case 'pink':
        return { backgroundColor: '#ffc0cb', color: '#333' };
      case 'green':
        return { backgroundColor: '#a8e6cf', color: '#333' };
      case 'blue':
        return { backgroundColor: '#add8e6', color: '#333' };
      default:
        return { backgroundColor: 'white', color: 'black' };
    }
  };

  const [text, setText] = useState('');
  const modeStyle = getModeStyle();

  return (
    <>
      <div className="container" style={modeStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="TextBox"
            onChange={handleOnChange}
            style={modeStyle}
            value={text}
            rows="8"
          ></textarea>
        </div>
              <button
        className="btn mx-2"
        style={{ backgroundColor: props.mode === 'dark' ? '#6c757d' : props.mode === 'yellow' ? '#fdd835' : props.mode === 'pink' ? '#ff69b4' : props.mode === 'green' ? '#28a745' : props.mode === 'blue' ? '#007bff' : '#0d6efd', color: 'white' }}
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        className="btn mx-2"
        style={{ backgroundColor: props.mode === 'dark' ? '#6c757d' : props.mode === 'yellow' ? '#fdd835' : props.mode === 'pink' ? '#ff69b4' : props.mode === 'green' ? '#28a745' : props.mode === 'blue' ? '#007bff' : '#0d6efd', color: 'white' }}
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>
      <button
        className="btn mx-2"
        style={{ backgroundColor: props.mode === 'dark' ? '#6c757d' : props.mode === 'yellow' ? '#fdd835' : props.mode === 'pink' ? '#ff69b4' : props.mode === 'green' ? '#28a745' : props.mode === 'blue' ? '#007bff' : '#0d6efd', color: 'white' }}
        onClick={handleClearOnClick}
      >
        Clear Text
      </button>


      </div>
      <div className="container" style={{ color: modeStyle.color }}>
        <h1>Text Summary</h1>
        <p>{text.trim().split(/\s+/).filter((word) => word !== '').length} words and {text.length} characters</p>
        <p>
          {text.trim().length > 0
            ? (0.008 * text.split(/\s+/).length).toFixed(2)
            : 0}{' '}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : 'Enter something into the textbox to preview'}
        </p>
      </div>
    </>
  );
}
