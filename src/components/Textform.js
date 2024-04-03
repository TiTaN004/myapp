import React, { useState } from "react"; 

export default function Textform(props) {
  const [text, setText] = useState("");

  const hendleUpClick = () => {
    let newStr = text.toUpperCase();
    // newStr = newStr.toUpperCase;
    setText(newStr);
    props.showalert("Converted To UpperCase","success ");
  };
  const hendleDownClick = () => {
    let newStr = text.toLowerCase();
    // newStr = newStr.toUpperCase;
    setText(newStr);
    props.showalert("Converted To LowerCase","success ");
  };
  const hendleClearClick = () => {
    let newStr = "";
    // newStr = newStr.toUpperCase;
    setText(newStr);
    props.showalert("Text Is Cleared","success ");
  };
  const hendleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    // clipboardJS.copy(txt);
    props.showalert("Text Copyed To Clipboard","success ");
  };

  const hendleOnchange = (event) => {
    //console.log("onChange");
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1 style={{color:props.mode==="light" ? "black" : "white"}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{backgroundColor: props.mode==="light" ? "white" : "#5f9ee8f5", color:props.mode==="light" ? "black" : "white"}}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={hendleOnchange}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2" onClick={hendleUpClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={hendleDownClick}>
          Convert To LowerCase
        </button>
         
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={hendleClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={hendleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h1 style={{color:props.mode==="light" ? "black" : "white"}}>Text Summary</h1>
        <p style={{color:props.mode==="light" ? "black" : "white"}}>
          {text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words | {text.length} Characters |{" "}
          {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes To Read | Keyword Count is {}
        </p>
        <h3 className="container my-3" style={{color:props.mode==="light" ? "black" : "white"}}>Preview</h3>
        <p style={{color:props.mode==="light" ? "black" : "white"}}>{text.length>0?text:"Nothing To Preview"}</p>
      </div>
    </>
  );
}
