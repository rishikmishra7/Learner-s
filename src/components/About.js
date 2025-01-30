import React from 'react';

export default function About({ mode }) {
  const mystyle = {
    color: mode === 'dark' ? 'white' : 'black',
    backgroundColor: mode === 'dark' ? '#2c2c2c' : 'white',
    border: mode === 'dark' ? '1px solid white' : '1px solid black',
  };

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample" style={mystyle}>
      <h2>About Us</h2>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne">
            About Rishik Mishra
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body">
            <strong>He is learning React JS.</strong> He is initially a backend developer but now he is moving to Fullstack.
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
    </div>
  );
}
