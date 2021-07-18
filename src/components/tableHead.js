import React from 'react'
import "../css/tableHead.css"
function TableHead(props) {
    return (
        <div className="block">
          <div className="block_header">
          <p >{props.value}</p>
          </div>

        <p> {props.text}</p>

        <div className="block_contents">
            <p></p>
        </div>
            
        </div>
    )
}

export default TableHead
