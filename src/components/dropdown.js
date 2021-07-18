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
        </option>
        <option  value="Real Estate">RealEstate</option>
        <option  value="Womens Hostel">WomensHostel</option>
        <option  value="Lodging">Lodging</option>
        <option  value="Kid's Hostel">Kid'sHostel</option>
      </select>
      
    </div>
  );
}
export default Dropdown;
