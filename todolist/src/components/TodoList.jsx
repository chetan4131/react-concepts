import React, { useState } from 'react'
import { MdDeleteForever, MdEditNote } from "react-icons/md";

const TodoList = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [editIndex, setEditIndex] = useState(null)


   const handleInput = (e) =>{
           setName( e.target.value)
    }

    const addTask = () =>{

        if ( name!=="" ){
            setList([...list, name])
            setName('')
        }
       
    }
    const editTask = () =>{
        console.log(editIndex)
         list.splice(editIndex,1,name)
         let newArray = list
         console.log(newArray)
        setList([...newArray])
        setName('')
        setEditIndex(null)
            
    }

    const deleteItem = (index) => { 
       const filterItem = list.filter((e)=> e !== list[index])
        setList(filterItem)
        
    }
    const editItem = (index) => { 
       const filterItem = list.filter((e)=> e === list[index])
        setName(filterItem)
        console.log(filterItem)
        setEditIndex(index)
    }
  return (
    <>
    <div className='todo-panel'>
    <div className='todo-input'>
      <input type="text" value = {name} onChange={handleInput}/>
      <button onClick={addTask}>Add task</button>
      <button onClick={editTask}>Edit task</button>
    </div>
    </div>

    <div className='todo-list-table'>
        <ul>
           {list.map((e, index)=>{
                  return(
                    <li key= {index}>{e}
                     <span><MdDeleteForever onClick={()=>deleteItem(index)}/></span>
                     <span><MdEditNote onClick={()=>editItem(index)}/></span>
                    </li>
                  )
           })}
        </ul>

       
    </div>
    </>
  )
}

export default TodoList
