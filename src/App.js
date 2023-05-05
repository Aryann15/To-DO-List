import React, { useState } from 'react'
import "./App.css"

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
  )
  }

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> TO DO LIST</h1>
        <br />
        <input type="text" placeholder='Add a item' onChange={addEvent}/>
        <button onClick ={itemList} > + </button>
        <ol>
          {/* <li> {inputList}
          </li> */}

         { items.map((itemVal) =>{
            return <li>
              {itemVal}
            </li>
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App;