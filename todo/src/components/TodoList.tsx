import React from 'react'

interface Props{
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
} 

const TodoList:React.FC = ({todos,setTodos}:Props) => {
  return (
    <div>
        <div style={{border:"1px solid black",}} >
            
        </div>
    </div>
  )
}

export default TodoList