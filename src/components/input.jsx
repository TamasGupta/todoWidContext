import React, { useState } from 'react'
import { useTodo } from '../context'

function input() {
 const [todo,settodo]= useState("")
 const {addTodo} =useTodo()

 const add =(e)=>{
  e.preventDefault()
 
  if (!todo) return
  addTodo({todo,completed:false})
  console.log("fccg")
  settodo("")
 }
  return (
    <div className='flex mt-[15vh]   justify-center bg-red-300'>
        <form action="" onSubmit={add} className='flex gap-2 '>
            <input type="text"
            value={todo}
            onChange={(e)=> settodo(e.target.value)} 
             className='bg-zinc-300 rounded-lg p-2 w-[30vw]'  />
            <button type='submit' className='bg-orange-200 rounded-full p-2' >Add</button>
        </form>
    </div>
  )
}

export default input