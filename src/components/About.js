import React, { useState } from 'react';

export default function About() {
  const [style, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    if (style.color === 'black') {
      setStyle({ color: 'white', backgroundColor: 'black', border: '1px solid white' });
      setBtnText('Enable Light Mode');
    } else {
      setStyle({ color: 'black', backgroundColor: 'white' });
      setBtnText('Enable Dark Mode');
    }
  };

  return (
    <div className="container" style={style}>
      <h1>About Us</h1>
      <p>This is a demo application to analyze text.</p>
      <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
    </div>
  );
}
