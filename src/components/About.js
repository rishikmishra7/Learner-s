import React, { useState } from 'react'
              
export default function About() {
  const [mystyle, setMyStyle] =useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btntext, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle =()=>{
      if(mystyle.color ==='black'){
        setMyStyle({color: 'white', 
          backgroundColor: 'black',
          border: '1px solid white'
        })
        setBtnText("Enable Dark Mode")
      }else
      {
        setMyStyle({color: 'black', 
          backgroundColor: 'white'
        })
        setBtnText("Enable Light Mode")
      }

  }

  return (

    <div className="accordion" id="accordionPanelsStayOpenExample" style={mystyle}>
        <h2>About US</h2>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="container my-3"> 
      <button className="btn btn-primary" onClick={toggleStyle} type="dark mode"  > {btntext}</button>
      </div>
    </div>
  )
}
