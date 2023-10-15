import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=() =>{
        //console.log("upper case was clicked")
        let newText=text.toUpperCase();
        setText(newText)
        
    }

    const handleLoClick=() => {
        let newText = text.toLowerCase();
        setText(newText);
        
    }
    const handleClearClick = () => {
        setText('');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const[text, setText]=useState('');
  return (
    <>
 <div>
     <h1>{props.heading}</h1>
    
      
      <div className="mb-3">
      
      <textarea className="form-control" value={text}  onChange={handleOnChange} id="textBox" 
      rows="8" style={{ color: 'red' }}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upcase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
 </div>
</>
  )
}

