import React, { useState } from 'react'
import QRCode from "qrcode.react";

export default function Link() {
  const [text, settext] = useState('');
  const [visible,setvisible]=useState(false)


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

  //qr 
  function QR(){ 
    setvisible(true)
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
      <button className="btn btn-secondary mx-3"  onClick={QR}>GENERATE QR</button>
    </div>
    <div className="container my-5">
    <h2 >Text Summary </h2>
    <p>{text.split(" ").length} words and {text.length} characters you have type.</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    <div className="container" style={{ marginTop: 200, display: "flex",flexDirection: "row" }}>
         <div style={ visible?{display :"block"}: {display:"none"}}>
            <QRCode
                value={text} style={{ marginRight: 50 }}/>
            <p>QR code</p>
         </div>
      </div>
    </>
  )
}
