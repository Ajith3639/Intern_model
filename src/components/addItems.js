import React from 'react'
import { useState } from 'react';
import "../css/addItems.css"
function AddItems(props) {
    const [title,addTitle]=useState("");
    const newItem=(e)=>{
        addTitle(e.target.value);
        console.log(title);
    }
    const addItem=(event)=>{
        event.preventDefault();
        props.onAdd(title);

    }
    return (
        <div className="addItems">
            <div className="newAdd">
          <input className="secondInput" onChange={newItem} placeholder="Add new"/>
          <button  onClick= {addItem} className="add">+</button>
            </div>
        </div>
    )
}

export default AddItems;
 