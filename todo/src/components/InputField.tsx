import React from 'react'

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string | number>>;
}

const InputField:React.FC  = ({todo,setTodo}:Props) => {
  return (
    <div style={{display:"flex",font:"40px",padding:"10px"}}>
        <input style={{font:"40px",padding:"10px",borderRadius:"20px",outline:"none"}} type="text" placeholder='Enter Text Here' />
        <button  style={{font:"40px",padding:"10px",borderRadius:"20px"}} >Go</button>
    </div>
  )
}

export default InputField