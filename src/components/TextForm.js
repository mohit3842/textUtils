import React,{useState} from 'react';

function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success");
  }

  const handleLoClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase","success");
  }

  const handleClearClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

  const handleOnChange =(event) =>  {
    //console.log("On Change");
    setText(event.target.value);
  }
  
  const [text,setText] = useState("Enter text here2");
  
  //text = "new text"; //wrong way to change the state
  //setText("new text");  //Correct way to change the state
  return(
    <>
  <div className='container' style={{color:props.mode=="dark" ? "white":"black"}}>
    <h1>{props.heading}</h1>
          <div className="mb-2">
      <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode=="dark" ? "#13466e":"white",color:props.mode=="dark" ? "white":"black"}} id="myBox" rows="10"></textarea>
          </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

  </div>
  <div className="container my-2" style={{color:props.mode=="dark" ? "white":"black"}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    {/*<p>{text.length>0 ? Text:"Enter something in the textbox above to preview it here"}</p>*/}
  </div>
  </>
  )
}

export default TextForm
