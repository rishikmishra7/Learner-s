import React, { useState } from 'react'

export default function About() {
  const [mystyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (mystyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample" style={mystyle}>
      <h2>About Us</h2>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default until the collapse plugin adds the appropriate classes. These classes control the appearance and hiding via CSS transitions.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default and controlled via CSS transitions.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default and controlled via CSS transitions.
          </div>
        </div>
      </div>
      <div className="container my-3"> 
        <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
      </div>
    </div>
  );
}
