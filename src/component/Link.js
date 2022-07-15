import React, { useState } from 'react'

export default function Link() {
  const [text, settext] = useState('');
  


  // function for upper case change
  function upclick() {
    let newtext = text.toUpperCase();
    settext(newtext)
  }

  //function for lower case change
  function loclick() {
      let newtext = text.toLowerCase();
        settext(newtext)
      }

  // to access text from textarea
  function handleonchange(event) {
     settext(event.target.value)
  }

  
  return (
    <>
    <div className="container">
      <div className="mb-3 my-3">
        <textarea className="form-control" id="Linkarea" value={text} onChange={handleonchange} row="80" />
        <div className="form-text">WRITE YOUR TEXT HERE.</div>
      </div>

      <button className="btn btn-secondary mx-3"  onClick={upclick}>Uppercase</button>
      <button className="btn btn-secondary mx-3"  onClick={loclick}>Lowercase</button>
      
    </div>
    <div className="container my-5">
    <h2 >Text Summary </h2>
    <p>{text.split(" ").length} words and {text.length} characters you have type.</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    
    </>
  )
}
