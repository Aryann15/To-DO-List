import React from 'react'

const TodoLists = (props) => {

    
     
    return (<>
    <div className="todo_style">
        <ul>
    <button className='delete' onClick={
        ()=>{
            props.onSelect(props.id);
        }
    }>X</button>
    <li> {props.text} </li>
    </ul>
    </div>
    </>)
}

export default TodoLists