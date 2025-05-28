import { useState } from "react"


function App(){
  let [counter,setcounter]=useState(0)

  const addvalue=()=>{
    counter+=1
    setcounter(counter)
  }
  const deletevalue=()=>{
    counter-=1
    setcounter(counter)
  }
  return(
    <>
    <h1>mridul</h1>
    <h2>counter value :{counter}</h2>
    <button
      onClick={addvalue}>add value</button><br /><br />
    <button
     onClick={deletevalue}>delete value</button>
    </>
  )
}
export default App