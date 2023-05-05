import React, { useState } from 'react'
import "./App.css"
import TodoLists from './TodoLists';


const App = () => {

  const[inputList,setInputList]=useState("");
  const [items, setItems] = useState([]);

  const addEvent = (e) =>{
    setInputList(e.target.value);
  }

  const itemList = () =>{
     setItems((oldItems) => {
      return [...oldItems, inputList]
      
     }
  );
  setInputList ("")
  }
  const deleteItems = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) =>{
        return index !==id;
      })
      
     })
  }

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> TO DO LIST</h1>
        <br />
        <input type="text" placeholder='Add a item' 
        value={inputList} onChange={addEvent}/>
        <button onClick ={itemList} > + </button>
        <ol>
          {/* <li> {inputList}
          </li> */}

         { items.map((itemVal,index) =>{
           return <TodoLists 
           text = {itemVal}
           key = {index}
           id={index}
           onSelect={deleteItems}
           />
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App;