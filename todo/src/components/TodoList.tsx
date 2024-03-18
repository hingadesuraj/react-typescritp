import React from "react";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div >
     {todos.map((data)=>{
      return(
        <div key={data.id}
        style={{
          border: "1px solid black",
          height: "20px",
          width: "500px",
          backgroundColor: "white",
          padding: "5px",
          marginBottom:"5px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
        
          }}
        >
          <div>
            <h5>{data.todo}</h5>
          </div>
          <div style={{ display: "flex", gap: "5px"}}>
            <button style={{cursor:"pointer"}} >Edit</button>
            <button style={{cursor:"pointer"}} >Delete</button>
            <button style={{cursor:"pointer"}} >Complete</button>
          </div>
        </div>
      </div>
      )
     })}
    </div>
  );
};

export default TodoList;
