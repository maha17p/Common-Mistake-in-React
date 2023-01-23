import React, { useState } from 'react'

const EmailField = () => {
  console.log("Email");
  const [value,setValue] = useState("")
  return (
    <>
    <input type="text" value={value}  onChange={e => setValue(e.target.value)}/>
    </>
  )
}

const App = () => {
  const [open,setOpen] = useState(false);
  console.log("Appp");
  return (
    <>
    {/* <button onClick={() =>setOpen(prev => !prev)}>click</button>
    {open && EmailField()} */}
    <button onClick={() =>setOpen(prev => !prev)}>click</button>
    {open && <EmailField />}
    </>
  )
}

export default App