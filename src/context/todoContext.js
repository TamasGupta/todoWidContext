import React, { useContext, useState } from "react";

export const TodoContext = React.createContext({
    todos:[
        {
            id: 1,
            todo: "Task 1",
            completed: false 
        }
      ],
      addTodo: (todo) => {},
      deleteTodo: (id) => {},
      toggleTodo: (id) => {},
      updateTodo: (id,todo) => {},
})



export const useTodo = ()=> { return useContext(TodoContext)}
export const TodoProvider = TodoContext.Provider