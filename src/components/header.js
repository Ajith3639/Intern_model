import React, { useState } from "react";
import "../css/header.css";
import Dropdown from "./dropdown";
import Content from "./content";
import TableHead from "./tableHead";
import AddItems from "./addItems";

function Header() {
  const [drop, onDrop] = useState(false);
  const [element,setElement]=useState("");
  const [tab, setTab] = useState(false);
  
  const [notes,setNotes]=useState(["Doctor","Engineer","Student"])
  const onClick = () => onDrop(true);
  
  function HandleSelect(e){
              setElement(e);
              setTab(true);
              console.log(element);
  }
  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes,note];
    })
}
  return (
    <div >
      <div className="main">
        <div className="dropDown">      {drop ? <Dropdown onSelect={HandleSelect} /> : null}</div>

      </div>
      <div className="header">
        <div className="left">
          <h3>Accomodation Service</h3>
          <div className="bottomBox"></div>
          
        </div>
        <div className="button" onClick={onClick}>
          +
        </div>

      </div>
      <div className="newElement">
      {tab?<div className="arrow2"/>:null}
      {tab?<TableHead  value={element} text="What service do you need?"/>:null}
      
           
           {tab? 
            
           notes.map((note)=>{
             return(
             <Content title={note}/>
             
             )}
             )
             
              : null}
              {tab?<AddItems onAdd={addNote}/>:null}
      </div>
    </div>
  );
}

export default Header;
