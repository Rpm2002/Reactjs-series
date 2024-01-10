import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length,setLength]=useState(8);
  const [numbersAllowed,setnumbersAllowed]=useState(false);
  const [charactersAllowed,setcharactersAllowed]=useState(false);
  const [password,setPassword]=useState("");

  // useRef
  const passwordRef=useRef(null)

  // useCallback
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  const passwordGenerator=useCallback(()=>{
    let password="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) string+="0123456789";
    if(charactersAllowed) string+="~!@#$%^&*()_+?/,.:;";

    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*string.length+1);
      password+=string.charAt(char);
    }

    setPassword(password);
    
  },[length,numbersAllowed,charactersAllowed,setPassword])

  const copyPasswordtoClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect
  // useEffect is a React Hook that lets you synchronize a component with an external system.

  useEffect(()=>{
    passwordGenerator()
  },[length,numbersAllowed,charactersAllowed,passwordGenerator])

  return (
    <>
      <div className='w-auto max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3
      text-orange-600 bg-gray-700'>
      <h1 className='flex shadow rounded-lg overflow-hidden' class='text-center text-yellow-400'>Password Generator</h1>
      <div className='flex shadow items-center gap-x-1  flex-row rounded-lg overflow-hidden mb-4' >
        <input 
          type='text'
          value={password}
          className='outline-none w-full'
          placeholder='password'
          readOnly
          ref={passwordRef}
         />
         <button onClick={copyPasswordtoClipBoard} className=' bg-blue-700 text-white px-1 py-0.5 shrink-0'>Copy</button>
        </div> 

        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-2'>
              <input
                type='range'
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numbersAllowed}
                id='numberInput'
                onChange={()=>{setnumbersAllowed((prev)>=!prev)}}
              />
              <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={charactersAllowed}
                id='charcterInput'
                onChange={()=>{setcharactersAllowed((prev)>=!prev)}}
              />
              <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>     
      </div>
    </>
  )
}

export default App
