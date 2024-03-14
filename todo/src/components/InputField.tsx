import React from 'react'

const InputField:React.FC  = () => {
  return (
    <div style={{display:"flex",font:"40px",padding:"10px"}}>
        <input style={{font:"40px",padding:"10px",borderRadius:"20px",outline:"none"}} type="text" placeholder='Enter Text Here' />
        <button  style={{font:"40px",padding:"10px",borderRadius:"20px"}} >Go</button>
    </div>
  )
}

export default InputField