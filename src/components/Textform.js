import React ,{ useState } from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }
    const handleloClick=()=>{
        setText(text.toLowerCase());
    }
    const handleClearClick=()=>{
        setText('');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const rotate=()=>{
        setText(text.substring(1,text.length)+text.substring(0,1));
    }
    const[text,setText]=useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3"> 
            <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'black',
            color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-danger mx-3" onClick={handleloClick}>Convert to lower Case</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-success mx-2" onClick={rotate}>Rotate</button>
        </div>
        <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}}>
            <h3>Your text summary</h3>
            <p> {text.split(' ').length} words and {text.length} characters</p>
            <h2>Text Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
    
}