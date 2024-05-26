import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useTodo } from '../context';
import Picker from 'emoji-picker-react';
function task({todo}) {

 const [editable,seteditable]=   useState(false)
 const [todomsg, settodomsg] = useState(todo.todo)
 const {updateTodo,addTodo,toggleTodo,deleteTodo}= useTodo()

const edittodo = ()=>{
  updateTodo(todo.id,{...todo,todo:todomsg})
  seteditable(false)
}
const toglecomplete = (id)=>{
  console.log("completer")
  toggleTodo(todo.id)
 
}

  return (
    <div>
        <div className={`max-w-screen-sm p-4 justify-between flex mt-5 rounded-full  mx-auto ${todo.completed? "bg-green-300":"bg-red-300"} `}> 
         <input type="checkbox" className='cursor-pointer' checked={todo.completed} onChange={toglecomplete} />
           <input type="text" readOnly={!editable} value={todomsg}
           className={`bg-transparent  font-bold focus:outline-none ${editable?"border-black px-2":"border-transparent"} ${todo.completed ? "line-through":""} `} placeholder='tams' 
           onChange={(e)=> settodomsg(e.target.value)}
           />
           <div className='flex gap-4'>
           <button onClick={()=>{
            if(todo.completed) return
            if(editable){
              edittodo()
            } else seteditable((prev)=>!prev);
           }}  disabled={todo.completed} >{editable?"Save":"Edit" }</button>
           <button
            onClick={()=> deleteTodo(todo.id)}
           ><MdOutlineDelete  className='text-2xl'/></button>
           </div>
        </div>
    </div>
  )
}

export default task