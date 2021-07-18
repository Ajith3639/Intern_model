import React from "react";
import { useState } from "react/cjs/react.development";
import "../css/dropDown.css"

 function Dropdown(props) {
   const [drop,onDrop]=useState("select")

  
  const onClick=(e)=>{
    onDrop(e.target.value);
    props.onSelect(drop);


}
    
  return (
    <div>
      <select onChange={onClick} className="dropDown" >
        <option  defaultValue="select">
          Select
        </option><hr/>
        <option  value="Real Estate">Real Estate</option><hr/>
        <option  value="Womens Hostel">Womens Hostel</option><hr/>
        <option  value="Lodging">Lodging</option><hr/>
        <option  value="Kid's Hostel">Kid's Hostel</option><hr/>
      </select>
      
    </div>
  );
}
export default Dropdown;
