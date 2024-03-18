import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./modal";
// import TodoList from "./components/TodoList";
import TodoList from "./components/TodoList";

const App:React.FC =()=> {

  // create state using typescript type
  const [todo,setTodo] = useState<string|number>("")
  const [todos,setTodos] = useState<Todo[]>([])  //use modal file todo and its type array in ts


  // handleSubmit 
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo(" ")
    }
  }

  console.log(todos);

  return (
    <>
      
      <div className="App" >
        <span className="heading" >Taskify</span>
       <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
       <TodoList todos={todos} setTodos={setTodos} />
         {/* {todos.map((data)=>{
          return(
            <>
              {data.id}
              {data.todo}
              {data.isDone}
            </>
          )
         })} */}
      </div>
    </>
  );
}

export default App;
