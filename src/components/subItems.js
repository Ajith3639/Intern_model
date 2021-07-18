import React from 'react'
import Content from "./content";
import TableHead from "./tableHead";
import AddItems from "./addItems";
import {element} from "./header"

function subItems() {
    const [element,setElement]=useState("");
    const [tab, setTab] = useState(false);
    const [notes,setNotes]=useState(["Doctor","Engineer","Student"])
    function HandleSelect(e){
        setElement(e);
        setTab(true);
}
    function addNote(note){
        setNotes(prevNotes=>{
          return [...prevNotes,note];
        })
    }
    return (
        <div className="newElement">
        <div className="insideElement">
        {tab?<TableHead  value={element} text="What service do you need?"/>:null}
        </div>
             
             {tab? 
              
             notes.map((note)=>{
               return(
               <Content title={note}/>
               
               )}
               )
               
                : null}
                {tab?<AddItems onAdd={addNote}/>:null}
        </div>
    )
}

export default subItems
