import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into UPPERCASE" ,"success");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into lowecase","success");

  };

  const handleClearclick = () => {
    setText('');
    props.showAlert("Text cleared","success");

  };

  const handleCopyclick = () => {
    navigator.clipboard.writeText(text).then(() => {
      //alert("Text copied to clipboard!");
     props.showAlert("Text Copied to clipboard","success");
    });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === 'dark' ? '#333' : 'white', // Dark background for container
          color: props.mode === 'dark' ? 'white' : 'black', // Text color for container
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#555' : 'white', // Dark background for textarea
              color: props.mode === 'dark' ? 'white' : 'black', // Text color for textarea
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyclick}>Copy</button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black', // Text color for summary
        }}
      >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
