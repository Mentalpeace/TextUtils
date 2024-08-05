import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleuptext = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to uppercase","Success")
    };
    const copytext = () => {
        let text = document.getElementById("textForm");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copying done","Success")
    };
    const handleextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra space removed","Success")
    };
    const handlelstext = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to lowercase","Success")
    };

    const cleartext = () => {
        setText("")
        props.showAlert("Dashboard cleared","Success")
    };

    const handleonchange = (event) => {
        setText(event.target.value)
    };//this will help to type and add content

    return (
        <div>
        <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mt-3'>{props.heading}</h1>
            <div className="mt-3">
                <textarea className="form-control" placeholder="Enter your code here"value={text} 
                onChange={handleonchange} id="textForm" 
                style={{backgroundColor: props.mode==='dark'?'grey':'white',
                 color:props.mode==='dark'?'white':'black'}} rows="4"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleuptext}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handlelstext}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={copytext}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleextraspaces}> Remove extra spaces</button>
            <button className='btn btn-success mt-2' onClick={cleartext}>Reset</button>
        </div>
         <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} letters</p>
            <p>{0.008*text.split(" ").length} minutes Average reading time</p>
            <h2>Preview words</h2>
            <p>{text.length>0?text:"Please enter above some texts to preview it here"}</p>
        </div>
            </div>
        
    )
};
