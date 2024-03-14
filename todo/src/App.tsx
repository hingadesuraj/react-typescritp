import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

const App:React.FC =()=> {

  // create state using typescript type
  const [todo,setTodo] = useState<string|number>("")

  console.log(todo);

  return (
    <>
      
      <div className="App" >
        <span className="heading" >Taskify</span>
       <InputField todo={todo} setTodo={setTodo} />
         
      </div>
    </>
  );
}

export default App;
