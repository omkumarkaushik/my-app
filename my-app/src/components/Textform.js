import React from 'react'
import { useState } from 'react'

export default function Textform() {
const [text, setText] = useState("This the text");

const handlechange=(event)=>{
    setText(event.target.value)
}

const handleUpClick=()=>{
    let Newtext = text.toUpperCase();
    setText(Newtext);
}

const handleDownClick=()=>{
    let Newtext = text.toLowerCase();
    setText(Newtext);
}
  return (
    <div className='container'>
        <div className="container">
            <h1>Text to Analyze : </h1>
            <textarea className="form-control" id="mybox" rows="6" value={text} onChange={handlechange}></textarea>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Uppercase the letters</button>
            <button type="button" className="btn btn-primary mx-3" onClick={handleDownClick}>Lowercase the letters</button>
        </div>
        Total number of characters are <b>{text.length}</b> and words are <b>{text.split(' ').length}</b>
        <div className='container'>
            <h2>Preview:</h2>
            <br/>
            {text}
        </div>
    </div>
  )
}
