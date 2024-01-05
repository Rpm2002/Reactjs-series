import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15) // useState hook k andar jo value pass karna chahe kar sakte ho
      // let counter=15                      The first value is our current state.
                                         //  The second value is the function that is used to update our state.
  let addvalue=()=>{
    // counter=counter+1
    if(counter<20)
    {
      setCounter(counter+1)
      // console.log('Clicked',counter);
    }
    
    // console.log('Clicked',counter);
  }

  let removevalue=()=>{
    if(counter>0)
    {
      setCounter(counter-1)
      // console.log('Clicked',counter);
    }
    
  }

  return (
    <>
      <h1>Chai aur React series</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br></br>
      <button onClick={removevalue}>Decrease Value</button>
    </>
  )
}

export default App
