import React, { useEffect, useState } from 'react'
import Input from './components/input'
import Task from './components/task'
import  {TodoProvider} from './context/todoContext'

function App() {
  const [todos,setTodos]= useState([]);
 
  const addTodo =(todo) =>{
   setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
   console.log(Date.now())
 }
 
  const updateTodo =(id,todo) => {
  setTodos(todos.map(prevtodo => (prevtodo.id===id?todo:prevtodo)))
  console.log("update")
 }

const deleteTodo = (id)=> {
  setTodos(todos.filter(todo => todo.id!== id))
}

const toggleTodo = (id) => {
setTodos( todos.map(prevtodo => prevtodo.id=== id?{...prevtodo,completed:!prevtodo.completed}:prevtodo))
console.log("hchgg")

}
useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos&& todos.length>0){
    setTodos(todos)
  }
},[])
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


  return ( 
   <TodoProvider value={{todos,updateTodo,addTodo,toggleTodo,deleteTodo}} >
     <div className=''>
        <div className='max-w-screen-md mx-auto flex p-4 justify-center bg-sky-300 text-[4vw] '>
         <h1 className='font-semibold font-serif'>
         Todo List
        </h1>
       </div>
      <Input />

     {
      todos.map((todo) =>(
      <div key={todo.id}>
        <Task todo={todo}/>
      </div>
      ))
     }
    </div>
    </TodoProvider>
  )
}

export default App