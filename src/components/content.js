import React, { useState } from 'react'
import "../css/content.css"
function Content(props) {
    const [input,setInput]=useState(false);

    const [text,setText]=useState("");

    const[temp,setTemp]=useState("");


    const captureText=(e)=>{
        const newText=e.target.value;
        setTemp(newText);
        }


    const onSubmit=(e)=>{
        setText(temp);
        setInput(false);
        e.preventDefault();
    }
    const editButton=()=> setInput(true);

    return (
        <div className="options">
        <div className="options_content">
         <p className="optionPara">{text? text:props.title}</p>
          <button className="delete"> Delete</button>
          <button className="edit" onClick={editButton}> Edit </button>

          <form onSubmit={onSubmit}>
          {input?<input className="primaryInput" onChange={captureText}  placeholder="input"></input>:null}
          </form>
         
          

          

          </div>
       
          
          
            
        </div>
    )
}

export default Content
