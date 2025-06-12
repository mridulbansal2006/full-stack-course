import { useState } from "react"

export const Colour = () => {
    let [colour,setcolour]=useState('red')
    const pink=()=>{
        setcolour('pink')
    }
  return (
    <>
    <h1>my fav colour is {colour}</h1>

    <button onClick={pink}>pinkcolour</button>
    <button>skincolour</button>
    </>
  )
}
