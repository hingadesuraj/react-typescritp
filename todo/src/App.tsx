import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./modal";

const App:React.FC =()=> {

  // create state using typescript type
  const [todo,setTodo] = useState<string|number>("")
  const [todos,setTodos] = useState<Todo[]>([])  //use modal file todo and its type array in ts


  // handleSubmit 
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
  }

  console.log(todo);

  return (
    <>
      
      <div className="App" >
        <span className="heading" >Taskify</span>
       <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
         
      </div>
    </>
  );
}

export default App;
