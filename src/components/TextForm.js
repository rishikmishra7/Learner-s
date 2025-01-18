import React,{useState} from 'react'
export default function TextForm(props) {
const handleUpclick =()=>{
    //console.log("Uppercase was clicked " +text)
    let newText =text.toUpperCase();
    setText(newText);
}
const handleLoclick =()=>{
  //console.log("Uppercase was clicked " +text)
  let newText =text.toLowerCase();
  setText(newText);
}
const handleClearclick =()=>{
  //console.log("Uppercase was clicked " +text)
  let newText =("");
  setText(newText);
}
const handleCopyclick = () => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied to clipboard!");
  });
};
const handleOnChange =(event)=>{
  //  console.log("On Change")
    setText(event.target.value);
}

    const [text, setText] = useState('');

  return (
    <>
    <div className="container">
        <h1>{props.heading} </h1>
     <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
<button className="btn btn-primary mx-1" onClick={handleCopyclick}>Copy</button>



    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    
    </div>
    </>

  )
}
