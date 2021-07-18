import React,{useState} from 'react'
import './App.css';
import AddItems from './components/addItems.js';
import Content from './components/content';
import Header from './components/header';
import TableHead from './components/tableHead';





function App() {
  const [notes,setNotes]=useState(["Camera","Audio","Recording"])


  function addNote(note){
       setNotes(prevNotes=>{
         return [...prevNotes,note];
       })
  }
 
    
  return (
    
    <div className="App">
  
    <Header />
    
    
    <div className="headings">
 
    <TableHead  value="AccomodationBrokers" text="What service do you need?"/>

      
 
   {notes.map((note)=>{return(<Content title={note}/>)})} 
   <AddItems onAdd={addNote}/>
    
  
    </div>
    
     </div>
  );
}

export default App;
