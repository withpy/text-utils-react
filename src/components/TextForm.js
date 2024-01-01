import React,{ useState } from "react";

export default function TextForm(props) {
  // const handelTF=(event)=>{
  //   if (text.toLowerCase()==='enter your text') {
  //     setText("")
  //   }       
  // }
  document.title="TextUtils - Home" 

  const handelOnchange=(event)=>{
    setText(event.target.value)
  }

  const handelUC=()=>{
    setText(text.toUpperCase())
  }
  const handelLC=()=>{
    setText(text.toLowerCase())
  }
  const handelcopy=()=>{
    navigator.clipboard.writeText(text)
    props.setalert("success","Text copied")
  }
  const handelclear=()=>{
    setText('')
  }
  
  const wordcounter=()=>{
    if (text.trim()===""){
      return 0;
    }
    return text.trim().split(" ").length;
  }
  
  // const [text, setText] = useState('Enter Your Text');
  const [text, setText] = useState('');
  return (
    <>
    <div className="container mb-3">
      <label htmlFor="Textarea" className="form-label">
        <h3>{props.heading}</h3>
      </label>
      <textarea
        className="form-control"
        id="Textarea"
        rows="10"
        value={text}
        onChange={handelOnchange}
        // onFocus={handelTF}
        placeholder="Enter Your Text"
      ></textarea>
  </div>
    <button className="btn btn-secondary mx-2" onClick={handelUC}>
      Convert to Uppercase
    </button>
    <button className="btn btn-secondary mx-2" onClick={handelLC}>
    Convert to Lowercase
    </button>
    <button className="btn btn-secondary mx-2" onClick={handelcopy}>
    Copy Text
    </button>
    <button className="btn btn-secondary mx-2" onClick={handelclear}>
    Clear
    </button>
    <div className="container my-3">
      <h2>Text Summary</h2>
      <p>{wordcounter()} Words and {text.trim().length} Characters</p>
      <p>Average reading time: {wordcounter()*0.005} Minutes</p>
      <h2>Preview</h2>
      <p>{wordcounter()>0?text:"Enter something in text area for preview"}</p>
  </div>
  
    </>
  );
}
