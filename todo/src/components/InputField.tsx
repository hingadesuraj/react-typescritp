import React from 'react'

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string | number>>; // this is a type of function 
}

const InputField:React.FC<Props>  = ({todo,setTodo}:Props) => {
  return (
    <div style={{display:"flex",font:"40px",padding:"10px"}}>
        <input style={{font:"40px",padding:"10px",borderRadius:"20px",outline:"none" ,border:'none'}} type="text" placeholder='Enter Text Here' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button  style={{font:"40px",padding:"10px",borderRadius:"20px",border:"none"}} >Go</button>
    </div>
  )
}

export default InputField